import { SettingsKeys } from './shared/settings-keys';
import { Setting } from './shared/setting';

export interface IConfig {
  sheetNameSettings: string;
  getDefaultSettings(): Array<Setting>;
}

export class Config implements IConfig {
  sheetNameSettings: string = 'Settings';

  getDefaultSettings(): Array<Setting> {
    return new Array<Setting>(
      new Setting(SettingsKeys.CalendarID, ''),
      new Setting(SettingsKeys.CategoryIgnore, '10'),
      new Setting(SettingsKeys.FlowTimeDelayInMins, '25'),
      new Setting(SettingsKeys.LunchTimeDurationInMins, '60'),
      new Setting(SettingsKeys.DataSheetName, 'Data'),
      new Setting(SettingsKeys.DataRangeName, 'Data'),
      new Setting(SettingsKeys.WorkingTimeFromDefault, '8:30'),
      new Setting(SettingsKeys.WorkingTimeToDefault, '17:00')
    );
  }
}
