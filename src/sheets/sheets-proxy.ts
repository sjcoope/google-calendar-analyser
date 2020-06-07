import { KeyValuePair } from '../shared/common';

export interface ISheetsProxy {
  sheetExists(sheetName: string): boolean;
  getDataFromSheet(sheetName: string): Array<KeyValuePair>;
}

export class SheetsProxy {
  private spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;

  constructor(spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp) {
    this.spreadsheetApp = spreadsheetApp;
  }

  sheetExists(sheetName: string) {
    return false;
  }

  getDataFromSheet(sheetName: string) {
    return new Array<KeyValuePair>();
  }
}
