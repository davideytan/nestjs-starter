import { expect } from 'chai';
import { DataResponse } from "./dataResponse";
import { GenericResponse } from "../";

describe('DataResponse', () => {

  it('should be an instance of GenericResponse', () => {
    const d = new DataResponse('Unit test', 'I inherit GenericResponse');
    expect(d).to.be.instanceOf(GenericResponse);
  });

  it('should have a \'data\' attribute', () => {
    const d = new DataResponse('Unit test', 'some data');
    expect(d).to.have.property('data');
  })

});