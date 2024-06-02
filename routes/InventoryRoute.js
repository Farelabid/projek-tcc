import express from "express";
import { getInventory, getInventoryById, createInventory, updateInventory, deleteInventory } from "../controllers/InventoryController.js";

const router = express.Router();

router.get("/inventories", getInventory);
router.get("/inventories/:id", getInventoryById);
router.post("/inventories", createInventory);
router.patch("/inventories/:id", updateInventory);
router.delete("/inventories/:id", deleteInventory);

export default router;
