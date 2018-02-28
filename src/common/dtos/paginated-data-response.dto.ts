import { PaginatedData } from '../wrappers';
import { DataResponseDto } from './data-response.dto';
import { GenericDto } from './generic.dto';

export class PaginatedDateResponseDto<T extends GenericDto> extends DataResponseDto<T[]> implements PaginatedData<T> {

  offset: number;
  limit: number;
  total: number;

}