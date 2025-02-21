import { Errors } from '../constant/errors';
import DomainError from './DomainError';

export default class ConflictError extends DomainError {
  protected error_name = 'conflict';

  protected httpCode = 409;

  public constructor(
    props: { message: string; reason?: string; data?: any } = {
      message: Errors.CONFLICT
    }
  ) {
    const { message, reason = '', data = null } = props;
    super({ message, reason, data, status: false });
  }
}
