import { AppContext } from '../../src/shared/application-context';
import { expect } from 'chai';
import { EventData } from '../data/event-data';
import { SpreadsheetMock } from '../mocks/google-spreadsheet-mock';
import { CalendarAppMock } from '../mocks/google-calendar-app-mock';

describe('AppContext', () => {
  var spreadsheetAppMock: SpreadsheetMock;
  var calendarAppMock: CalendarAppMock;

  describe('on construction', () => {
    before(() => {
      spreadsheetAppMock = new SpreadsheetMock();
      calendarAppMock = new CalendarAppMock(EventData.DataSet1);
    });

    it('should throw error on null spreadsheetApp parameter', () => {
      expect(() => new AppContext(null, calendarAppMock)).to.throw(Error);
    });

    it('should throw error on null calendarApp parameter', () => {
      expect(() => new AppContext(spreadsheetAppMock, null)).to.throw(Error);
    });

    it('should populate settings property', () => {
      var appContext = new AppContext(spreadsheetAppMock, calendarAppMock);
      expect(appContext.settings).to.not.be.null;
    });

    it('should populate config property', () => {
      var appContext = new AppContext(spreadsheetAppMock, calendarAppMock);
      expect(appContext.config).to.not.be.null;
    });

    it('should populate sheetsProxy property', () => {
      var appContext = new AppContext(spreadsheetAppMock, calendarAppMock);
      expect(appContext.sheetsProxy).to.not.be.null;
    });
  });
});
