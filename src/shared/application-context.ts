import { IConfig, Config } from './config';
import { ISettings, Settings } from './settings/settings';
import { ISheetsProxy, SheetsProxy } from '../sheets/sheets-proxy';

export class AppContext {
  constructor(spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp) {
    this.config = new Config();
    this.sheetsProxy = new SheetsProxy(spreadsheetApp);
    this.settings = new Settings(this.config);
  }

  settings: ISettings;
  sheetsProxy: ISheetsProxy;
  config: IConfig;
}

let _appContext: AppContext = null;

export function initContext(spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp) {
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
