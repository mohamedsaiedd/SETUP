import { Controller ,Param, Get, HttpCode,HttpStatus, Post, Req, Delete,Put, Body } from "@nestjs/common";
import type { Request } from "express";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-users.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";


@ApiTags('Users')
@Controller('Users')
export class UserController {
    constructor(private readonly UsersService: UsersService) {}
    
    @Get(':id')
    @ApiOperation({ summary: 'Get a User by ID' })
    @ApiParam({ name: 'id', description: 'User ID' })
    @ApiResponse({ status: 200, description: 'User found' })
    @ApiResponse({ status: 404, description: 'User not found' })
    async findById(@Param('id') id: string) {
        return this.UsersService.findById(id);
    }   

    @Put(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Update a User' })
    @ApiParam({ name: 'id', description: 'User ID' })
    @ApiResponse({ status: 200, description: 'User updated successfully' })
    @ApiResponse({ status: 404, description: 'User not found' })
    async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.UsersService.update(id, body);
    } 

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @HttpCode(204)
    @ApiOperation({ summary: 'Delete a User' })
    @ApiParam({ name: 'id', description: 'User ID' })
    @ApiResponse({ status: 204, description: 'User deleted successfully' })
    async delete(@Param('id') id: string) {
        await this.UsersService.delete(id);
        return {
            message: 'User deleted successfully',
            id,
        }
    }  

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Create a new User' })
    @ApiResponse({ status: 200, description: 'User created successfully' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    async create(@Body() body: CreateUsersDto) {
        return this.UsersService.create(body);
    }

    @Get('teachers')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get all Teachers' })
    @ApiResponse({ status: 200, description: 'List of all Teachers' })
    async getTeachers() {
        return this.UsersService.findAll({
            where: { role: 'TEACHER' }
        });
    }

    @Get()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get all Users' })
    @ApiResponse({ status: 200, description: 'List of all Users' })
    async getAllUsers(@Req() req: Request) {
        return this.UsersService.findAll();
    }
    
    
}
