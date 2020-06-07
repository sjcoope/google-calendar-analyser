import { Config } from '../config';

export class Settings {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  public toArray(): any {
    throw new Error('Method not implemented.');
  }
}
