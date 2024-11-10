import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors';

// Helper function to enable CORS
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'https://oceanheart-website-client-v2.vercel.app');

  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  return await fn(req, res);
};

const parseReviews = ($) => {
    const reviews = [];
    
    $('.styles_reviewCard__9HxJJ').each((_, element) => {
        if (!$(element).find('.styles_reviewCardInner__EwDq2').length) {
            return;
        }
        
        // Get reviewer name and profile link
        const profileElement = $(element).find('[data-consumer-profile-link]');
        const name = profileElement.find('[data-consumer-name-typography]').text().trim() || 'Anonymous';
        const profileUrl = profileElement.attr('href') || null;
        // Convert relative URL to absolute URL if it exists
        const fullProfileUrl = profileUrl ? `https://uk.trustpilot.com${profileUrl}` : null;
        
        // Get review link
        const reviewLinkElement = $(element).find('[data-review-title-typography]').closest('a');
        const reviewUrl = reviewLinkElement.attr('href') || null;
        const fullReviewUrl = reviewUrl ? `https://uk.trustpilot.com${reviewUrl}` : null;
        
        const location = $(element).find('[data-consumer-country-typography] span').text().trim() || 'Unknown';
        const ratingImg = $(element).find('.star-rating_medium__iN6Ty img');
        const rating = ratingImg.length ? 
            parseInt(ratingImg.attr('alt').match(/Rated (\d+)/)?.[1] || '0') : 
            0;
        
        const dateElement = $(element).find('[data-service-review-date-time-ago]');
        const date = dateElement.attr('datetime') || 
                    dateElement.text().trim() || 
                    'Unknown Date';
        
        const title = $(element).find('[data-service-review-title-typography]').text().trim() || '';
        const content = $(element).find('[data-service-review-text-typography]').text().trim() || '';
        const isVerified = $(element).find('.styles_reviewLabel__IPaZd').length > 0;
        const experienceDate = $(element)
            .find('[data-service-review-date-of-experience-typography]')
            .text()
            .replace('Date of experience:', '')
            .trim() || '';
            
        reviews.push({
            name,
            profileUrl: fullProfileUrl,
            reviewUrl: fullReviewUrl,
            location,
            rating,
            date,
            title,
            content,
            isVerified,
            experienceDate
        });
    });
    
    return reviews;
};

const calculateStats = (reviews) => {
    const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    const verifiedCount = reviews.filter(review => review.isVerified).length;
    
    return {
        totalReviews: reviews.length,
        averageRating: Number(avgRating.toFixed(1)),
        verifiedReviews: verifiedCount,
        verifiedPercentage: Number(((verifiedCount / reviews.length) * 100).toFixed(1))
    };
};

// Main handler function
async function handler(req, res) {
    const domain = "richardhallett.net"

    try {
        const url = `https://www.trustpilot.com/review/${domain}`;
        
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        const $ = cheerio.load(response.data);
        const reviews = parseReviews($);
        const stats = calculateStats(reviews);
        
        return res.json({
            success: true,
            stats,
            reviews
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Error fetching or parsing reviews',
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}

// Export the handler with CORS enabled
export default allowCors(handler); 