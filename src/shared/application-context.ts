import { IConfig, Config } from './config';
import { ISettings, Settings } from './settings/settings';
import { ISheetsProxy, SheetsProxy } from '../sheets/sheets-proxy';

export class AppContext {
  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    if (!spreadsheet) throw new Error("Invalid constructor parameter: 'spreadsheet'");
    this.config = new Config();
    this.sheetsProxy = new SheetsProxy(spreadsheet, this.config);
    this.settings = new Settings(this.config);
  }

  settings: ISettings;
  sheetsProxy: ISheetsProxy;
  config: IConfig;
}

export let _appContext: AppContext = null;

export function initContext(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
  if (!spreadsheet) throw new Error("Invalid parameter: 'spreadsheet'");
  if (!this._appContext) {
    this._appContext = new AppContext(spreadsheet);
  }
}

export function getContext() {
  if (!this._appContext) {
    throw new Error('AppContext must be initialised before it can be used');
  }
  return this._appContext;
}
