import { KeyValuePair } from '../shared/common';

export interface IGoogleSheetsProxy {
  sheetExists(sheetName: string): boolean;
  getDataFromSheet(sheetName: string): Array<KeyValuePair>;
}

export class GoogleSheetsProxy implements IGoogleSheetsProxy {
  constructor(spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp) {
    this.spreadsheetApp = spreadsheetApp;
  }

  private spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;

  sheetExists(sheetName: string) {
    return false;
  }

  getDataFromSheet(sheetName: string) {
    return new Array<KeyValuePair>();
  }
}
