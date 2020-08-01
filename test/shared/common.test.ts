import { Convertor, KeyValuePair, DateHelper } from '../../src/shared/common';
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

  describe('DateHelper', () => {
    describe('formatDate', () => {
      it('throws an error if no date parameter specified', () => {
        expect(DateHelper.formatDate.bind(null)).to.throw('formatDate - date parameter is invalid');
      });

      it('handles date with single digit day', () => {
        var input = new Date(2019, 11, 1, 10, 15, 15);
        var result = DateHelper.formatDate(input);

        expect(result).to.equal('01/12/2019 10:15');
      });

      it('handles date with single digit month', () => {
        var input = new Date(2019, 1, 12, 10, 15, 15);
        var result = DateHelper.formatDate(input);

        expect(result).to.equal('12/02/2019 10:15');
      });

      it('handles date with single digit hour', () => {
        var input = new Date(2019, 1, 12, 1, 15, 15);
        var result = DateHelper.formatDate(input);

        expect(result).to.equal('12/02/2019 01:15');
      });

      it('handles date with single digit minute', () => {
        var input = new Date(2019, 1, 12, 11, 2, 15);
        var result = DateHelper.formatDate(input);

        expect(result).to.equal('12/02/2019 11:02');
      });

      it('handles midnight', () => {
        var input = new Date(2019, 1, 12);
        var result = DateHelper.formatDate(input);

        expect(result).to.equal('12/02/2019 00:00');
      });
    });

    describe('getDateRanges', () => {
      it('throws an error if week number is null', () => {
        expect(DateHelper.getDateRanges.bind(null)).to.throw(
          'getDateRanges - weekNumber parameter is invalid'
        );
      });

      it('throws an error if week number is not a number', () => {
        expect(DateHelper.getDateRanges.bind('test')).to.throw(
          'getDateRanges - weekNumber parameter is invalid'
        );
      });

      it('throws an error if week number is negative', () => {
        expect(DateHelper.getDateRanges.bind(-1)).to.throw(
          'getDateRanges - weekNumber parameter is invalid'
        );
      });

      it('returns current week range when weekNumber is 0', () => {
        var input = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getDateRanges(0, input);
        var expectedStartDate = new Date(2020, 3, 27, 0, 0, 0);
        var expectedEndDate = new Date(2020, 4, 1, 23, 59, 59);

        expect(result.startDate.getTime()).to.equal(expectedStartDate.getTime());
        expect(result.endDate.getTime()).to.equal(expectedEndDate.getTime());
      });

      it('returns 3 week span range when weekNumber is 1', () => {
        var input = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getDateRanges(1, input);
        var expectedStartDate = new Date(2020, 3, 20, 0, 0, 0);
        var expectedEndDate = new Date(2020, 4, 8, 23, 59, 59);

        expect(result.startDate.getTime()).to.equal(expectedStartDate.getTime());
        expect(result.endDate.getTime()).to.equal(expectedEndDate.getTime());
      });

      it('returns 5 week span range when weekNumber is 2', () => {
        var input = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getDateRanges(2, input);
        var expectedStartDate = new Date(2020, 3, 13, 0, 0, 0);
        var expectedEndDate = new Date(2020, 4, 15, 23, 59, 59);

        expect(result.startDate.getTime()).to.equal(expectedStartDate.getTime());
        expect(result.endDate.getTime()).to.equal(expectedEndDate.getTime());
      });

      it('returns 7 week span range when weekNumber is 3', () => {
        var input = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getDateRanges(3, input);
        var expectedStartDate = new Date(2020, 3, 6, 0, 0, 0);
        var expectedEndDate = new Date(2020, 4, 22, 23, 59, 59);

        expect(result.startDate.getTime()).to.equal(expectedStartDate.getTime());
        expect(result.endDate.getTime()).to.equal(expectedEndDate.getTime());
      });
    });

    describe('getLastMonday', () => {
      it('returns monday when date is a monday', () => {
        var input = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getLastMonday(input);

        expect(result.getDay()).to.equal(1);
      });

      it('returns same date when date is a monday', () => {
        var input = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getLastMonday(input);

        expect(result.getTime()).to.equal(input.getTime());
      });

      it('returns last monday when date is a tuesday', () => {
        var input = new Date(2020, 3, 28, 0, 0, 0);
        var expected = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getLastMonday(input);

        expect(result.getTime()).to.equal(expected.getTime());
      });

      it('returns last monday when date is a wednesday', () => {
        var input = new Date(2020, 3, 29, 0, 0, 0);
        var expected = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getLastMonday(input);

        expect(result.getTime()).to.equal(expected.getTime());
      });

      it('returns last monday when date is a thursday', () => {
        var input = new Date(2020, 3, 30, 0, 0, 0);
        var expected = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getLastMonday(input);

        expect(result.getTime()).to.equal(expected.getTime());
      });

      it('returns last monday when date is a friday', () => {
        var input = new Date(2020, 4, 1, 0, 0, 0);
        var expected = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getLastMonday(input);

        expect(result.getTime()).to.equal(expected.getTime());
      });

      it('returns last monday when date is a saturday', () => {
        var input = new Date(2020, 4, 2, 0, 0, 0);
        var expected = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getLastMonday(input);
        expect(result.getTime()).to.equal(expected.getTime());
      });

      it('returns last monday when date is a sunday', () => {
        var input = new Date(2020, 4, 3, 0, 0, 0);
        var expected = new Date(2020, 3, 27, 0, 0, 0);
        var result = DateHelper.getLastMonday(input);

        expect(result.getTime()).to.equal(expected.getTime());
      });
    });
  });
});
