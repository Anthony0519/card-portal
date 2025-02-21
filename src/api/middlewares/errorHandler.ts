import { Request, Response, NextFunction } from 'express';
import { ValidationError, ValidationErrorItem } from 'sequelize';
import DomainError from '../../core/errors/DomainError';
import { logger } from '../../core/utilities/logger';
import { Errors } from '../../core/constant/errors';

function handleErrors(err: Error, _req: Request, res: Response, _next: NextFunction): Response {
  if (err instanceof DomainError) {
    return res.status(err.getHttpCode()).send({
      status: err.getStatus(),
      error: err.getName(),
      message: err.message,
      reason: err.getReason(),
      data: err.getData ? err.getData() || {} : {}
    });
  }

  if (err instanceof ValidationError) {
    const errorData: any = {};
    const httpCode = 422;

    errorData.error = 'validation_error';
    errorData.message = 'the provided payload was not valid';

    const data: { [key: string]: any[] } = {};
    const error = err as ValidationError;

    error.errors.forEach((validationErrorItem: ValidationErrorItem) => {
      if (validationErrorItem.path !== null) {
        const itemErrors = data[validationErrorItem.path] || [];
        itemErrors.push(validationErrorItem.message);

        data[validationErrorItem.path] = itemErrors;
      } else {
      }
    });

    errorData.data = data;
    res.status(httpCode).send(errorData);
    logger.error('[Database Validation Error] => ', error);
  }

  logger.error('[Unhandled Error] => ', err);
  return res.status(500).send({
    status: false,
    error: 'server_error',
    message: Errors.INTERNAL_SERVER,
    data: {}
  });
}

export { handleErrors };
