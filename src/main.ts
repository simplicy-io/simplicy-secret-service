import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { GLOBAL_API_PREFIX } from './constants/app-strings';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(GLOBAL_API_PREFIX);
  setupSwagger(app);

  const port = configService.get('PORT');
  await app.listen(port);
  console.log(`Listening on port ${port}`);
}
bootstrap();
