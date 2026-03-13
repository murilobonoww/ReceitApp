import { IngredientRepository } from "./Ingredient.repository.js"

const repo = new IngredientRepository()

export class IngredientService {
    async create(data) {
        if (!data || !data.userId || !data.ingredientId) throw new Error("Campos obrigatórios não preenchidos")
        return await repo.create(data)
    }
}