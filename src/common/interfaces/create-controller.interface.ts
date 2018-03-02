import { GenericDto } from '../dtos';
import { DataResponse, PaginatedData } from '../wrappers';

export interface CreateController<T extends GenericDto> {
  createOne(createPayload: T): Promise<DataResponse<T>>;
  createMany(createPayloads: T[]): Promise<PaginatedData<T[]>>;
}