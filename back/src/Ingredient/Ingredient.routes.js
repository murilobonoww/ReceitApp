import { Router } from "express";
import controller from "./Ingredient.controller.js";

const router = Router()

router.get("/getAll", controller.getAll)
router.get("/getById/:id", controller.getById)

router.post("/create", controller.create)

router.delete("/delete/:id", controller.deleteIngredient)

export default router