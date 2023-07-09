import express from "express";
import { deleteUser, getUser, getUsers } from "../controllers/userController.js"
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router()

// ROUTE    /users/:id
// DESC.    @GET (READ) User in Users Collection
router.get("/", getUsers)

// ROUTE    /user/:id
// DESC.    @GET (DELETE) User in Users Collection
router.get("/:id", getUser)

// ROUTE    /user/:id
// DESC.    @DELETE (DELETE) User in Users Collection
router.delete("/:id", verifyToken, deleteUser)



export default router
