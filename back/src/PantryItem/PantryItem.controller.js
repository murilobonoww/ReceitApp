import { PantryItemRepository } from "./PantryItem.repository.js"
import { PantryItemService } from "./PantryItem.service.js"

const repo = new PantryItemRepository()
const service = new PantryItemService()

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
        res.status(201).send({ message: "Item da despensa criado com sucesso!" })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
}

async function deletePantryItem(req, res) {
    try {
        await repo.deletePantryItem(req.params.id)
        res.status(200).send({ message: "Item da despensa excluído com sucesso!" })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export default {
    getAll,
    getById,
    create,
    deletePantryItem
}