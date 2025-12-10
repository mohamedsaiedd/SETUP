import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Students API')
    .setDescription('API for managing students and teachers')
    .setVersion('1.0')
    .addTag('students')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 5000);
  console.log(`🚀 Application is running on: http://localhost:${process.env.PORT ?? 5000}`);
  console.log(`📚 Swagger UI available at: http://localhost:${process.env.PORT ?? 5000}/api`);
}
bootstrap();
