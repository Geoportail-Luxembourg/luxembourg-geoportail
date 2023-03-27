import { StyleItem } from '@/composables/mvt-styles/mvt-styles.model'

class StorageStyleMapper {
  styleSerialToStyle(styleText: string | null): StyleItem[] {
    if (styleText) {
      return JSON.parse(decodeURIComponent(styleText)) || []
    }
    return []
  }

  styleLocalStorageToStyle(styleText: string | null): StyleItem[] {
    if (styleText) {
      return JSON.parse(styleText).medium || []
    }
    return []
  }

  styleToSerial(style: StyleItem[] | null): string {
    if (style && style.length > 0) {
      return JSON.stringify(style)
    }
    return ''
  }

  styleToLocalStorage(style: StyleItem[] | null): string {
    if (style && style.length > 0) {
      return JSON.stringify({ medium: style })
    }
    return ''
  }
}

export const storageStyleMapper = new StorageStyleMapper()
