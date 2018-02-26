import { expect } from 'chai';
import { GenericResponse } from "./generic-response";

describe('DataResponse', () => {

  it('should have a \'message\' string attribute', () => {
    const d = new GenericResponse('Unit test');
    expect(d).to.have.property('message');
    expect(d.message).to.be.a('string');
  })

});