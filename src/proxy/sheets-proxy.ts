import { KeyValuePair } from '../shared/common';
import { Config } from '../shared/config';

export interface ISheetsProxy {
  sheetExists(sheetName: string): boolean;
  populateSheet(sheetName: string, data: Object[][]): boolean;
  populateSheet(sheetName: string, data: Object[][], rangeName: string): boolean;
  createSheet(sheetName: string): boolean;
}

export class SheetsProxy implements ISheetsProxy {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  private config: Config;

  constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet, config: Config) {
    this.spreadsheet = spreadsheet;
    this.config = config;
  }

  populateSheet(sheetName: string, data: Object[][], rangeName?: string): boolean {
    var sheet = this.spreadsheet.getSheetByName(sheetName);
    if (!sheet) throw new Error("Cannot get sheet with name of '" + sheetName + "'");

    // TODO: Handle assigning range name (or rewriting if it exists)
    var range = sheet.getRange(1, 1, data.length, data[0].length);
    range.setValues(data);

    if (rangeName) {
      this.spreadsheet.setNamedRange(rangeName, range);
    }

    return true;
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
}
