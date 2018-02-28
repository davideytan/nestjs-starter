import { GenericData } from './generic-data.interface';

export interface UpdateService<T extends GenericData> {
  updateOne(id: number | string, updatePayload: Partial<T>): Promise<T>;
  updateMany(ids: (number | string)[], updatePayloads: Partial<T>[]): Promise<T[]>;
}