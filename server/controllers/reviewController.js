import Review from "../models/reviewModel.js";
import Gig from "../models/gigModel.js";
import createError from "../utils/createError.js";

// ROUTE    /reviews/
// DESC.    @GET (READ) all reviews
export const getReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find();
        res.status(200).send(reviews)
    } catch (err) {
        next(err);
    }
};

// ROUTE    /reviews/:id
// DESC.    @GET (READ) single review
export const getReview = async (req, res, next) => {
    try {
        const review = await Review.find({ id: req.params.id });
        res.status(200).send(review)
    } catch (err) {
        next(err);
    }

};

// ROUTE    /reviews/:gigId
// DESC.    @GET (READ) all reviews for a single gig
export const getGigReviews = async (req, res, next) => {
    try {
        const gigReviews = await Review.find({ gigId: req.params.gigId });
        res.status(200).send(gigReviews)
    } catch (err) {
        next(err);
    }

};

// ROUTE    /reviews/
// DESC.    @POST (CREATE) new review
export const createReview = async (req, res, next) => {
    if (req.isSeller) return next(createError(403, "Sellers can't create a review!"));

    const newReview = new Review({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        star: req.body.star,
    });

    try {
        const review = await Review.findOne({ gigId: req.body.gigId, userId: req.userId });
        if (review) return next(createError(403, "You have already created a review for this gig!"));

        const savedReview = await newReview.save();
        res.status(201).send(savedReview);

        await Gig.findByIdAndUpdate(req.body.gigId, { $inc: { totalStars: req.body.star, starNumber: 1 } });
    } catch (err) {
        next(err);
    }
};

// ROUTE    /reviews/:id
// DESC.    @DELETE (DELETE) existing review
export const deleteReview = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};
