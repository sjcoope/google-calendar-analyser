import { expect } from 'chai';
import { Settings } from '../../../src/shared/settings/settings';

describe('Settings', () => {
  describe('on construction', () => {
    it('should throw error on null config parameter', () => {
      expect(() => new Settings(null)).to.throw(Error);
    });
  });
});
