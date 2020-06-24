import {
  AppContext,
  initContext,
  getContext,
  _appContext,
} from '../../src/shared/application-context';
import { expect } from 'chai';
import { SpreadsheetMock } from '../mocks/google-apps-script-mocks';

describe('AppContext', () => {
  var spreadsheetAppMock: SpreadsheetMock;

  describe('on construction', () => {
    before(() => {
      spreadsheetAppMock = new SpreadsheetMock();
    });

    it('should throw error on null spreadsheetApp parameter', () => {
      expect(() => new AppContext(null)).to.throw(Error);
    });

    it('should populate settings property', () => {
      var appContext = new AppContext(spreadsheetAppMock);
      expect(appContext.settings).to.not.be.null;
    });

    it('should populate config property', () => {
      var appContext = new AppContext(spreadsheetAppMock);
      expect(appContext.config).to.not.be.null;
    });

    it('should populate sheetsProxy property', () => {
      var appContext = new AppContext(spreadsheetAppMock);
      expect(appContext.sheetsProxy).to.not.be.null;
    });
  });

  describe('initContext', () => {
    describe('with none null constructor parameter', () => {
      before(() => {
        spreadsheetAppMock = new SpreadsheetMock();
        initContext(spreadsheetAppMock);
      });

      it('should initialse sheetsProxy to not be null', () => {
        expect(_appContext.sheetsProxy).to.not.be.null;
      });

      it('should initialse config to not be null', () => {
        expect(_appContext.config).to.not.be.null;
      });

      it('should initialse settings to not be null', () => {
        expect(_appContext.settings).to.not.be.null;
      });
    });

    describe('with null constructor parameter', () => {
      before(() => {
        spreadsheetAppMock = new SpreadsheetMock();
      });

      it('should throw error', () => {
        expect(() => initContext(null)).to.throw(Error);
      });
    });
  });

  describe('getContext', () => {
    before(() => {
      spreadsheetAppMock = new SpreadsheetMock();
      initContext(spreadsheetAppMock);
    });

    it('should get context sheetsProxy value to not be null', () => {
      expect(getContext().sheetsProxy).to.not.be.null;
    });

    it('should get context config value to not be null', () => {
      expect(getContext().config).to.not.be.null;
    });

    it('should get context settings value to not be null', () => {
      expect(getContext().settings).to.not.be.null;
    });
  });
});
