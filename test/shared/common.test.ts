import { Convertor, KeyValuePair } from '../../src/shared/common';
import { expect } from 'chai';

describe('Common', () => {
  describe('Convertor', () => {
    describe('toMultiDimensionalArray', () => {
      it('should throw error if input is invalid', () => {
        expect(Convertor.toMultiDimensionalArray.bind(null)).to.throw(Error);
      });

      it('should return array with length 1 when presented with array length 1', () => {
        var input = new Array<KeyValuePair>(new KeyValuePair('1', 'One'));
        var result = Convertor.toMultiDimensionalArray(input);
        expect(result.length).to.equal(1);
      });

      it('should return array with item that has matching key', () => {
        var input = new Array<KeyValuePair>(new KeyValuePair('1', 'One'));
        var result = Convertor.toMultiDimensionalArray(input);
        expect(result[0][0]).to.equal(input[0].key);
      });

      it('should return array with item that has matching value', () => {
        var input = new Array<KeyValuePair>(new KeyValuePair('1', 'One'));
        var result = Convertor.toMultiDimensionalArray(input);
        expect(result[0][1]).to.equal(input[0].value);
      });
    });
  });
});
