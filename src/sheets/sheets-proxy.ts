import { KeyValuePair } from '../shared/common';

export interface ISheetsProxy {
  sheetExists(sheetName: string): boolean;
  getDataFromSheet(sheetName: string): Array<KeyValuePair>;
  populateSheet(sheetName: string, data: Array<KeyValuePair>);
  createSheet(sheetName: string);
}

export class SheetsProxy implements ISheetsProxy {
  private spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;

  constructor(spreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp) {
    this.spreadsheetApp = spreadsheetApp;
  }

  populateSheet(sheetName: string, data: Array<KeyValuePair>) {
    throw new Error('Method not implemented.');
  }

  createSheet(sheetName: string) {
    throw new Error('Method not implemented.');
  }

  sheetExists(sheetName: string) {
    return false;
  }

  getDataFromSheet(sheetName: string) {
    return new Array<KeyValuePair>();
  }
}
