import { vi } from 'vitest'

window.URL.createObjectURL = vi.fn()
window.ResizeObserver =
  window.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }))

vi.mock('i18next-vue', () => {
  return {
    useTranslation: () => ({
      t: (tKey: string) => tKey,
      i18next: { on: vi.fn(), changeLanguage: vi.fn() },
    }),
  }
})
