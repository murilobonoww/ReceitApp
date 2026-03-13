import prisma from "../database/prismaClient.js"
import { Prisma } from "@prisma/client"

export class UserRepository {
    async getAll() {
        try {
            return await prisma.user.findMany()
        } catch (error) {
            console.error("Erro ao buscar usuários:", error)
            throw error
        }
    }

    async getById(id) {
        try {
            return await prisma.user.findUnique({
                where: { id: Number(id) }
            })
        } catch (error) {
            console.error("Erro ao buscar usuário:", error)
            throw error
        }
    }

    async create(data) {
        try {
            return await prisma.user.create({ data })

        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new Error("Este email já está cadastrado")
                }
            }
            console.error("Erro ao criar usuário:", error)
            throw error
        }
    }

    async deleteUser(id) {
        try {
            return await prisma.user.delete({
                where: { id: Number(id) }
            })
        } catch (error) {
            console.error("Erro ao excluir usuário:", error)
            throw error
        }
    }
}