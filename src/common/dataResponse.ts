import { GenericResponse } from "./genericResponse";

export class DataResponse<T = any> extends GenericResponse{

  readonly data: T;

  constructor (message: string, data: T) {
    super(message);
    this.data = data;
  }

}