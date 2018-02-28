import { PaginatedData } from '../wrappers';
import { GenericData } from './generic-data.interface';
import { PaginationOptions } from './pagination-options.interface';

export interface ReadService<T extends GenericData> {
  getOne(id: number | string): Promise<T>;
  getMany(pagination?: PaginationOptions): Promise<PaginatedData<T>>;
}