import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CoursesDto } from "./dto/courses.dto";

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}
    create(@Body() dto: CoursesDto){
        return this.prisma.course.create({
            data: {
                title: dto.title,
                description: dto.description,
                category: dto.category,
                thumbnailUrl: "https://example.com/thumbnail.jpg",
                status: "DRAFT",
                teacherId: "",
                gradeId: "",
                price: 200,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        })
    }
}