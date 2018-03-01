import { DataResponse } from '../data-response/data-response';
import { PaginatedData } from '../paginated-data/paginated-data';

export class PaginatedDataResponse<T = any> extends DataResponse<T[]> {

  readonly limit: number;
  readonly offset: number;
  readonly total: number;

  constructor(message: string, data: PaginatedData<T>) {
    super(message, data.data);
    this.limit = data.limit;
    this.offset = data.offset;
    this.total = data.total;
  }

}