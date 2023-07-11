import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, deleteOrder, intent, confirm } from "../controllers/orderController.js"

const router = express.Router()

// ROUTE    /orders
// DESC.    @GET (read) all orders
router.get("/", verifyToken, getOrders)

// ROUTE    /orders
// DESC.    @GET (read) single order
// router.get("/:id", verifyToken, getOrder)

// ROUTE    /orders/:gigId
// DESC.    @POST (create) single order
// router.post("/:gigId", verifyToken, createOrder)

// ROUTE    /orders/create-payment-intent
// DESC.    @POST (create) Stripe payment intent
router.post("/create-payment-intent/:id", verifyToken, intent)

// ROUTE    /orders/
// DESC.    @PUT (update) confirm Stripe payment
router.put("/", verifyToken, confirm)

// ROUTE    /orders
// DESC.    @DELETE (delete) single order
router.delete("/", verifyToken, deleteOrder)


export default router
