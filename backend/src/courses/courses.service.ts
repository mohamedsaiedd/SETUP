import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CoursesDto, UpdateCoursesDto } from "./dto/courses.dto";
import { Prisma } from "@prisma/client";
import { ZoomService } from "src/zoom/zoom.service";

@Injectable()
export class CoursesService {
    constructor(
        private prisma: PrismaService,
        private zoomService: ZoomService
    ) {}
    async create(dto: CoursesDto) {
        try {
            const sessionsData: any[] = [];
            if (dto.sessions) {
                for (const session of dto.sessions) {
                    let link = session.link;
                    if (!link) {
                        try {
                            link = await this.zoomService.createMeeting(session.title, new Date(session.date));
                        } catch (error) {
                            console.error(`Failed to generate Zoom link for ${session.title}:`, error);
                            // Fallback or handle as needed
                            link = 'Pending Generation';
                        }
                    }
                    sessionsData.push({
                        title: session.title,
                        date: new Date(session.date),
                        link: link
                    });
                }
            }

            return await this.prisma.course.create({
                data: {
                    title: dto.title,
                    description: dto.description,
                    category: dto.category,
                    thumbnailUrl: "https://example.com/thumbnail.jpg",
                    status: "DRAFT",
                    price: dto.price,
                    sessions: {
                        create: sessionsData
                    },
                    materials: {
                        create: dto.materials?.map(material => ({
                            title: material.title,
                            type: material.type as any,
                            fileUrl: material.fileUrl
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
                materials: true,
                _count: {
                    select: { students: true }
                }
            }
        });
    }


    async update(id: string , dto: UpdateCoursesDto){
        const { sessions, materials, teacherId, ...rest } = dto;
        
        // Basic update for course fields
        return await this.prisma.course.update({
            where: { id },
            data: {
                ...rest,
                ...(teacherId && {
                    teacher: { connect: { id: teacherId } }
                }),
                ...(sessions && {
                    sessions: {
                        create: await Promise.all(sessions.map(async session => {
                            let link = session.link;
                            if (!link) {
                                try {
                                    link = await this.zoomService.createMeeting(session.title, new Date(session.date));
                                } catch (error) {
                                    link = 'Pending Generation';
                                }
                            }
                            return {
                                title: session.title,
                                date: new Date(session.date),
                                link: link
                            };
                        }))
                    }
                }),
                ...(materials && {
                    materials: {
                        create: materials.map(material => ({
                            title: material.title,
                            type: material.type as any,
                            fileUrl: material.fileUrl
                        }))
                    }
                })
            },
            include: { sessions: true, materials: true }
        });
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
                materials: true,
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


    async unenroll(courseId: string, userId: string) {
        try {
            return await this.prisma.course.update({
                where: { id: courseId },
                data: {
                    students: {
                        disconnect: { id: userId }
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