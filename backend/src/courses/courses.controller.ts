import { Controller, HttpCode, Post, Body, Get, Delete, HttpStatus, Param } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesDto } from "./dto/courses.dto";


@Controller('courses')
export class CoursesController {
    constructor(private CoursesService: CoursesService) { }
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll() {
        return this.CoursesService.findAll({
            include: {
                teacher: {
                    select: {
                        name: true
                    }
                }
            }
        });
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dto: CoursesDto) {
        return this.CoursesService.create(dto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string) {
        return {
            id: (await this.CoursesService.delete(id)).id,
            message: 'Course deleted successfully'
        };
    }
}