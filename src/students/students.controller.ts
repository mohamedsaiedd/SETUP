import { Controller ,Param, Get, HttpCode, Post, Req, Delete,Put, Body } from "@nestjs/common";
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
    async findById(@Param('id') id: number) :Promise<Student | undefined> {
        return this.studentsService.findById(id);
    }   

    @Put(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Update a student' })
    @ApiParam({ name: 'id', description: 'Student ID' })
    @ApiResponse({ status: 200, description: 'Student updated successfully' })
    @ApiResponse({ status: 404, description: 'Student not found' })
    async update(@Param('id') id: number, @Body() body: UpdateStudentDto) :Promise<Student | null> {
        return this.studentsService.update(id, body);
    } 

    @Delete(':id')
    @HttpCode(204)
    @ApiOperation({ summary: 'Delete a student' })
    @ApiParam({ name: 'id', description: 'Student ID' })
    @ApiResponse({ status: 204, description: 'Student deleted successfully' })
    async delete(@Param('id') id: number) :Promise<void> {
        return this.studentsService.delete(id);
    }  

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Create a new student' })
    @ApiResponse({ status: 200, description: 'Student created successfully' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    async create(@Body() body: CreateStudentDto) :Promise<Student> {
        return this.studentsService.create(body);
    }

    @Get()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get all students' })
    @ApiResponse({ status: 200, description: 'List of all students' })
    getAllStudents(@Req() req: Request) :Array<Student> {
        return this.studentsService.findAll();
    }
    
    
}
