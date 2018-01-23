import { expect } from 'chai';
import { PaginatedDataResponse } from "./paginatedDataResponse";
import { PaginatedData } from "../../dataWrappers";
import { DataResponse } from "../";

describe('PaginatedDataResponse', () => {

  it('should be an instance of DataResponse', () => {
    const d = new PaginatedDataResponse('Unit test', new PaginatedData(['data']));
    expect(d).to.be.instanceOf(DataResponse);
  });

  it('should have an \'offset\' number attribute', () => {
    const d = new PaginatedDataResponse('Unit test', new PaginatedData(['data']));
    expect(d).to.have.property('offset');
    expect(d.offset).to.be.a('number');
  });

  it('should have a \'limit\' number attribute', () => {
    const d = new PaginatedDataResponse('Unit test', new PaginatedData(['data']));
    expect(d).to.have.property('limit');
    expect(d.limit).to.be.a('number');
  });

  it('should have a \'total\' number attribute', () => {
    const d = new PaginatedDataResponse('Unit test', new PaginatedData(['data']));
    expect(d).to.have.property('total');
    expect(d.total).to.be.a('number');
  });

});