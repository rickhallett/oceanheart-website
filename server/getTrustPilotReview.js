// server/getTrustPilotReview.js
import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();
const port = process.env.PORT || 3001;

// Debug logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Enable CORS
app.use(cors());
console.log('CORS enabled');

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

app.use(limiter);
app.use(express.json());

const parseReviews = ($) => {
    console.log('Starting to parse reviews...');
    const reviews = [];
    
    const reviewElements = $('.styles_reviewCard__9HxJJ');
    console.log(`Found ${reviewElements.length} review elements`);
    
    $('.styles_reviewCard__9HxJJ').each((_, element) => {
        if (!$(element).find('.styles_reviewCardInner__EwDq2').length) {
            return;
        }
        
        const name = $(element).find('[data-consumer-name-typography]').text().trim() || 'Anonymous';
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
            location,
            rating,
            date,
            title,
            content,
            isVerified,
            experienceDate
        });
    });
    
    console.log(`Successfully parsed ${reviews.length} reviews`);
    return reviews;
};

const calculateStats = (reviews) => {
    const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    const verifiedCount = reviews.filter(review => review.isVerified).length;
    
    const stats = {
        totalReviews: reviews.length,
        averageRating: Number(avgRating.toFixed(1)),
        verifiedReviews: verifiedCount,
        verifiedPercentage: Number(((verifiedCount / reviews.length) * 100).toFixed(1))
    };
    
    console.log('Calculated stats:', stats);
    return stats;
};

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/reviews/:domain', async (req, res) => {
    console.log(`Fetching reviews for domain: ${req.params.domain}`);
    
    try {
        const { domain } = req.params;
        const url = `https://www.trustpilot.com/review/${domain}`;
        
        console.log(`Fetching URL: ${url}`);
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        console.log('Successfully fetched HTML');
        const $ = cheerio.load(response.data);
        
        const reviews = parseReviews($);
        const stats = calculateStats(reviews);
        
        console.log(`Sending response with ${reviews.length} reviews`);
        res.json({
            success: true,
            stats,
            reviews
        });
        
    } catch (error) {
        console.error('Error in /api/reviews/:domain:', error);
        res.status(500).json({
            success: false,
            error: 'Error fetching or parsing reviews',
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Global error handler:', err);
    res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

const server = app.listen(port, () => {
    console.log(`Review server running on port ${port}`);
    console.log(`Health check available at: http://localhost:${port}/api/health`);
    console.log(`Example API call: http://localhost:${port}/api/reviews/richardhallett.net`);
});

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
});