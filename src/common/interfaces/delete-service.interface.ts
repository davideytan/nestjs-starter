import { GenericData } from './generic-data.interface';

export interface DeleteService<T extends GenericData> {
  deleteOne(id: number | string): Promise<void>;
  deleteMany(ids: (number | string)[]): Promise<void>;
}