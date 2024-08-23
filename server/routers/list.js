import { Router } from "express";
import {
  addList,
  deleteList,
  getLists,
  updateList,
} from "../controllers/list.js";

const router = Router();

router.get("/", getLists);
router.post("/", addList);
router.delete("/:id", deleteList);
router.patch("/:id", updateList);

export default router;
