import { Controller, HttpCode, Post, Body, Get, Delete, HttpStatus, Param, UseGuards, Query } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesDto } from "./dto/courses.dto";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "@prisma/client";


@Controller('courses')
export class CoursesController {
    constructor(private CoursesService: CoursesService) { }
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query('studentId') studentId?: string) {
        return this.CoursesService.findAll(studentId);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: string) {
        return this.CoursesService.findOne(id);
    }

    @Post()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.SUPERVISOR)
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dto: CoursesDto) {
        return this.CoursesService.create(dto);
    }

    @Post(':id/enroll')
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.SUPERVISOR)
    @HttpCode(HttpStatus.OK)
    async enroll(@Param('id') id: string, @Body('studentId') studentId: string) {
        return this.CoursesService.enroll(id, studentId);
    }

    @Delete(':id')
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.SUPERVISOR)
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string) {
        return {
            id: (await this.CoursesService.delete(id)).id,
            message: 'Course deleted successfully'
        };
    }
}