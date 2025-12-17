import { Controller, HttpCode, Post, Body, HttpStatus, Get, Req, Delete, Param } from "@nestjs/common";
import { GradesService } from "./grades.service";
import { GradesDto } from "./dto/grades.dto";
import type { Request } from "express";

@Controller('grades')
export class GradesController {
    constructor(private GradesService: GradesService) { }
    
    @HttpCode(HttpStatus.OK)
    @Post()
    async create(@Body() dto: GradesDto) {
        return this.GradesService.create(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    async findAll(@Req() req: Request) {
        return this.GradesService.findAll({
            where:{
                name: {
                    contains:req.query.name as string,
                    mode: 'insensitive'
                }
            },
            include: {
                classes: {
                    include:{
                        students: true
                    }
                },
                courses: true
            }
        })
    }

     @HttpCode(HttpStatus.OK)
     @Delete(':id')
     async delete(@Param('id') id: string) {
        return  {
            id : (await this.GradesService.delete(id)).id,
            message : 'Grade deleted successfully'
        }
     }
}