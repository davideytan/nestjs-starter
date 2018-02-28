import { GenericDto } from './generic.dto';
import { ResponseDto } from './response.dto';

export class DataResponseDto<T extends GenericDto> extends ResponseDto {

  data: T;

}