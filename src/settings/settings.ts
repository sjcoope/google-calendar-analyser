import { Setting } from './setting';
import { SettingsKeys } from './settings-keys';
import { IConfig } from '../config';
import { IGoogleSheetsProxy } from '../sheets/google-sheets-proxy';
import { KeyValuePair } from '../shared/common';

export class Settings {
  private _settings: Array<Setting>;
  private _sheetsProxy: IGoogleSheetsProxy;
  private _config: IConfig;

  constructor(sheetsProxy: IGoogleSheetsProxy, config: IConfig) {
    if (!sheetsProxy) {
      throw new Error('Invalid constructor parameter: sheetsProxy');
    }
    if (!config) {
      throw new Error('Invalidte constructor parameter: config');
    }

    this._config = config;
    this._sheetsProxy = sheetsProxy;

    this.initialise();
  }

  private initialise() {
    let settings: Array<Setting>;
    if (this._sheetsProxy.sheetExists(this._config.sheetNameSettings)) {
      this._settings = this.toSettings(
        this._sheetsProxy.getDataFromSheet(this._config.sheetNameSettings)
      );
      console.info('Using config from datasheet');
    } else {
      this._settings = this._config.getDefaultSettings();
      console.info('Using default config settings');
    }
  }

  private toSettings(items: Array<KeyValuePair>): Array<Setting> {
    var array = new Array<Setting>();
    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      array.push(new Setting(SettingsKeys[item.key], item.value));
    }
    return array;
  }

  get(key: SettingsKeys): Setting {
    return this._settings.find((item) => item.key == key);
  }

  toArray(): Array<Setting> {
    return this._settings;
  }
}
