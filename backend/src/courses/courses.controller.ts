import { Controller, HttpCode, Post, Body } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesDto } from "./dto/courses.dto";


@Controller('courses')
export class CoursesController {
    constructor(private CoursesService: CoursesService) { }
    @HttpCode(200)
    @Post()
    create(@Body() dto: CoursesDto) {
        return this.CoursesService.create(dto)
    }
}