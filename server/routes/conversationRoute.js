import express from "express";
import { createConversation, getConversation, getConversations, updateConversation} from "../controllers/conversationController.js"
import { verifyToken } from "../middleware/jwt.js"

const router = express.Router()

router.get("/", verifyToken, getConversations)
router.post("/", verifyToken, createConversation)
router.get("/:id", verifyToken, getConversation)
router.put("/:id", verifyToken, updateConversation)

export default router
