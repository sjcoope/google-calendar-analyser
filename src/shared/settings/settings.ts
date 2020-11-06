import { KeyValuePair } from '../common';
import { SettingsKeys } from './settings-keys';

export interface ISettings {
  get(key: SettingsKeys): string;
}

export class Settings implements ISettings {
  private settings: Array<KeyValuePair>;

  constructor(settings: Array<KeyValuePair>) {
    if (!settings) throw new Error("Invalid constructor parameter: 'settings'");
    this.settings = settings;
  }

  public get(key: SettingsKeys): string {
    const match = this.settings.find((item) => item.key == SettingsKeys[key]);
    return !match ? null : match.value;
  }
}
