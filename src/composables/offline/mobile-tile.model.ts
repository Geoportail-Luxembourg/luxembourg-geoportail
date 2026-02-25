export enum MobileTileStatus {
  UNINITIALIZED = 'NO_INIT',
  IN_PROGRESS = 'IN_PROGRESS',
  UPDATE_AVAILABLE = 'UPDATE_AVAILABLE',
  UP_TO_DATE = 'UP_TO_DATE',
  DELETED = 'DELETED',
}

export enum MobileTilePackageToSkip {
  HILLSHADE = 'hillshade-lu',
}

export interface MobileTilePackages {
  ALL: string[]
  IN_PROGRESS: string[]
  UPDATE_AVAILABLE: string[]
  UP_TO_DATE: string[]
  UNAVAILABLE: string[]
}

export interface MobileTilePackageStatus {
  status: string
  filesize: string
  current: string
  available: string
}

export type MobileTileStatusJson = Record<string, MobileTilePackageStatus>
