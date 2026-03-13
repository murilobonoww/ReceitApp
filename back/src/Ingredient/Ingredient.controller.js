import { IngredientRepository } from "./Ingredient.repository.js"
import { IngredientService } from "./Ingredient.service.js"

const repo = new IngredientRepository()
const service = new IngredientService()

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
        res.status(201).send({ message: "Ingrediente criado com sucesso!" })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
}

async function deleteIngredient(req, res) {
    try {
        await repo.deleteIngredient(req.params.id)
        res.status(200).send({ message: "Ingrediente excluído com sucesso!" })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export default {
    getAll,
    getById,
    create,
    deleteIngredient
}