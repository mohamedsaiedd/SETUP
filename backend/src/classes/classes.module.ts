import { PrismaModule } from "src/prisma/prisma.module";
import { ClassesController } from "./classes.controller";
import { ClassesService } from "./classes.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    controllers: [ClassesController],
    providers: [ClassesService],
})

export class ClassesModule {}