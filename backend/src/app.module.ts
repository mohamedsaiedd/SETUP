import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
