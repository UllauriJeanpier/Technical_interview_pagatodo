export interface IError {
  code: number | string | null;
  title: string;
  message: string;
}

export class ErrorException {
  error: IError;
  constructor(code: string, title: string, message: string) {
    this.error = {
      code,
      title,
      message,
    };
  }
}
