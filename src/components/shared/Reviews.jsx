import React, { useState, useEffect } from 'react';
import { Star, Verified, Loader2, ChevronDown } from 'lucide-react';

const Reviews = ({ domain, summary = false }) => {
    const [reviews, setReviews] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openReviews, setOpenReviews] = useState(new Set());

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:3001/api/reviews/${domain}`);
                const data = await response.json();
                if (data.success) {
                    setReviews(data.reviews);
                    setStats(data.stats);
                } else {
                    throw new Error(data.message);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (domain) {
            fetchReviews();
        }
    }, [domain]);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 text-red-600 bg-red-50 rounded-lg">
                Error: {error}
            </div>
        );
    }

    if (!stats) {
        return (
            <div className="p-4 text-gray-500">
                No reviews found
            </div>
        );
    }

    if (summary) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">{stats.averageRating}</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < Math.round(stats.averageRating)
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                            Based on {stats.totalReviews} reviews
                        </div>
                        {stats.verifiedReviews > 0 && (
                            <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
                                <Verified className="w-4 h-4" />
                                <span>{stats.verifiedPercentage}% verified</span>
                            </div>
                        )}
                    </div>
                    <div className="text-xs text-gray-500">
                        Last updated: {new Date(reviews[0]?.date).toLocaleDateString()}
                    </div>
                </div>
                
                {/* Latest Review Preview */}
                {reviews[0] && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium">{reviews[0].name}</span>
                            <span className="text-gray-500">· {reviews[0].location}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {reviews[0].content}
                        </p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="space-y-6 w-full md:w-1/2 mx-auto">
            {/* Stats Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold">{stats.averageRating}</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${
                                            i < Math.round(stats.averageRating)
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="text-gray-600 mt-2">
                            Based on {stats.totalReviews} reviews
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                        <Verified className="w-5 h-5" />
                        <span>{stats.verifiedPercentage}% verified reviews</span>
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.map((review, index) => {
                    const previewContent = review.content.slice(0, 100) + (review.content.length > 100 ? '...' : '');
                    const isLongContent = review.content.length > 100;
                    
                    return (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-sm p-2"
                    >
                        <button
                            onClick={() => {
                                setOpenReviews(prev => {
                                    const newSet = new Set(prev);
                                    if (newSet.has(index)) {
                                        newSet.delete(index);
                                    } else {
                                        newSet.add(index);
                                    }
                                    return newSet;
                                });
                            }}
                            className="w-full text-left p-6 cursor-pointer"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">{review.name}</span>
                                        <span className="text-gray-500">· {review.location}</span>
                                        {review.isVerified && (
                                            <span className="flex items-center gap-1 text-green-600">
                                                <Verified className="w-4 h-4" />
                                                <span className="text-sm">Verified</span>
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < review.rating
                                                        ? 'text-yellow-400 fill-yellow-400'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-sm text-gray-500">
                                        {new Date(review.date).toLocaleDateString()}
                                    </div>
                                    <ChevronDown 
                                        className={`w-5 h-5 transition-transform ${
                                            openReviews.has(index) ? 'rotate-180' : ''
                                        }`}
                                    />
                                </div>
                            </div>
                            
                            {review.title && (
                                <h3 className="font-medium mt-4">{review.title}</h3>
                            )}
                            <p className="text-gray-600 mt-2">
                                {openReviews.has(index) ? review.content : previewContent}
                                {isLongContent && !openReviews.has(index) && (
                                    <span 
                                        className="text-blue-500 ml-1"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setOpenReviews(prev => new Set([...prev, index]));
                                        }}
                                    >
                                        Read more
                                    </span>
                                )}
                            </p>
                        </button>
                        
                        {openReviews.has(index) && (
                            <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                                <div className="text-sm text-gray-500">
                                    Experience date: {review.experienceDate}
                                </div>
                            </div>
                        )}
                    </div>
                )})}
            </div>
        </div>
    );
};

export default Reviews;