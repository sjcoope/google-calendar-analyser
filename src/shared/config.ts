import { KeyValuePair } from './common';

export interface IConfig {
  sheetNameSettings: string;
  getDefaultSettings(): Array<KeyValuePair>;
}

export class Config implements IConfig {
  public sheetNameSettings = 'Settings';

  public getDefaultSettings(): Array<KeyValuePair> {
    return new Array<KeyValuePair>(
      new KeyValuePair('CalendarID', 'simon.coope@sjcnet.co.uk'), // TODO - Remove email for testing once settings configured correctly to read from SS.
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
