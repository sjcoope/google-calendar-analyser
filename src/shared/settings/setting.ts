import { SettingsKeys } from './settings-keys';
export class Setting {
  constructor(key: SettingsKeys, value: string) {
    this.key = key;
    this.value = value;
  }

  key: SettingsKeys;
  value: string;
}
