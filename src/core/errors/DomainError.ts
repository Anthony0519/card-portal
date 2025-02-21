export default class DomainError extends Error {
    protected error_name = "domain_error";
    protected status: boolean;
    public reason?: string;
    protected httpCode = 500;
    public data: object;

    protected constructor(
        payload: { message: string; reason?: string; data: object; status: boolean } = {
            message: "An error occoured",
            reason: "unknown",
            data: {},
            status: false
        }
    ) {
        super(payload.message);
        this.reason = payload.reason;
        this.data = payload.data;
        this.status = payload.status;
        Error.captureStackTrace(this, this.constructor);
    }

    public getStatus(): boolean {
        return this.status
    }
    public getReason(): string | undefined {
        return this.reason
    }
    public getHttpCode(): number {
        return this.httpCode
    }
    public getData(): object {
        return this.data
    }
    public getName(): string {
        return this.error_name
    }
}