import { KeyValuePair } from './common';

export interface IConfig {
  sheetNameSettings: string;
  getDefaultSettings(): Array<KeyValuePair>;
}

export class Config implements IConfig {
  public sheetNameSettings = 'Settings';
  public sheetRangeSettings = {
    startRow: 1,
    startColumn: 1,
    numRows: 16,
    numColumns: 2,
  };

  public getDefaultSettings(): Array<KeyValuePair> {
    return new Array<KeyValuePair>(
      new KeyValuePair('CalendarID', 'simon@datarepublic.com'), // TODO - Remove email for testing once settings configured correctly to read from SS.
      new KeyValuePair('CategoryIgnore', '10'),
      new KeyValuePair('FlowTimeDelayInMins', '15'),
      new KeyValuePair('LunchTimeDurationInMins', '60'),
      new KeyValuePair('DataSheetName', 'Data'),
      new KeyValuePair('DataRangeName', 'Data'),
      new KeyValuePair('WorkingTimeFrom', '08:30'),
      new KeyValuePair('WorkingTimeTo', '17:00'),
      new KeyValuePair('CategoryIgnore', 'Basil'),
      new KeyValuePair('CategoryOne', 'Sage'),
      new KeyValuePair('CategoryTwo', 'Grape'),
      new KeyValuePair('CategoryThree', 'Flamingo'),
      new KeyValuePair('CategoryFour', 'Banana'),
      new KeyValuePair('CategoryFive', 'Tangerine'),
      new KeyValuePair('CategorySix', 'Cyan'),
      new KeyValuePair('CategorySeven', 'Graphite'),
      new KeyValuePair('CategoryEight', 'Blueberry'),
      new KeyValuePair('CategoryNine', 'Tomato')
    );
  }
}
