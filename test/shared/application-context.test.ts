import { AppContext } from '../../src/shared/application-context';
import { expect } from 'chai';
import { mock, instance, when, anyString } from 'ts-mockito';
import { SheetsProxy } from '../../src/proxy/sheets-proxy';
import { CalendarProxy } from '../../src/proxy/calendar-proxy';
import { CalendarEventFormatter } from '../../src/proxy/calendar-event-formatter';
import { Settings } from '../../src/shared/settings/settings';
import { Config } from '../../src/shared/config';
describe('AppContext', () => {
  describe('on construction', () => {
    var sheetsProxy: SheetsProxy;
    var calendarProxy: CalendarProxy;
    var settings: Settings;
    var config: Config;

    before(() => {
      let spreadsheetProxyMock: SheetsProxy = mock<SheetsProxy>();
      sheetsProxy = instance(spreadsheetProxyMock);

      let calendarProxyMock: CalendarProxy = mock<CalendarProxy>();
      calendarProxy = instance(calendarProxyMock);

      let settingsMock: Settings = mock<Settings>();
      settings = instance(settingsMock);

      let configMock: Config = mock<Config>();
      config = instance(configMock);
    });

    it('should throw error on null sheetsProxy parameter', () => {
      expect(() => new AppContext(null, calendarProxy, settings, config)).to.throw(Error);
    });

    it('should throw error on null calendarProxy parameter', () => {
      expect(() => new AppContext(sheetsProxy, null, settings, config)).to.throw(Error);
    });

    it('should throw error on null settings parameter', () => {
      expect(() => new AppContext(sheetsProxy, calendarProxy, null, config)).to.throw(Error);
    });

    it('should throw error on null config parameter', () => {
      expect(() => new AppContext(sheetsProxy, calendarProxy, settings, null)).to.throw(Error);
    });

    it('should populate settings property', () => {
      var appContext = new AppContext(sheetsProxy, calendarProxy, settings, config);
      expect(appContext.settings).to.not.be.null;
    });

    it('should populate config property', () => {
      var appContext = new AppContext(sheetsProxy, calendarProxy, settings, config);
      expect(appContext.config).to.not.be.null;
    });

    it('should populate sheetsProxy property', () => {
      var appContext = new AppContext(sheetsProxy, calendarProxy, settings, config);
      expect(appContext.sheetsProxy).to.not.be.null;
    });

    it('should populate calendarProxy property', () => {
      var appContext = new AppContext(sheetsProxy, calendarProxy, settings, config);
      expect(appContext.calendarProxy).to.not.be.null;
    });
  });
});
