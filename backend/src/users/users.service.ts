import { Injectable, ConflictException } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    findAll(params?: Prisma.UserFindManyArgs) {
        return this.prisma.user.findMany(params);
    }

    findById(id: string) {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const data = { ...updateUserDto };
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }

    async create(createUserDto: CreateUsersDto) {
        try {
            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            return await this.prisma.user.create({
                data: {
                    ...createUserDto,
                    password: hashedPassword,
                },
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
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new ConflictException('User not found');
                }
            }
            throw error;
        }
    }
}
