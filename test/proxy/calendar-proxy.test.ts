import { CalendarProxy } from '../../src/proxy/calendar-proxy';
import { expect } from 'chai';
import { EventData } from '../data/event-data';
import { CalendarMock } from '../mocks/google-calendar-mock';

describe('CalendarProxy', () => {
  var calendarMock: CalendarMock;
  var calendarProxy: CalendarProxy;
  var startDate: Date;
  var endDate: Date;

  describe('on construction', () => {
    before(() => {
      calendarMock = new CalendarMock(EventData.DataSet1);
    });

    it('should throw an error on invalid calendar parameter', () => {
      expect(() => new CalendarProxy(null)).to.throw(Error);
    });

    it('should not throw an error on valid calenar parameter', () => {
      var result = new CalendarProxy(calendarMock);
      expect(result).to.not.be.null;
    });
  });

  describe('getEvents', () => {
    before(() => {
      calendarMock = new CalendarMock(EventData.DataSet1);
      calendarProxy = new CalendarProxy(calendarMock);
    });

    it('should get 17 events for 11/05 to 15/05', () => {
      startDate = new Date(2020, 4, 11, 0, 0, 0);
      endDate = new Date(2020, 4, 15, 23, 59, 59);
      var result = calendarProxy.getEvents(startDate, endDate);
      expect(result.length).to.equal(17);
    });
  });
});
