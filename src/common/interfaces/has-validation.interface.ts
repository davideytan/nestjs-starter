import { ValidationError } from '../errors';

export interface HasValidation {
  validate(): Promise<ValidationError[]>;
}