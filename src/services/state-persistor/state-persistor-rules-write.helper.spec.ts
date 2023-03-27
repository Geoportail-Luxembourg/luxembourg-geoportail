import { RulesWriteHelper } from './state-persistor-rules-write.helper'

describe('RulesWriteHelper', () => {
  describe('#processRules', () => {
    it('returns permalink and localStorage storage', () => {
      expect(RulesWriteHelper.processRules()).toBe(3)
    })
  })

  describe('#processRulesForKey', () => {
    it('returns permalink storage for key version', () => {
      expect(
        RulesWriteHelper.processRulesForKey('version', { version: '3' })
      ).toBe(1)
    })
    it('returns permalink storage as path for key theme', () => {
      expect(
        RulesWriteHelper.processRulesForKey('theme', { theme: 'eau' })
      ).toBe(2)
    })
    it('returns permalink storage as localStorage for key layersOpen', () => {
      expect(
        RulesWriteHelper.processRulesForKey('layersOpen', {
          layersOpen: 'false',
        })
      ).toBe(0)
    })
    it('returns local storage for other keys than version', () => {
      expect(
        RulesWriteHelper.processRulesForKey('any_key', { any_key: 'any_value' })
      ).toBe(undefined)
    })
  })
})
