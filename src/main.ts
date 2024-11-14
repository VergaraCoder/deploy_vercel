import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SeederRole } from './common/seeders/roleSeeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const dataSource=app.get(DataSource);

  const dataSeeder=new SeederRole();
  
  await dataSeeder.run(dataSource);
  await app.listen(3000);
}
bootstrap();
