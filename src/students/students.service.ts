import { Injectable } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { Student } from "./students.type";


@Injectable() 
export class StudentsService {

    private students: Student[] = [];
    private idCounter = 1;

    findAll() {
        return this.students;
    }
    
    findById(id: number) {
        return this.students.find((std)=> std.id === id);
    }

    update(id: number, updateStudentDto: UpdateStudentDto) {
        const studentIndex = this.students.findIndex((std) => std.id === id);
        if (studentIndex === -1) {
            return null;
        }
        this.students[studentIndex] = {
            ...this.students[studentIndex],
            ...updateStudentDto,
        };
        return this.students[studentIndex];
    }

    create(createStudentDto: CreateStudentDto) {
        const student = {
            id: this.idCounter++,
            ...createStudentDto,
        };
        this.students.push(student);
        return student;
    }

    delete(id: number): void {
        this.students = this.students.filter((std)=> std.id !== id);
    }
}
