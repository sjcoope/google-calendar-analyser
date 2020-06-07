import { Config } from '../config';
import { Setting } from './setting';

export class Settings {
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

  }

  public toArray(): any {
    throw new Error('Method not implemented.');
  }
}
