import { GenericDto } from '../dtos';
import { GenericResponse } from '../wrappers';

export interface DeleteController<T extends GenericDto> {
  deleteOne(id: number | string): Promise<GenericResponse>;
  deleteMany(ids: (number | string)[]): Promise<GenericResponse>;
}