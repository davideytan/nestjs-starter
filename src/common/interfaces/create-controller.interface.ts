import { DataResponse, PaginatedData } from '../wrappers';
import { GenericData } from './generic-data.interface';

export interface CreateController<T extends GenericData> {
  createOne(createPayload: T): Promise<DataResponse<T>>;
  createMany(createPayloads: T[]): Promise<PaginatedData<T[]>>;
}