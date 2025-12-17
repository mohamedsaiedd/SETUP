import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ClassesDto } from "./dto/classes.dto";

@Injectable()
export class ClassesService{
    constructor(private prisma: PrismaService){}

    findAll(){
        return this.prisma.class.findMany();
    }

    findById(id: string){
        return this.prisma.class.findUnique({where: {id}});
    }

    async delete(id: string){
        return this.prisma.class.delete({where: {id}});
    }

    async create(dto: ClassesDto){
        return await this.prisma.class.create({data: {
           name : dto.name,
           grade : {
            connect : { id : dto.gradeId }
           },
           students : {
            connect : dto.students?.map((id) => ({id}))
           },
        }});
    }
}