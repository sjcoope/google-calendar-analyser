import { IConfig, Config } from './config';
import { ISettings, Settings } from './settings/settings';
import { ISheetsProxy, SheetsProxy } from '../sheets/sheets-proxy';
import { ICalendarProxy, CalendarProxy } from '../calendar/calendar-proxy';

export class AppContext {
  constructor(sheetsProxy: SheetsProxy, calendarProxy: CalendarProxy, settings: Settings, config: Config) {
    if (!sheetsProxy) throw new Error("Invalid constructor parameter: 'sheetsProxy'");
    if (!settings) throw new Error("Invalid constructor parameter: 'settings'");
    if (!calendarProxy) throw new Error("Invalid constructor parameter: 'calendarProxy'");
    if (!config) throw new Error("Invalid constructor parameter: 'config'");

    this.sheetsProxy = sheetsProxy;
    this.settings = settings;
    this.calendarProxy = calendarProxy;
    this.config = config;
  }

  settings: ISettings;
  sheetsProxy: ISheetsProxy;
  calendarProxy: ICalendarProxy;
  config: IConfig;
}
