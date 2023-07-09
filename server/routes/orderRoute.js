import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, getOrder, createOrder, deleteOrder } from "../controllers/orderController.js"

const router = express.Router()

// ROUTE    /orders
// DESC.    @GET (read) all orders
router.get("/", verifyToken, getOrders)

// ROUTE    /orders
// DESC.    @GET (read) single order
router.get("/:id", verifyToken, getOrder)

// ROUTE    /orders/:gigId
// DESC.    @POST (create) single order
router.post("/:gigId", verifyToken, createOrder)

// ROUTE    /orders
// DESC.    @DELETE (delete) single order
router.delete("/", verifyToken, deleteOrder)


export default router
