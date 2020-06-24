import { KeyValuePair } from '../shared/common';
import { Config } from '../shared/config';

export interface ISheetsProxy {
  sheetExists(sheetName: string): boolean;
  getDataFromSheet(sheetName: string): Array<KeyValuePair>;
  populateSheet(sheetName: string, data: Object[][]);
  createSheet(sheetName: string): boolean;
}

export class SheetsProxy implements ISheetsProxy {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  private config: Config;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet, config: Config) {
    this.spreadsheet = spreadsheet;
    this.config = config;
  }

  populateSheet(sheetName: string, data: Object[][]) {
    var sheet = this.spreadsheet.getSheetByName(sheetName);
    if (!sheet) throw new Error("Cannot get sheet with name of '" + sheetName + "'");
    var range = sheet.getRange(1, 1, data.length, data[0].length);
    range.setValues(data);
  }

  createSheet(sheetName: string): boolean {
    var result = this.spreadsheet.getSheetByName(sheetName);
    if (!result) {
      result = this.spreadsheet.insertSheet(sheetName);
      return true;
    }
    return false;
  }

  sheetExists(sheetName: string): boolean {
    return !this.spreadsheet.getSheetByName(sheetName);
  }

  getDataFromSheet(sheetName: string): Array<KeyValuePair> {
    throw new Error('Method not implemented.');
  }
}
