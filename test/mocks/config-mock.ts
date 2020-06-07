import { IConfig } from '../../src/config';
import { Setting } from '../../src/settings/setting';
import { SettingsKeys } from '../../src/settings/settings-keys';

export class ConfigMock implements IConfig {
  constructor(sheetNameSettings: string) {
    this.sheetNameSettings = sheetNameSettings;
  }

  sheetNameSettings: string = 'settings';

  getDefaultSettings(): Setting[] {
    return new Array<Setting>(
      new Setting(SettingsKeys.CalendarID, '1'),
      new Setting(SettingsKeys.CategoryIgnore, '2'),
      new Setting(SettingsKeys.FlowTimeDelayInMins, '3')
    );
  }
}
