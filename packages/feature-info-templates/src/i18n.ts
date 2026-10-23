import { inject, ref, type InjectionKey } from 'vue'
import i18nextSingleton from 'i18next'
import type { i18n as I18n, TFunction } from 'i18next'

/**
 * Reactive translation surface the feature-info templates rely on, backed by an
 * i18next instance. This replaces a direct dependency on `i18next-vue` so the
 * templates package installs no Vue i18n plugin of its own — the host provides
 * the instance via {@link provideLuxTplI18n}/{@link createLuxTplI18n}. This
 * matters in a host such as the VC Map 3D viewer, where installing i18next-vue
 * would clobber the app's vue-i18n global `$t`.
 */
export interface LuxTplI18n {
  /** The underlying i18next instance, proxied so property reads are reactive. */
  i18next: I18n
  /** Return a translation function fixed to the given namespace(s). */
  getFixedT: (ns?: string | string[]) => TFunction
}

export const LUX_TPL_I18N: InjectionKey<LuxTplI18n> = Symbol('lux-tpl-i18n')

/**
 * Wrap an i18next instance so translations re-render Vue components on language
 * change. Reactivity uses the same trick as i18next-vue: a ref bumped on
 * i18next events, touched whenever a translation or an i18next property is read
 * during render, so the reading component re-renders. Call once per instance
 * (it registers event listeners) and provide the result via {@link LUX_TPL_I18N}.
 */
export function createLuxTplI18n(i18next: I18n): LuxTplI18n {
  const revision = ref(0)
  const bump = (): void => {
    revision.value++
  }
  i18next.on('languageChanged', bump)
  i18next.on('loaded', bump)
  i18next.store?.on('added', bump)
  i18next.store?.on('removed', bump)

  // Read the ref so the current render tracks it as a dependency.
  const track = (): void => {
    void revision.value
  }

  const proxiedI18next = new Proxy(i18next, {
    get(target, prop, receiver) {
      track()
      return Reflect.get(target, prop, receiver)
    },
  })

  function getFixedT(ns?: string | string[]): TFunction {
    const fixedT = i18next.getFixedT(null, ns ?? null)
    return new Proxy(fixedT, {
      apply(target, thisArg, args) {
        track()
        if (!i18next.isInitialized) {
          return ''
        }
        return Reflect.apply(target, thisArg, args)
      },
    }) as TFunction
  }

  return { i18next: proxiedI18next, getFixedT }
}

/**
 * Consume translations inside a template's `setup()` (or during render, e.g.
 * from a helper called in a template expression). Mirrors i18next-vue's
 * `useTranslation`: returns `{ t, i18next }`. When no host provided an instance
 * it falls back to the global i18next singleton (non-reactive) so templates
 * still render in isolation, e.g. in unit tests.
 *
 * @param ns Namespace(s) to fix the returned `t` to. Omit to use the instance's
 *   default namespace (as `useTranslation()` did).
 */
export function useLuxTranslation(ns?: string | string[]): {
  t: TFunction
  i18next: I18n
} {
  const ctx = inject(LUX_TPL_I18N, null)
  if (!ctx) {
    return {
      t: i18nextSingleton.getFixedT(null, ns ?? null),
      i18next: i18nextSingleton,
    }
  }
  return { t: ctx.getFixedT(ns), i18next: ctx.i18next }
}
