import { Errors } from '../constant/errors';
import DomainError from './DomainError';

export default class ForbiddenError extends DomainError {
  protected error_name = 'not_authorized';

  protected httpCode = 403;

  public constructor(
    props: { message: string; reason?: string; data?: any } = {
      message: Errors.FORBIDDEN
    }
  ) {
    const { message, reason = '', data = null } = props;
    super({ message, reason, data, status: false });
  }
}
