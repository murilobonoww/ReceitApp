import { UserRepository } from "./User.repository.js"

const repo = new UserRepository()

export class UserService {
    async create(data) {
        if (!data || !data.name || !data.email || !data.password) throw new Error("Campos obrigatórios não preenchidos")
        return await repo.create(data)
    }
}