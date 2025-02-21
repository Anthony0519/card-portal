import app from './app';
import { settings } from './core/config/application';
import dbConnection from './core/database/init';
import { logger } from './core/utilities/logger';

const startServer = async (): Promise<void> => {
  await dbConnection();
  app.listen(settings.app_port, () => {
    logger.info(`App listening on ${settings.app_port}`);
  });
};

startServer();
