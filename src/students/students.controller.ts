import { Controller ,Param, Get, HttpCode,HttpStatus, Post, Req, Delete,Put, Body } from "@nestjs/common";
import type { Request } from "express";
import { CreateStudentDto } from "./dto/create-student.dto";
import { StudentsService } from "./students.service";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { Student } from "./students.type";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";


@ApiTags('students')
@Controller('students')
export class StudentController {
    constructor(private readonly studentsService: StudentsService) {}
    
    @Get(':id')
    @ApiOperation({ summary: 'Get a student by ID' })
    @ApiParam({ name: 'id', description: 'Student ID' })
    @ApiResponse({ status: 200, description: 'Student found' })
    @ApiResponse({ status: 404, description: 'Student not found' })
    async findById(@Param('id') id: number) {
        return this.studentsService.findById(id);
    }   

    @Put(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Update a student' })
    @ApiParam({ name: 'id', description: 'Student ID' })
    @ApiResponse({ status: 200, description: 'Student updated successfully' })
    @ApiResponse({ status: 404, description: 'Student not found' })
    async update(@Param('id') id: number, @Body() body: UpdateStudentDto) {
        return this.studentsService.update(id, body);
    } 

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @HttpCode(204)
    @ApiOperation({ summary: 'Delete a student' })
    @ApiParam({ name: 'id', description: 'Student ID' })
    @ApiResponse({ status: 204, description: 'Student deleted successfully' })
    async delete(@Param('id') id: number) {
        await this.studentsService.delete(id);
        return {
            message: 'Student deleted successfully',
            id,
        }
    }  

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Create a new student' })
    @ApiResponse({ status: 200, description: 'Student created successfully' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    async create(@Body() body: CreateStudentDto) {
        return this.studentsService.create(body);
    }

    @Get()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get all students' })
    @ApiResponse({ status: 200, description: 'List of all students' })
    async getAllStudents(@Req() req: Request) {
        return this.studentsService.findAll();
    }
    
    
}
