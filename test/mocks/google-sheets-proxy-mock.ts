import { IGoogleSheetsProxy } from '../../src/sheets/google-sheets-proxy';
import { KeyValuePair } from '../../src/shared/common';

export class GoogleSheetsProxyMock implements IGoogleSheetsProxy {
  // TODO: Replace with mock of original class via mocking framework.

  sheetExists(sheetName: string): boolean {
    if (sheetName === 'SettingSheetDoesNotExist') return false;
    if (sheetName === 'SettingsSheetExists') return true;
  }

  getDataFromSheet(sheetName: string): KeyValuePair[] {
    return new Array<KeyValuePair>(
      new KeyValuePair('CalendarID', '10'),
      new KeyValuePair('CategoryIgnore', '9'),
      new KeyValuePair('FlowTimeDelayInMins', '8')
    );
  }
}
