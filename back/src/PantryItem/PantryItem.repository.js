import prisma from "../database/prismaClient.js"
import { Prisma } from "@prisma/client"

export class PantryItemRepository {
    async getAll() {
        try {
            return await prisma.pantryItem.findMany()
        } catch (error) {
            console.error("Erro ao buscar itens da despensa:", error)
            throw error
        }
    }

    async getById(id) {
        try {
            return await prisma.pantryItem.findUnique({
                where: { id: Number(id) }
            })
        } catch (error) {
            console.error("Erro ao buscar item da despensa:", error)
            throw error
        }
    }

    async create(data) {
        try {
            return await prisma.pantryItem.create({ data })
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new Error("Este item já está cadastrado")
                }
            }
            console.error("Erro ao criar item da despensa:", error)
            throw error
        }
    }

    async deletePantryItem(id) {
        try {
            return await prisma.pantryItem.delete({
                where: { id: Number(id) }
            })
        } catch (error) {
            console.error("Erro ao excluir item da despensa:", error)
            throw error
        }
    }
}