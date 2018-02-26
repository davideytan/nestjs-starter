import {constants as c} from '../../constants';

export class Configuration {

  constructor(
    readonly constants: any = c
  ) {}

  /**
   * This function returns the string value of the environment variable matching the given name.
   * Its return value is undefined if no match is found.
   * @param {string} eName The environment variable name.
   * @returns {string | undefined}
   */
  getEnv(eName: string): string|undefined {
    return process.env.hasOwnProperty(eName) ? process.env[eName]
      : undefined;
  }

  /**
   * This function returns the value of the constant matching the given name.
   * Its return value is undefined if no match is found.
   * @param {string} cName
   * @returns {any}
   */
  getConstant(cName: string): any {
    return this.constants.hasOwnProperty(cName) ? this.constants[cName]
      : undefined;
  }

}
