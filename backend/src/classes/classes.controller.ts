import { Controller, Get, Post, Body, HttpCode, HttpStatus, Delete, Param } from "@nestjs/common";
import { ClassesService } from "./classes.service";
import { ClassesDto } from "./dto/classes.dto";

@Controller('classes')
export class ClassesController{
    constructor(private classesService: ClassesService){}
    @HttpCode(HttpStatus.OK)
    @Get()
    findAll() {
        return this.classesService.findAll();
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() dto: ClassesDto) {
        return {
            id : (await this.classesService.create(dto)).id,
            message : 'Class created successfully'
        }
    }
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string) {
        return this.classesService.delete(id);
    }
}
