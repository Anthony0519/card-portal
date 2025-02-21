import { createLogger, transports, format } from 'winston';
import jsonStringify from 'safe-json-stringify';
import { settings } from '../config/application';

const timestampDefinition = { format: 'YYYY-MM-DDTHH:mm:ss.SSS Z' };

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(timestampDefinition), format.json()),
  transports: [
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
      silent: process.env.NODE_ENV === 'test'
    }),
    new transports.File({
      filename: 'logs/combined.log',
      silent: process.env.NODE_ENV === 'test'
    })
  ]
});

if (settings.application_logs === 'true') {
  const customFormat = format.printf(({ level, message, timestamp, ...rest }) => {
    const stringifiedRest = jsonStringify(rest);

    return `${timestamp} ${level}: ${message} ${stringifiedRest === '{}' ? '' : stringifiedRest}`;
  });

  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.timestamp(timestampDefinition), customFormat)
    })
  );
}

export { logger };
