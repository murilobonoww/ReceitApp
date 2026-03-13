import prisma from "../database/prismaClient.js"
import { Prisma } from "@prisma/client"

export class IngredientRepository {
    async getAll() {
        try {
            return await prisma.ingredient.findMany()
        } catch (error) {
            console.error("Erro ao buscar ingredientes:", error)
            throw error
        }
    }

    async getById(id) {
        try {
            return await prisma.ingredient.findUnique({
                where: { id: Number(id) }
            })
        } catch (error) {
            console.error("Erro ao buscar ingrediente:", error)
            throw error
        }
    }

    async create(data) {
        try {
            return await prisma.ingredient.create({ data })
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new Error("Este ingrediente já está cadastrado")
                }
            }
            console.error("Erro ao criar ingrediente:", error)
            throw error
        }
    }

    async deleteIngredient(id) {
        try {
            return await prisma.ingredient.delete({
                where: { id: Number(id) }
            })
        } catch (error) {
            console.error("Erro ao excluir ingrediente:", error)
            throw error
        }
    }
}