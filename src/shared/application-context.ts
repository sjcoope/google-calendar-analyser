import { IConfig, Config } from './config';
import { ISettings, Settings } from './settings/settings';
import { ISheetsProxy, SheetsProxy } from '../proxy/sheets-proxy';
import { ICalendarProxy, CalendarProxy } from '../proxy/calendar-proxy';
import { SettingsKeys } from './settings/settings-keys';

export class AppContext {
  constructor(
    spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet,
    calendar: GoogleAppsScript.Calendar.CalendarApp
  ) {
    if (!spreadsheet) throw new Error("Invalid constructor parameter: 'spreadsheet'");
    if (!calendar) throw new Error("Invalid constructor parameter: 'calendar'");

    this.config = new Config();
    this.sheetsProxy = new SheetsProxy(spreadsheet, this.config);
    this.settings = new Settings(this.config);
    this.calendarProxy = new CalendarProxy(
      calendar.getCalendarById(this.settings.get(SettingsKeys.CalendarID))
    );
  }

  settings: ISettings;
  sheetsProxy: ISheetsProxy;
  calendarProxy: ICalendarProxy;
  config: IConfig;
}
