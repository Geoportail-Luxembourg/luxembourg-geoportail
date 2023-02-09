import { RulesReadHelper } from './state-persistor-rules-read.helper'

describe('RulesReadHelper', () => {
  describe('#processRules', () => {
    it('returns the permalink as storage', () => {
      expect(RulesReadHelper.processRules({ myparam: 'theparamvalue' })).toBe(1)
    })
  })
  describe('#processRulesForKey', () => {
    it('returns undefined as storage to read the lang #ruleLangInUrl', () => {
      expect(RulesReadHelper.processRulesForKey('lang', { lang: 'fr' })).toBe(
        undefined
      )
    })
    it('returns no storage to read any other key', () => {
      expect(
        RulesReadHelper.processRulesForKey('any_key', {
          any_key: 'any_value',
          lang: 'fr',
        })
      ).toBe(undefined)
    })
  })

  describe('#ruleUseLocalStorage', () => {
    describe('#ruleEmptyParams', () => {
      it('returns true to use local storage if params is empty (coming from url)', () => {
        expect(RulesReadHelper.ruleUseLocalStorage({})).toBe(true)
      })
    })
    describe('#ruleOneParamOnly', () => {
      it('returns true to use local storage if specific param and is single', () => {
        expect(RulesReadHelper.ruleUseLocalStorage({ ipv6: '' })).toBe(true)
        expect(RulesReadHelper.ruleUseLocalStorage({ applogin: '' })).toBe(true)
        expect(RulesReadHelper.ruleUseLocalStorage({ localforage: '' })).toBe(
          true
        )
        expect(RulesReadHelper.ruleUseLocalStorage({ notspecific: '' })).toBe(
          false
        )
      })
    })
    describe('#ruleThreeParams', () => {
      it('returns true to use local storage if specific param and is single', () => {
        expect(
          RulesReadHelper.ruleUseLocalStorage({
            ipv6: '',
            applogin: '',
            localforage: '',
          })
        ).toBe(true)
        expect(
          RulesReadHelper.ruleUseLocalStorage({
            ipv6: '',
            applogin: '',
            localforage: '',
            otheparam: '',
          })
        ).toBe(false)
      })
    })
  })
})
