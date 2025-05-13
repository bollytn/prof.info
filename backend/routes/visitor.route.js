import express from "express";
import { addVisitor, getVisitors } from "../controllers/visitor.controller.js";

const router = express.Router();

// Route to add a visitor
router.post("/add", addVisitor);
// Route to get all visitors
router.get("/", getVisitors);

export default router;