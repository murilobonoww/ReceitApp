import { Router } from "express"
import controller from "../User/User.controller.js"

const router = Router()

router.get("/getAll", controller.getAll)
router.get("/getById/:id", controller.getById)

router.post("/create", controller.create)

router.delete("/delete/:id", controller.deleteUser)

export default router