import { describe, it, expect } from 'vitest'
import {
  build3dState,
  buildObliqueState,
  LUX_VCS_MODULES,
  LUX_VCS_PLUGINS,
  LUX_VCS_PITCH,
} from './vcs.utils'
import type { ObliqueConfig } from './vcs.utils'

const LON = 6.13
const LAT = 49.61
const ALTITUDE = 5000

const obliqueConfig: ObliqueConfig = {
  cameraAltitude: 692,
  targetHeight: 292,
  distance: 400,
  heading: 45,
  pitch: -60,
  roll: 10,
  label: 'Oblique Map',
  modules: ['MyModule'],
  plugins: [['@my/plugin', { prop: 'val' }]],
  collection: 'ACT2023_ImagesObliques_all',
}

describe('build3dState', () => {
  it('returns a valid JSON string', () => {
    expect(() => JSON.parse(build3dState(LON, LAT, ALTITUDE))).not.toThrow()
  })

  it('sets camera position as empty array and target to [lon, lat, 300]', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE))
    expect(result[0][0]).toEqual([])
    expect(result[0][1]).toEqual([LON, LAT, 300])
  })

  it('uses provided distance', () => {
    const result = JSON.parse(build3dState(LON, LAT, 999))
    expect(result[0][2]).toBe(999)
  })

  it('uses heading 0 by default', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE))
    expect(result[0][3]).toBe(0)
  })

  it('uses provided heading', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE, 90))
    expect(result[0][3]).toBe(90)
  })

  it('uses default pitch from LUX_VCS_PITCH', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE))
    expect(result[0][4]).toBe(String(LUX_VCS_PITCH))
  })

  it('uses provided pitch', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE, 0, -30))
    expect(result[0][4]).toBe('-30')
  })

  it('uses roll 0 by default', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE))
    expect(result[0][5]).toBe(0)
  })

  it('uses provided roll', () => {
    const result = JSON.parse(
      build3dState(
        LON,
        LAT,
        ALTITUDE,
        0,
        LUX_VCS_PITCH,
        [],
        [],
        [],
        '3D Map',
        15
      )
    )
    expect(result[0][5]).toBe(15)
  })

  it('always includes LUX_VCS_MODULES', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE))
    for (const m of LUX_VCS_MODULES) {
      expect(result[2]).toContain(m)
    }
  })

  it('merges provided modules with LUX_VCS_MODULES without duplicates', () => {
    const result = JSON.parse(
      build3dState(LON, LAT, ALTITUDE, 0, LUX_VCS_PITCH, [
        'LuxConfig',
        'MyModule',
      ])
    )
    expect(result[2].filter((m: string) => m === 'LuxConfig')).toHaveLength(1)
    expect(result[2]).toContain('MyModule')
  })

  it('sets label at index 1', () => {
    const result = JSON.parse(
      build3dState(LON, LAT, ALTITUDE, 0, LUX_VCS_PITCH, [], [], [], 'MyLabel')
    )
    expect(result[1]).toBe('MyLabel')
  })

  it('sets selectedLayers at index 3', () => {
    const layers = [
      ['LayerA', 1, 0],
      ['LayerB', 1, 0],
    ]
    const result = JSON.parse(
      build3dState(LON, LAT, ALTITUDE, 0, LUX_VCS_PITCH, [], layers)
    )
    expect(result[3]).toEqual(layers)
  })

  it('always includes LUX_VCS_PLUGINS', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE))
    const pluginNames = result[5].map((p: unknown[]) => p[0])
    for (const [name] of LUX_VCS_PLUGINS) {
      expect(pluginNames).toContain(name)
    }
  })

  it('merges provided plugins with LUX_VCS_PLUGINS', () => {
    const extraPlugin: [string, Record<string, unknown>] = [
      '@my/plugin',
      { x: 1 },
    ]
    const result = JSON.parse(
      build3dState(LON, LAT, ALTITUDE, 0, LUX_VCS_PITCH, [], [], [extraPlugin])
    )
    const pluginNames = result[5].map((p: unknown[]) => p[0])
    expect(pluginNames).toContain('@my/plugin')
  })

  it('ends with 0 when no collection provided', () => {
    const result = JSON.parse(build3dState(LON, LAT, ALTITUDE))
    expect(result.at(-1)).toBe(0)
  })

  it('includes collection and trailing [] when collection is provided', () => {
    const result = JSON.parse(
      build3dState(
        LON,
        LAT,
        ALTITUDE,
        0,
        LUX_VCS_PITCH,
        [],
        [],
        [],
        '3D Map',
        0,
        'myCollection'
      )
    )
    expect(result.at(-2)).toBe('myCollection')
    expect(result.at(-1)).toEqual([])
  })
})

describe('buildObliqueState', () => {
  it('returns a valid JSON string', () => {
    expect(() =>
      JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    ).not.toThrow()
  })

  it('sets camera altitude from cfg.cameraAltitude', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result[0][0]).toEqual([LON, LAT, obliqueConfig.cameraAltitude])
  })

  it('sets target altitude from cfg.targetHeight', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result[0][1]).toEqual([LON, LAT, obliqueConfig.targetHeight])
  })

  it('sets distance from cfg.distance', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result[0][2]).toBe(obliqueConfig.distance)
  })

  it('sets heading from cfg.heading', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result[0][3]).toBe(obliqueConfig.heading)
  })

  it('sets pitch from cfg.pitch', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result[0][4]).toBe(obliqueConfig.pitch)
  })

  it('sets roll from cfg.roll', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result[0][5]).toBe(obliqueConfig.roll)
  })

  it('sets label from cfg.label', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result[1]).toBe(obliqueConfig.label)
  })

  it('merges cfg.modules with LUX_VCS_MODULES without duplicates', () => {
    const cfg = { ...obliqueConfig, modules: ['LuxConfig', 'CustomModule'] }
    const result = JSON.parse(buildObliqueState(LON, LAT, cfg))
    expect(result[2].filter((m: string) => m === 'LuxConfig')).toHaveLength(1)
    expect(result[2]).toContain('CustomModule')
    for (const m of LUX_VCS_MODULES) {
      expect(result[2]).toContain(m)
    }
  })

  it('includes collection', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result).toContain(obliqueConfig.collection)
  })

  it('ends with an empty array after collection', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    expect(result.at(-1)).toEqual([])
    expect(result.at(-2)).toBe(obliqueConfig.collection)
  })

  it('includes cfg.plugins merged with LUX_VCS_PLUGINS', () => {
    const result = JSON.parse(buildObliqueState(LON, LAT, obliqueConfig))
    const pluginNames = result[5].map((p: unknown[]) => p[0])
    expect(pluginNames).toContain('@my/plugin')
    for (const [name] of LUX_VCS_PLUGINS) {
      expect(pluginNames).toContain(name)
    }
  })
})
