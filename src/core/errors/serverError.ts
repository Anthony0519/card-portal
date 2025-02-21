import { Errors } from '../constant/errors';
import DomainError from './DomainError';

export default class InternalServerError extends DomainError {
  protected error_name = 'server_error';

  protected httpCode = 500;

  public constructor(
    props: { message: string; reason?: string; data?: any } = {
      message: Errors.INTERNAL_SERVER
    }
  ) {
    const { message, reason = '', data = null } = props;
    super({ message, reason, data, status: false });
  }
}
