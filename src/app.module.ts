import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './students/students.controller';
import { StudentsService } from './students/students.service';

@Module({
  imports: [],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentsService],
})
export class AppModule {}
