import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from 'compression';
import { APP_VERSION, HOST, PORT, debuglevel } from './constants';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: debuglevel
  });

  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, HOST, () => {
    Logger.debug(`Bartender-API-Server ${APP_VERSION} is running on http://${HOST}:${PORT}`, 'Bartender-API');
  });
}
bootstrap();
