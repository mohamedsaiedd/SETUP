import { Controller ,Param, Get, HttpCode,HttpStatus, Post, Req, Delete,Put, Body, ForbiddenException } from "@nestjs/common";
import type { Request } from "express";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-users.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "@prisma/client";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "src/auth/decorators/user.decorator";
import { log } from "console";


@ApiTags('Users')
@Controller('users')

@UseGuards(AuthGuard, RolesGuard)

export class UserController {
    constructor(private readonly UsersService: UsersService) {}
    
    @Get('teachers')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get all Teachers' })
    @ApiResponse({ status: 200, description: 'List of all Teachers' })
    async getTeachers() {
        return this.UsersService.findAll({
            where: { role: 'TEACHER' },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true
            }
        });
    }

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
    @Roles(Role.ADMIN, Role.SUPERVISOR)
    async update(
        @Param('id') id: string,
        @Body() body: UpdateUserDto,
        @GetUser('role') currentUserRole: Role
    ) {
        console.log(currentUserRole , 'current user role');
        
        if(currentUserRole !== Role.ADMIN && currentUserRole !== Role.SUPERVISOR){
            throw new ForbiddenException('You are not allowed to update this user');
        }
        if(currentUserRole == Role.SUPERVISOR){
            const targetUser = await this.UsersService.findById(id);

            //supervisor can't update admin or supervisor
            if(targetUser?.role == Role.ADMIN || targetUser?.role == Role.SUPERVISOR){
                throw new ForbiddenException('You are not allowed to update this user');
            }
            // supervisor can not promoting someone to admin or supervisor
            if(body.role == Role.ADMIN || body.role == Role.SUPERVISOR){
                throw new ForbiddenException('You are not allowed to update this user');
            }
        }
        return this.UsersService.update(id, body);
    } 

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @HttpCode(204)
    @ApiOperation({ summary: 'Delete a User' })
    @ApiParam({ name: 'id', description: 'User ID' })
    @ApiResponse({ status: 204, description: 'User deleted successfully' })
    @Roles(Role.ADMIN, Role.SUPERVISOR)
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
    @Roles(Role.ADMIN, Role.SUPERVISOR)
    async create(@Body() body: CreateUsersDto) {
        return this.UsersService.create(body);
    }


    @Get()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get all Users' })
    @ApiResponse({ status: 200, description: 'List of all Users' })
    async getAllUsers(@Req() req: Request) {
        return this.UsersService.findAll();
    }
    
    
}
