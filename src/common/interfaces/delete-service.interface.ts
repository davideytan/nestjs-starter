import { GenericDto } from '../dtos';

export interface DeleteService<T extends GenericDto> {
  deleteOne(id: number | string): Promise<void>;
  deleteMany(ids: (number | string)[]): Promise<void>;
}