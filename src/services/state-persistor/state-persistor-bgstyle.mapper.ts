import { StyleItem } from '@/composables/mvt-styles/mvt-styles.model'

class StorageStyleMapper {
  styleSerialToStyle(styleText: string | null): StyleItem[] {
    if (styleText) {
      return JSON.parse(decodeURIComponent(styleText))
    }
    return []
  }

  styleToSerial(style: StyleItem[] | null): string {
    if (style) {
      return JSON.stringify(style)
    }
    return ''
  }
}

export const storageStyleMapper = new StorageStyleMapper()
