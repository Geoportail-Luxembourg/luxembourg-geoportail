import { RulesReadHelper } from '../state-persistor-rules-read.helper'
import { RulesWriteHelper } from '../state-persistor-rules-write.helper'
import { SP_AVAILABLE_STORAGES } from '../state-persistor.model'
import { storageProxy } from './storage-proxy'

describe('Storage Proxy', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('#getValue', () => {
    it('retrieves the right default read storage according to processRules', () => {
      const spyCorrespondingStorages = vi.spyOn(
        storageProxy,
        'correspondingStorages'
      )
      vi.spyOn(storageProxy, 'paramKeys', 'get').mockReturnValue({
        key: 'value',
      })
      storageProxy.storageForKey = vi.fn()
      RulesReadHelper.processRules = vi.fn(
        () => SP_AVAILABLE_STORAGES.localStorage
      )

      storageProxy.getValue('any key')

      expect(spyCorrespondingStorages).toHaveBeenCalledOnce()
      expect(RulesReadHelper.processRules).toHaveBeenCalledWith({
        key: 'value',
      })
    })

    it('retrieves the right read storage for the specific key according to processRules', () => {
      const spyStorageForKey = vi.spyOn(storageProxy, 'storageForKey')
      vi.spyOn(storageProxy, 'paramKeys', 'get').mockReturnValue({
        key: 'value',
      })

      storageProxy.getValue('any key')

      expect(spyStorageForKey).toHaveBeenCalledOnce()
      expect(spyStorageForKey).toHaveBeenCalledWith(
        'any key',
        RulesReadHelper,
        undefined
      )
    })

    describe('when default read storage returns nothing', () => {
      storageProxy.correspondingStorages = vi.fn()

      describe('when read storage for this specific key returns a storage', () => {
        it('returns the value for the key', () => {
          storageProxy.storageForKey = vi.fn(
            () => ({ getItem: () => 'Value in storage' } as unknown as Storage)
          )

          expect(storageProxy.getValue('any key')).toBe('Value in storage')
        })
      })

      describe('when read storage for this specific key not found', () => {
        it('returns null', () => {
          storageProxy.storageForKey = vi.fn(() => undefined)

          expect(storageProxy.getValue('any key')).toBe(null)
        })
      })
    })
  })

  describe('#setValue', () => {
    it('retrieves the right default write storages according to processRules', () => {
      const spyCorrespondingStorages = vi.spyOn(
        storageProxy,
        'correspondingStorages'
      )

      storageProxy.setValue('any key', 'any value')

      expect(spyCorrespondingStorages).toHaveBeenCalledOnce()
      expect(spyCorrespondingStorages).toHaveBeenCalledWith(
        RulesWriteHelper.processRules()
      )
    })

    it('retrieves the right default write storages for specific key according to processRules', () => {
      const spyStorageForKey = vi.spyOn(storageProxy, 'storageForKey')

      storageProxy.setValue('any key', 'any value')

      expect(spyStorageForKey).toHaveBeenCalledOnce()
      // There is no fallback storage when setting items, thus the havebeencalled with only 2 params
      expect(spyStorageForKey).toHaveBeenCalledWith('any key', RulesWriteHelper)
    })

    describe('when specific storage for key is defined', () => {
      it('sets item into that specific storage and not into default write storages', () => {
        const customStorageForKey = { setItem: vi.fn() } as unknown as Storage
        const customStorageDefault1 = { setItem: vi.fn() } as unknown as Storage
        const customStorageDefault2 = { setItem: vi.fn() } as unknown as Storage
        storageProxy.storageForKey = () => customStorageForKey
        storageProxy.correspondingStorages = () => [
          customStorageDefault1,
          customStorageDefault2,
        ]

        storageProxy.setValue('any key', 'any value')

        expect(customStorageForKey.setItem).toHaveBeenCalledOnce()
        expect(customStorageDefault1.setItem).not.toHaveBeenCalled()
        expect(customStorageDefault2.setItem).not.toHaveBeenCalled()
      })
    })

    describe('when specific storage for key is undefined', () => {
      it('sets item into default write storages', () => {
        const customStorageForKey = { setItem: vi.fn() } as unknown as Storage
        const customStorageDefault1 = { setItem: vi.fn() } as unknown as Storage
        const customStorageDefault2 = { setItem: vi.fn() } as unknown as Storage
        storageProxy.storageForKey = () => undefined
        storageProxy.correspondingStorages = () => [
          customStorageDefault1,
          customStorageDefault2,
        ]

        storageProxy.setValue('any key', 'any value')

        expect(customStorageForKey.setItem).not.toHaveBeenCalled()
        expect(customStorageDefault1.setItem).toHaveBeenCalled()
        expect(customStorageDefault2.setItem).toHaveBeenCalled()
      })
    })
  })
})
