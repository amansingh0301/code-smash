import * as winston from 'winston';
import { transports } from 'winston'; 

export const logger: winston.Logger = winston.createLogger({
    transports: [
      new transports.Console({
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          winston.format.colorize(),
          winston.format.json() 
        )
      })
    ]
  });
  