import { PantryItemRepository } from "./PantryItem.repository.js"

const repo = new PantryItemRepository()

export class PantryItemService {
    async create(data) {
        if (!data || !data.name || !data.unit) throw new Error("Campos obrigatórios não preenchidos")
        return await repo.create(data)
    }
}