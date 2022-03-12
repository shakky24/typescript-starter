import { Injectable } from '@nestjs/common';
import { APP_VERSION, BARTENDER_APP } from './constants';

@Injectable()
export class AppService {
  getHello() {
    return {
      server: 'Bartender-API',
      version: APP_VERSION,
      app: 'BARTENDER_APP',
    }
  }
}
