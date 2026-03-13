import express from 'express'
import Userrouter from "./src/User/User.routes.js"

const app = express()
app.use(express.json())

app.use("/users", Userrouter)

app.listen(3000, () => {
console.log("Servidor rodando na porta 3000🚀")
})