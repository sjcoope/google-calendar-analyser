import { expect } from 'chai';
import { Settings } from '../../../src/shared/settings/settings';
import { Config, IConfig } from '../../../src/shared/config';
import { mock, when, instance } from 'ts-mockito';
import { KeyValuePair } from '../../../src/shared/common';
import { SettingsKeys } from '../../../src/shared/settings/settings-keys';

describe('Settings', () => {
  describe('on construction', () => {
    it('should throw error on null config parameter', () => {
      expect(() => new Settings(null)).to.throw(Error);
    });

    describe('when loading default settings', () => {
      var configMock: IConfig;
      var settings: Settings;

      before(() => {
        configMock = mock(Config);
        when(configMock.getDefaultSettings()).thenReturn(
          new Array<KeyValuePair>(
            new KeyValuePair('CalendarID', '1'),
            new KeyValuePair('CategoryIgnore', '2'),
            new KeyValuePair('FlowTimeDelayInMins', '3')
          )
        );

        var config = instance(configMock);
        settings = new Settings(config.getDefaultSettings());
      });

      describe('get', () => {
        it('should return default CalendarID configuration setting', () => {
          let result = settings.get(SettingsKeys.CalendarID);
          expect(result).to.equal('1');
        });

        it('should return default CategoryIgnore configuration setting', () => {
          var result = settings.get(SettingsKeys.CategoryIgnore);
          expect(result).to.equal('2');
        });

        it('should return default FlowTimeDelayInMins configuration setting', () => {
          var result = settings.get(SettingsKeys.FlowTimeDelayInMins);
          expect(result).to.equal('3');
        });
      });
    });
  });
});
