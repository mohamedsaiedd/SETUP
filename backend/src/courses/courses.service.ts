import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CoursesDto, UpdateCoursesDto } from "./dto/courses.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}
    async create(dto: CoursesDto) {
        try {
            return await this.prisma.course.create({
                data: {
                    title: dto.title,
                    description: dto.description,
                    category: dto.category,
                    thumbnailUrl: "https://example.com/thumbnail.jpg",
                    status: "DRAFT",
                    price: dto.price,
                    zoomLinks: dto.zoomLinks,
                    sessions: {
                        create: dto.sessions?.map(session => ({
                            title: session.title,
                            date: new Date(session.date),
                            link: session.link
                        }))
                    },
                    teacher: {
                        connect: { id: dto.teacherId }
                    },
                }
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new NotFoundException('Teacher not found');
                }
            }
            throw error;
        }
    }

    async findAll(studentId?: string) {
        return this.prisma.course.findMany({
            where: {
                ...(studentId && {
                    students: {
                        some: {
                            id: studentId
                        }
                    }
                })
            },
            include: {
                teacher: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true
                    }
                },
                sessions: true,
                _count: {
                    select: { students: true }
                }
            }
        });
    }


    async update(id: string , dto: UpdateCoursesDto){
        const { sessions, ...rest } = dto;
        
        // Basic update for course fields
        const course = await this.prisma.course.update({
            where: { id },
            data: {
                ...rest,
                ...(sessions && {
                    sessions: {
                        create: sessions.map(session => ({
                            title: session.title,
                            date: new Date(session.date),
                            link: session.link
                        }))
                    }
                })
            },
            include: { sessions: true }
        })
        return course
    }
    
    async findOne(id: string) {
        const course = await this.prisma.course.findUnique({
            where: { id },
            include: {
                teacher: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                        bio: true
                    }
                },
                sessions: {
                    orderBy: {
                        date: 'asc'
                    }
                },
                students: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true
                    }
                }
            }
        });
        if (!course) {
            throw new NotFoundException(`Course with ID ${id} not found`);
        }
        return course;
    }

    async enroll(courseId: string, userId: string) {
        try {
            return await this.prisma.course.update({
                where: { id: courseId },
                data: {
                    students: {
                        connect: { id: userId }
                    }
                }
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new NotFoundException('Course or User not found');
                }
            }
            throw error;
        }
    }

    async delete(id: string) {
        try {
            return await this.prisma.course.delete({
                where: { id }
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new NotFoundException(`Course with ID ${id} not found`);
                }
            }
            throw error;
        }
    }
}