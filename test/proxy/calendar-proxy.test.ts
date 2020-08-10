// import { CalendarProxy } from '../../src/proxy/calendar-proxy';
// import { expect } from 'chai';
// import { EventData } from '../data/event-data';
// import { CalendarMock } from '../mocks/google-calendar-mock';
// import { CalendarEvent } from '../../src/proxy/calendar-event';

// describe('CalendarProxy', () => {
//   var calendarMock: CalendarMock;
//   var calendarProxy: CalendarProxy;
//   var startDate: Date;
//   var endDate: Date;
//   var results: CalendarEvent[];

//   describe('on construction', () => {
//     before(() => {
//       calendarMock = new CalendarMock(EventData.DataSet1);
//     });

//     it('should throw an error on invalid calendar parameter', () => {
//       expect(() => new CalendarProxy(null)).to.throw(Error);
//     });

//     it('should not throw an error on valid calenar parameter', () => {
//       var result = new CalendarProxy(calendarMock);
//       expect(result).to.not.be.null;
//     });
//   });

//   describe('getEvents', () => {
//     before(() => {
//       calendarMock = new CalendarMock(EventData.DataSet1);
//       calendarProxy = new CalendarProxy(calendarMock);

//       startDate = new Date(2020, 4, 11, 0, 0, 0);
//       endDate = new Date(2020, 4, 15, 23, 59, 59);
//       results = calendarProxy.getEvents(startDate, endDate);
//     });

//     it('should get 17 events for 11/05 to 15/05', () => {
//       expect(results.length).to.equal(17);
//     });

//     it('should get results in order of date', () => {
//       // TODO
//     })
//   });
// });
