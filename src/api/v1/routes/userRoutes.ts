import express from "express";
import { getUsers, createUser, getUser, updateUser } from "@controllers";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/", updateUser);
// router.patch("/");
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

/**
 * User routes defining CRUD endpoints for the user resource.
 * Includes GET, POST, PATCH, and DELETE routes mapped to the appropriate controller methods.
 */
export const userRoutes = router;
