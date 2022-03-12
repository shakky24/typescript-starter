import { Logger, LogLevel, ServiceUnavailableException } from '@nestjs/common';
import packageJson from 'package.json';

export const BARTENDER_APP = process.env.BARTENDER_APP || 'Bartender-API-Dev';
export const APP_VERSION = packageJson.version;
export const HOST = process.env.BARTENDER_API_HOST || '0.0.0.0';
export const PORT = process.env.BARTENDER_API_PORT || '3000';
export const DEBUG_LEVEL = process.env.BARTENDER_API_LOG_LEVEL || 'debug';


export const debuglevel = ((): LogLevel[] => {
    switch (DEBUG_LEVEL) {
        case 'debug':
            return ['debug', 'verbose'];
        case 'verbose':
            return ['verbose'];
        default:
            return ['error', 'warn', 'log'];
    }
})();