import {IBank} from '../interfaces/bank';
import {ErrorException} from '../interfaces/error';
import serviceApi from './api';

export const bankService = {
  async retrieve() {
    try {
      const response = await serviceApi.get('/challenge/banks');
      return response.data as IBank[];
    } catch (error: any) {
      return new ErrorException(
        error.code,
        'Banks retrieve service error',
        error.message,
      );
    }
  },
};
