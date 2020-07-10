import { Config } from '../config';
import { KeyValuePair } from '../common';
import { SettingsKeys } from './settings-keys';

export interface ISettings {
  toArray(): Array<KeyValuePair>;
  get(key: SettingsKeys): String;
}

export class Settings implements ISettings {
  private config: Config;
  private settings: Array<KeyValuePair>;

  constructor(config: Config) {
    if (!config) {
      throw new Error('Invalid constructor parameter: config');
    }

    this.config = config;
    this.initialise();
  }

  private initialise() {
    this.settings = this.config.getDefaultSettings();
  }

  public toArray(): Array<KeyValuePair> {
    var array = new Array<KeyValuePair>();
    for (var i = 0; i < this.settings.length; i++) {
      let setting = this.settings[i];
      array.push(new KeyValuePair(setting.key, setting.value));
    }
    return array;
  }

  public get(key: SettingsKeys): String {
    var match = this.settings.find((item) => item.key == SettingsKeys[key]);
    return !match ? null : match.value;
  }
}
