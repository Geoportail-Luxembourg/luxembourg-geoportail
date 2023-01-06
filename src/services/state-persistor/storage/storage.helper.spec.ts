import { Layer } from '@/stores/map.store.model'
import { storageHelper } from './storage.helper'
import { storageProxy } from './storage-proxy'

const layer1: Layer = {
  id: 1,
  name: 'layer1_name',
  layers: 'layer1_layers',
  type: 'WMTS',
  imageType: '',
}

const layer2: Layer = {
  id: 2,
  name: 'layer2_name',
  layers: 'layer2_layers',
  type: 'WMTS',
  imageType: '',
}

const layer3: Layer = {
  id: 3,
  name: 'layer3_name',
  layers: 'layer3_layers',
  type: 'WMTS',
  imageType: '',
}

const spyMapToEntity = vi.spyOn(storageHelper, 'mapToEntity')
const spyMapToStorage = vi.spyOn(storageHelper, 'mapToStorage')
storageProxy.getValue = vi.fn(key => key)
storageProxy.setValue = vi.fn(value => value)

describe('Storage Proxy Helper', () => {
  describe('#mapToEntity', () => {
    it('returns the mapped string value', () => {
      const mapper = (value: string | null) => `This ${value} is mapped`
      expect(storageHelper.mapToEntity('myValue', mapper)).toBe(
        'This myValue is mapped'
      )
    })

    it('returns the mapped value as an entity', () => {
      const mapper = (value: string | null) => ({ value })
      expect(storageHelper.mapToEntity('myValue', mapper)).toStrictEqual({
        value: 'myValue',
      })
    })

    it('returns the mapped values as an array of entities', () => {
      const mapper = (values: string | null) =>
        values?.split('|').map(value => ({ id: parseInt(value, 10) }))
      expect(storageHelper.mapToEntity('1|2|3', mapper)).toStrictEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ])
    })

    it('returns the unmodified value when mapper is undefined', () => {
      expect(storageHelper.mapToEntity('myValue', undefined)).toBe('myValue')
    })
  })

  describe('#mapToStorage', () => {
    it('returns the mapped value as a string for storage', () => {
      const mapper = (value: Layer) => value.id.toString()
      expect(storageHelper.mapToStorage(layer1, mapper)).toBe('1')
    })
    it('returns the mapped values as a single string for storage', () => {
      const mapper = (values: Layer[]) =>
        values.map(value => value.id.toString()).join('')
      expect(storageHelper.mapToStorage([layer1, layer2, layer3], mapper)).toBe(
        '123'
      )
    })
  })

  describe('#getValue', () => {
    it('calls storageProxy getValue', () => {
      const mapper = (value: string | null) => `This ${value} is mapped`
      const value = storageHelper.getValue('myValue', mapper)
      expect(storageProxy.getValue).toHaveBeenCalledOnce()
      expect(spyMapToEntity).toHaveBeenCalledWith('myValue', mapper)
      expect(value).toBe('This myValue is mapped')
    })
  })

  describe('#setValue', () => {
    it('calls storageProxy setValue', () => {
      const mapper = (value: string | null) => `This ${value} is mapped`
      storageHelper.setValue('myKey', 'myValue', mapper)
      expect(spyMapToStorage).toHaveBeenCalledWith('myValue', mapper)
      expect(storageProxy.setValue).toHaveBeenCalledWith(
        'myKey',
        'This myValue is mapped'
      )
    })
  })
})
