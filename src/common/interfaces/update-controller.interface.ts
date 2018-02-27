import { DataResponse } from '../wrappers';
import { GenericData } from './generic-data.interface';

export interface UpdateController<T extends GenericData> {
  updateOne(id: number | string, updatePayload: T): Promise<DataResponse<T>>;
  updateMany(ids: (number | string)[], updatePayloads: T[]): Promise<DataResponse<T[]>>;
}