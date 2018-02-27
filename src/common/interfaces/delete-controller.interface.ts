import { GenericResponse } from '../wrappers';
import { GenericData } from './generic-data.interface';

export interface DeleteController<T extends GenericData> {
  deleteOne(id: number | string): Promise<GenericResponse>;
  deleteMany(ids: (number | string)[]): Promise<GenericResponse>;
}