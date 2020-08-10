import { CalendarProxy } from '../../src/proxy/calendar-proxy';
import { expect } from 'chai';
import { EventData } from '../data/event-data';
import { CalendarEvent } from '../../src/proxy/calendar-event';
import { mock, instance, anything, when } from 'ts-mockito';
import { CalendarEventMockFactory } from '../helper/calendar-event-mock-factory';

describe('CalendarProxy', () => {
  var calendar: GoogleAppsScript.Calendar.Calendar;
  var calendarProxy: CalendarProxy;
  var actual: CalendarEvent[];

  describe('on construction', () => {
    before(() => {
      var calendarMock: GoogleAppsScript.Calendar.Calendar = mock<GoogleAppsScript.Calendar.Calendar>();
      calendar = instance(calendarMock);
    });

    it('should throw an error on invalid calendar parameter', () => {
      expect(() => new CalendarProxy(null)).to.throw(Error);
    });

    it('should not throw an error on valid calenar parameter', () => {
      var result = new CalendarProxy(calendar);
      expect(result).to.not.be.null;
    });
  });

  describe('getEvents', () => {
    describe('when events do not exist', () => {
      before(() => {
        // Arrange
        var calendarMock: GoogleAppsScript.Calendar.Calendar = mock<GoogleAppsScript.Calendar.Calendar>();
        var result = new Array<GoogleAppsScript.Calendar.CalendarEvent>();
        when(calendarMock.getEvents(anything(), anything())).thenReturn(result);
        calendar = instance(calendarMock);

        // Act
        calendarProxy = new CalendarProxy(calendar);
        actual = calendarProxy.getEvents(anything(), anything());
      });

      it('should return an empty array of events', () => {
        expect(actual).to.be.empty;
      });
    });

    describe('when events exist', () => {
      before(() => {
        // Arrange - create mocks and load event data
        var calendarMock: GoogleAppsScript.Calendar.Calendar = mock<GoogleAppsScript.Calendar.Calendar>();

        var results = new Array<GoogleAppsScript.Calendar.CalendarEvent>();
        for (var item of EventData.DataSet1) {
          results.push(CalendarEventMockFactory.FromEventData(item));
        }

        when(calendarMock.getEvents(anything(), anything())).thenReturn(results);
        calendar = instance(calendarMock);

        // Act
        calendarProxy = new CalendarProxy(calendar);
        actual = calendarProxy.getEvents(anything(), anything());
      });

      it('should get 17 events', () => {
        expect(actual.length).to.equal(17);
      });

      it('should get results in order of date', () => {
        // TODO
      });
    });
  });
});
