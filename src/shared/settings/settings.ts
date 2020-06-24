import { Config } from '../config';
import { Setting } from './setting';
import { KeyValuePair } from '../common';
import { SettingsKeys } from './settings-keys';

export interface ISettings {
  toArray(): Array<KeyValuePair>;
  get(key: SettingsKeys): Setting;
}

export class Settings implements ISettings {
  private config: Config;
  private settings: Array<Setting>;

  constructor(config: Config) {
    if (!config) {
      throw new Error('Invalid constructor parameter: config');
    }

    this.config = config;
    this.initialise();
  }

  private initialise() {
    this.settings = this.toSettings(this.config.getDefaultSettings());
  }

  private toSettings(items: Array<KeyValuePair>): Array<Setting> {
    var array = new Array<Setting>();
    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      array.push(new Setting(SettingsKeys[item.key], item.value));
    }
    return array;
  }

  public toArray(): Array<KeyValuePair> {
    var array = new Array<KeyValuePair>();
    for (var i = 0; i < this.settings.length; i++) {
      let setting = this.settings[i];
      array.push(new KeyValuePair(SettingsKeys[setting.key], setting.value));
    }
    return array;
  }

  public get(key: SettingsKeys): Setting {
    return this.settings.find((item) => item.key == key);
  }
}
