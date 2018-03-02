import { GenericDto } from '../dtos';

export interface CreateService<T extends GenericDto> {
  createOne(createPayload: T): Promise<T>;
  createMany(createPayloads: T[]): Promise<T[]>;
  saveOne(entity: T): Promise<T>;
  saveMany(entities: T[]): Promise<T[]>;
}