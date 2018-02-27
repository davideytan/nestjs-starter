import { DataResponse, PaginatedDataResponse } from '../wrappers';
import { GenericData } from './generic-data.interface';
import { PaginationOptions } from './pagination-options.interface';

export interface ReadController<T extends GenericData> {
  getOne(id: number | string): Promise<DataResponse<T>>;
  getMany(pagination?: PaginationOptions): Promise<PaginatedDataResponse<T>>;
}