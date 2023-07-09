import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getMessages, createMessage } from "../controllers/messageController.js"

const router = express.Router()

// ROUTE    /messages/
// DESC.    @GET (read) all messages in conversation
router.get("/:id", verifyToken, getMessages)

// ROUTE    /messages/
// DESC.    @POST (create) new message in conversation
router.post("/", verifyToken, createMessage)

export default router
