import { vi } from 'vitest'

vi.mock('i18next-vue', () => {
  return {
    useTranslation: () => ({ t: (tKey: any) => tKey })
  }
})
