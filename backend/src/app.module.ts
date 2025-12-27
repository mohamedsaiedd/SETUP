import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ZoomModule } from './zoom/zoom.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, CoursesModule, ZoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
