import { Router } from "express";

const router = Router()

router.get("/getAll", controller.getAll)
router.get("/getById/:id", controller.getById)

router.post("/create", controller.create)

router.delete("/delete/:id", controller.deletePantryItem)

export default router