import { executionAsyncResource } from 'async_hooks';
import { expect } from 'chai';
import { CalendarEvent } from '../../src/calendar/calendar-event';
import { ActualTimeCalendarEventDecorator } from '../../src/calendar/calendar-event-decorator';
import { EventData } from '../data/event-data';

var decorator = new ActualTimeCalendarEventDecorator();
describe('CalendarEventDecorator', () => {
  describe('ActualTimeCalendarEventDecorator', () => {
    describe('when events parameter is invalid', () => {
      it('should throw error when events is undefined', () => {
        expect(() => decorator.decorate(undefined)).to.throw(Error);
      });

      it('should throw error when events is null', () => {
        expect(() => decorator.decorate(null)).to.throw(Error);
      });
    });

    describe('with multiple events in sequence', () => {
      // Note: Can't test for Clash Start and Ends After as sorting makes this an impossible case
      var calendarEvents = Array<CalendarEvent>(
        EventData.initialiseCalendarEvent(new Date('2020-05-11T08:00'), new Date('2020-05-11T08:30'), 30, false, '1-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T09:00'), new Date('2020-05-11T10:00'), 60, false, '2-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T10:00'), new Date('2020-05-11T11:00'), 60, false, '3-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T10:30'), new Date('2020-05-11T11:00'), 30, false, '4-Clash Midway Ends Same'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T11:30'), new Date('2020-05-11T12:30'), 60, false, '5-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T11:45'), new Date('2020-05-11T12:15'), 30, false, '6-Clash Midway Ends Before'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T13:00'), new Date('2020-05-11T14:00'), 60, false, '7-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T13:30'), new Date('2020-05-11T14:15'), 45, false, '8-Clash Midway Ends After'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T14:30'), new Date('2020-05-11T15:00'), 30, false, '9-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T14:30'), new Date('2020-05-11T15:00'), 30, false, '10-Clash Start and End'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T15:30'), new Date('2020-05-11T16:30'), 60, false, '11-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T15:30'), new Date('2020-05-11T16:00'), 30, false, '12-Clash Start Ends Before'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T17:00'), new Date('2020-05-11T17:30'), 30, false, '13-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T17:00'), new Date('2020-05-11T17:15'), 15, false, '14-Clash Start Ends Before'),
        EventData.initialiseCalendarEvent(new Date('2020-05-12T08:00'), new Date('2020-05-12T08:30'), 30, false, '15-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-12T08:30'), new Date('2020-05-12T09:00'), 30, false, '16-Clash End Ends After'),
        EventData.initialiseCalendarEvent(new Date('2020-05-12T09:00'), new Date('2020-05-12T11:30'), 150, false, '17-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-12T09:30'), new Date('2020-05-12T10:30'), 60, false, '18-Multi-Clash Midway Ends Before'),
        EventData.initialiseCalendarEvent(new Date('2020-05-12T10:00'), new Date('2020-05-12T11:30'), 90, false, '19-Multi-Clash Midway Ends Same'),
        EventData.initialiseCalendarEvent(new Date('2020-05-12T10:30'), new Date('2020-05-12T11:30'), 60, false, '20-Multi-Clash Midway Ends Same')
      );

      decorator.decorate(calendarEvents);

      var runs = [
        { id: 1, expectedActualTime: 30 },
        { id: 2, expectedActualTime: 60 },
        { id: 3, expectedActualTime: 60 },
        { id: 4, expectedActualTime: 0 },
        { id: 5, expectedActualTime: 60 },
        { id: 6, expectedActualTime: 0 },
        { id: 7, expectedActualTime: 60 },
        { id: 8, expectedActualTime: 15 },
        { id: 9, expectedActualTime: 30 },
        { id: 10, expectedActualTime: 0 },
        { id: 11, expectedActualTime: 60 },
        { id: 12, expectedActualTime: 0 },
        { id: 13, expectedActualTime: 30 },
        { id: 14, expectedActualTime: 0 },
        { id: 15, expectedActualTime: 30 },
        { id: 16, expectedActualTime: 30 },
        { id: 17, expectedActualTime: 150 },
        { id: 18, expectedActualTime: 0 },
        { id: 19, expectedActualTime: 0 },
        { id: 20, expectedActualTime: 0 },
      ];

      executeArrayOfTests(calendarEvents, runs);
    });

    describe('with multiple events out of sequence', () => {
      var calendarEvents = Array<CalendarEvent>(
        EventData.initialiseCalendarEvent(new Date('2020-05-11T08:00'), new Date('2020-05-11T08:30'), 30, false, '1-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T10:30'), new Date('2020-05-11T12:00'), 90, false, '2-Clash Start Ends After'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T09:30'), new Date('2020-05-11T10:00'), 30, false, '3-Clash Midway Ends Same'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T10:30'), new Date('2020-05-11T11:30'), 60, false, '4-Clash Midway Ends After'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T10:00'), new Date('2020-05-11T11:00'), 60, false, '5-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T09:00'), new Date('2020-05-11T10:00'), 60, false, '6-No Clash')
      );

      decorator.decorate(calendarEvents);

      // Runs will be sorted and not in order above.
      var runs = [
        { id: 1, expectedActualTime: 30 },
        { id: 2, expectedActualTime: 60 },
        { id: 3, expectedActualTime: 0 },
        { id: 4, expectedActualTime: 60 },
        { id: 5, expectedActualTime: 60 },
        { id: 6, expectedActualTime: 0 },
      ];

      executeArrayOfTests(calendarEvents, runs);
    });

    describe('with one long all day event', () => {
      var calendarEvents = Array<CalendarEvent>(
        EventData.initialiseCalendarEvent(new Date('2020-05-11T08:00'), new Date('2020-05-11T16:30'), 510, false, '1-No Clash'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T08:00'), new Date('2020-05-11T08:30'), 30, false, '2-Clash Start Ends Before'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T09:30'), new Date('2020-05-11T10:00'), 30, false, '3-Clash Midway Ends Before'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T10:30'), new Date('2020-05-11T11:30'), 60, false, '4-Clash Midway Ends Before'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T14:00'), new Date('2020-05-11T15:00'), 60, false, '5-Clash Midway Ends Before'),
        EventData.initialiseCalendarEvent(new Date('2020-05-11T16:00'), new Date('2020-05-11T17:00'), 60, false, '6-Clash Midway Ends After')
      );

      decorator.decorate(calendarEvents);

      // Runs will be sorted and not in order above.
      var runs = [
        { id: 1, expectedActualTime: 510 },
        { id: 2, expectedActualTime: 0 },
        { id: 3, expectedActualTime: 0 },
        { id: 4, expectedActualTime: 0 },
        { id: 5, expectedActualTime: 0 },
        { id: 6, expectedActualTime: 30 },
      ];

      executeArrayOfTests(calendarEvents, runs);
    });

    function executeArrayOfTests(calendarEvents: Array<CalendarEvent>, runs) {
      runs.forEach((run, index) => {
        describe('calendar event #' + (index + 1), () => {
          let event = calendarEvents[index];
          let actualTime = it('should return "actualTime" of ' + run.expectedActualTime + ' mins for event: ' + event.title, () => {
            expect(event.actualDurationInMins).equals(run.expectedActualTime);
          });
        });
      });
    }
  });

  describe('ClashTimeCalendarEventDecorator', () => {});
});
