import { GenericData } from './generic-data.interface';

export interface CreateService<T extends GenericData> {
  createOne(createPayload: T): Promise<T>;
  createMany(createPayloads: T[]): Promise<T[]>;
  saveOne(entity: T): Promise<T>;
  saveMany(entities: T[]): Promise<T[]>;
}