import { vi } from 'vitest'

vi.mock('i18next-vue', () => {
  return {
    useTranslation: () => ({
      t: (tKey: string) => tKey,
      i18next: { on: vi.fn(), changeLanguage: vi.fn() },
    }),
  }
})
