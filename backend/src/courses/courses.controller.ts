import { Controller, HttpCode, Post, Body, Get, Delete, HttpStatus, Param, UseGuards } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesDto } from "./dto/courses.dto";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "@prisma/client";
import { GetUser } from "src/auth/decorators/user.decorator";


@Controller('courses')
export class CoursesController {
    constructor(private CoursesService: CoursesService) { }
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll() {
        return this.CoursesService.findAll();
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
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async enroll(@Param('id') id: string, @GetUser('id') userId: string) {
        return this.CoursesService.enroll(id, userId);
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