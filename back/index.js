import express from 'express'

import Userrouter from "./src/User/User.routes.js"
import PantryItemrouter from "./src/PantryItem/PantryItem.routes.js"

const app = express()
app.use(express.json())

app.use("/users", Userrouter)
app.use("/pantry-items", PantryItemrouter)

app.listen(3000, () => {
console.log("Servidor rodando na porta 3000🚀")
})