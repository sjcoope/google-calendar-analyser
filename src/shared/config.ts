import { KeyValuePair } from './common';

export class Config {
  public sheetNameSettings: string = 'Settings';

  public getDefaultSettings(): Array<KeyValuePair> {
    return new Array<KeyValuePair>(
      new KeyValuePair('CalendarID', ''),
      new KeyValuePair('CategoryIgnore', '10'),
      new KeyValuePair('FlowTimeDelayInMins', '15'),
      new KeyValuePair('LunchTimeDurationInMins', '60'),
      new KeyValuePair('DataSheetName', 'Data'),
      new KeyValuePair('DataRangeName', 'Data'),
      new KeyValuePair('WorkingTimeFrom', '08:30'),
      new KeyValuePair('WorkingTimeTo', '17:00')
    );
  }
}
