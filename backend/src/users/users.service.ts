import { Injectable, ConflictException } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable() 
export class UsersService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.user.findMany();
    }
    
    findById(id: string) {
        return this.prisma.user.findUnique({ where: { id } });
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
    }

    async create(createUserDto: CreateUsersDto) {
        try {
            return await this.prisma.user.create({
                data: createUserDto,
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002' && (error.meta?.target as string[])?.includes('email')) {
                    throw new ConflictException('Email already exists');
                }
            }
            throw error;
        }
    }

    async delete(id: string) {
        try {
            return await this.prisma.user.delete({ where: { id } });
        }
        catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                if(error.code === 'P2025') {
                    throw new ConflictException('User not found');
                }
            }
            throw error;
        }
    }
}
