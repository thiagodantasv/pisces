import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port: number = 1000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`The app is listening in port: ${port}`);
}
bootstrap();
