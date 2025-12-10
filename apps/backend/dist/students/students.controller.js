"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const create_student_dto_1 = require("./dto/create-student.dto");
const students_service_1 = require("./students.service");
const update_student_dto_1 = require("./dto/update-student.dto");
const swagger_1 = require("@nestjs/swagger");
let StudentController = class StudentController {
    studentsService;
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    async findById(id) {
        return this.studentsService.findById(id);
    }
    async update(id, body) {
        return this.studentsService.update(id, body);
    }
    async delete(id) {
        await this.studentsService.delete(id);
        return {
            message: 'Student deleted successfully',
            id,
        };
    }
    async create(body) {
        return this.studentsService.create(body);
    }
    async getAllStudents(req) {
        return this.studentsService.findAll();
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a student by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Student ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Student found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Student not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Update a student' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Student ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Student updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Student not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a student' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Student ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Student deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new student' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Student created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Get all students' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all students' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getAllStudents", null);
exports.StudentController = StudentController = __decorate([
    (0, swagger_1.ApiTags)('students'),
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentController);
//# sourceMappingURL=students.controller.js.map