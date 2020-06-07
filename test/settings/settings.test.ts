import { expect } from 'chai';
import { IGoogleSheetsProxy } from '../../src/sheets/google-sheets-proxy';
import { IConfig } from '../../src/config';
import { Settings } from '../../src/settings/settings';
import { GoogleSheetsProxyMock } from '../mocks/google-sheets-proxy-mock';
import { ConfigMock } from '../mocks/config-mock';
import { SettingsKeys } from '../../src/settings/settings-keys';

var sheetsProxy: IGoogleSheetsProxy;
var config: IConfig;
var settings: Settings;

describe('Settings', () => {
  describe('when settings sheet does not exist', () => {
    before(() => {
      sheetsProxy = new GoogleSheetsProxyMock();
      config = new ConfigMock('SettingsSheetDoesNotExist');
      settings = new Settings(sheetsProxy, config);
    });
    describe('get', () => {
      it('should return default CalendarID configuration setting', () => {
        var result = settings.get(SettingsKeys.CalendarID);
        expect(result.value).to.equal('1');
      });

      it('should return default CategoryIgnore configuration setting', () => {
        var result = settings.get(SettingsKeys.CategoryIgnore);
        expect(result.value).to.equal('2');
      });

      it('should return default FlowTimeDelayInMins configuration setting', () => {
        var result = settings.get(SettingsKeys.FlowTimeDelayInMins);
        expect(result.value).to.equal('3');
      });
    });

    describe('toArray', () => {
      it('should return 3 default settings', () => {
        var result = settings.toArray();
        expect(result.length).to.equal(3);
      });

      it('should return CalendarID setting value', () => {
        var result = settings.toArray();
        var match = result.find((item) => item.key == SettingsKeys.CalendarID);
        expect(match.value).to.equal('1');
      });

      it('should return CategoryIgnore setting value', () => {
        var result = settings.toArray();
        var match = result.find((item) => item.key == SettingsKeys.CategoryIgnore);
        expect(match.value).to.equal('2');
      });

      it('should return FlowTimeDelayInMins setting value', () => {
        var result = settings.toArray();
        var match = result.find((item) => item.key == SettingsKeys.FlowTimeDelayInMins);
        expect(match.value).to.equal('3');
      });
    });

    describe('when settings sheet exists', () => {
      before(() => {
        sheetsProxy = new GoogleSheetsProxyMock();
        config = new ConfigMock('SettingsSheetExists');
        settings = new Settings(sheetsProxy, config);
      });

      describe('get', () => {
        it('should return CalendarID configuration setting', () => {
          var result = settings.get(SettingsKeys.CalendarID);
          expect(result.value).to.equal('10');
        });

        it('should return CategoryIgnore configuration setting', () => {
          var result = settings.get(SettingsKeys.CategoryIgnore);
          expect(result.value).to.equal('9');
        });

        it('should return CalendarID configuration setting', () => {
          var result = settings.get(SettingsKeys.FlowTimeDelayInMins);
          expect(result.value).to.equal('8');
        });
      });

      describe('toArray', () => {
        it('should return 3 settings', () => {
          var result = settings.toArray();
          expect(result.length).to.equal(3);
        });

        it('should return CalendarID setting value', () => {
          var result = settings.toArray();
          var match = result.find((item) => item.key == SettingsKeys.CalendarID);
          expect(match.value).to.equal('10');
        });

        it('should return CategoryIgnore setting value', () => {
          var result = settings.toArray();
          var match = result.find((item) => item.key == SettingsKeys.CategoryIgnore);
          expect(match.value).to.equal('9');
        });

        it('should return FlowTimeDelayInMins setting value', () => {
          var result = settings.toArray();
          var match = result.find((item) => item.key == SettingsKeys.FlowTimeDelayInMins);
          expect(match.value).to.equal('8');
        });
      });
    });
  });
});
