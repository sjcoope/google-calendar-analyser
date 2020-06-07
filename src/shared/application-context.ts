import { Settings } from '../settings/settings';
import { GoogleSheetsProxy, IGoogleSheetsProxy } from '../sheets/google-sheets-proxy';
import { IConfig, Config } from '../config';

export class AppContext {
  constructor(spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp) {
    this.sheetsApp = new GoogleSheetsProxy(spreadsheetApp);
    this.config = new Config();
    this.settings = new Settings(this.sheetsApp, this.config);
  }

  settings: Settings;
  sheetsApp: IGoogleSheetsProxy;
  config: IConfig;
}

let _appContext: AppContext = null;

export function initAppContext(spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp) {
  if (!_appContext) {
    _appContext = new AppContext(spreadsheetApp);
  }
}

export function getContext() {
  if (!_appContext) {
    throw new Error('AppContext must be initialised before it can be used');
  }
  return _appContext;
}
