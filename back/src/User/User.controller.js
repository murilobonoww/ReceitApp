import { UserRepository } from "./User.repository.js"
import { UserService } from "./User.service.js"

const repo = new UserRepository()
const service = new UserService()

async function getAll(req, res) {
    try {
        res.status(200).send(await repo.getAll())
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

async function getById(req, res) {
    try {
        res.status(200).send(await repo.getById(req.params.id))
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

async function create(req, res) {
    try {
        const user = await service.create(req.body)
        res.status(201).send({ message: "Usuário criado com sucesso!" })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
}

async function deleteUser(req, res) {
    try {
        await repo.deleteUser(req.params.id)
        res.status(200).send({ message: "Usuário excluído com sucesso!" })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export default {
    getAll,
    getById,
    create,
    deleteUser
}