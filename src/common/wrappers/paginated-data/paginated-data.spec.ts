import { expect } from 'chai';
import { PaginatedData } from "./paginated-data";

describe('PaginatedData', () => {

  describe('constructor', () => {

    context('when no pagination args are given', () => {

      it('should have a total value equal to data length when no pagination args are given', () => {
        const p = new PaginatedData(['data01', 'data02']);
        expect(p.total).to.equal(2);
      });

    });

  });

});