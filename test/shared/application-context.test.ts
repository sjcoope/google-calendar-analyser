import { AppContext } from '../../src/shared/application-context';
import { expect } from 'chai';
import { mock, instance, when, anyString } from 'ts-mockito';
describe('AppContext', () => {
  describe('on construction', () => {
    var spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;
    var calendarApp: GoogleAppsScript.Calendar.CalendarApp;

    before(() => {
      let spreadsheetAppMock: GoogleAppsScript.Spreadsheet.SpreadsheetApp = mock<GoogleAppsScript.Spreadsheet.SpreadsheetApp>();
      spreadsheetApp = instance(spreadsheetAppMock);

      let calendarAppMock: GoogleAppsScript.Calendar.CalendarApp = mock<GoogleAppsScript.Calendar.CalendarApp>();
      let calendarMock: GoogleAppsScript.Calendar.Calendar = mock<GoogleAppsScript.Calendar.Calendar>();
      when(calendarAppMock.getCalendarById(anyString())).thenReturn(instance(calendarMock));
      calendarApp = instance(calendarAppMock);
    });

    it('should throw error on null spreadsheetApp parameter', () => {
      expect(() => new AppContext(null, calendarApp)).to.throw(Error);
    });

    it('should throw error on null calendarApp parameter', () => {
      expect(() => new AppContext(spreadsheetApp, null)).to.throw(Error);
    });

    it('should populate settings property', () => {
      var appContext = new AppContext(spreadsheetApp, calendarApp);
      expect(appContext.settings).to.not.be.null;
    });

    it('should populate config property', () => {
      var appContext = new AppContext(spreadsheetApp, calendarApp);
      expect(appContext.config).to.not.be.null;
    });

    it('should populate sheetsProxy property', () => {
      var appContext = new AppContext(spreadsheetApp, calendarApp);
      expect(appContext.sheetsProxy).to.not.be.null;
    });
  });
});
