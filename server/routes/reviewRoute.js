import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getReviews, getReview, getGigReviews, createReview, deleteReview } from "../controllers/reviewController.js"

const router = express.Router()

// ROUTE    /reviews/
// DESC.    @GET (READ) All Reviews
router.get("/", getReviews)

// ROUTE    /reviews/:id
// DESC.    @GET (READ) Single Review
router.get("/:id", getReview)

// ROUTE    /reviews/:id
// DESC.    @GET (READ) Single Review
router.get("/:gigId", getGigReviews)

// ROUTE    /reviews/:id
// DESC.    @GET (READ) Single Review
router.post("/", verifyToken, createReview)

// ROUTE    /reviews/:id
// DESC.    @GET (READ) Single Review
router.delete("/:id", verifyToken, deleteReview)

export default router
