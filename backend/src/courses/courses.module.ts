import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ZoomModule } from 'src/zoom/zoom.module';

@Module({
  imports: [PrismaModule, ZoomModule],
  controllers: [CoursesController],
  providers: [CoursesService],
})

export class CoursesModule {}
