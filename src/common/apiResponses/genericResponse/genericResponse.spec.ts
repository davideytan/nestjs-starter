import { expect } from 'chai';
import { GenericResponse } from "./genericResponse";

describe('DataResponse', () => {

  it('should have a \'message\' string attribute', () => {
    const d = new GenericResponse('Unit test');
    expect(d).to.have.property('message');
    expect(d.message).to.be.a('string');
  })

});