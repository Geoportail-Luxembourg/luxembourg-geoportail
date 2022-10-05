import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Subscription } from 'rxjs'
import { LuxTheme } from './theme.model'
import { LuxThemeService, ThemeService } from './theme.service'

@customElement('lux-theme-switcher')
export class ThemeSwitcher extends LitElement {
  private themeService: ThemeService
  private themes?: LuxTheme[]
  private subscription: Subscription

  constructor() {
    super()
    this.themeService = LuxThemeService
    this.subscription = this.themeService.themes$.subscribe(themes => {
      this.themes = themes
      this.requestUpdate()
    })
  }
  render() {
    return html`${this.themes?.map(
      theme =>
        html`<button
          class="shrink-0 flex flex-col justify-between h-[150] w-1/2 pt-5 pb-1 px-[10] text-start text-gray-100/40 uppercase bg-${theme.name}-primary"
          @click="${() => this.setTheme(theme)}"
        >
          <div class="text-2xl">${theme.name}</div>
          <div
            class="text-6xl align-baseline after:content-${theme.name} after:font-icons"
          ></div>
        </button>`
    )} `
  }

  setTheme(theme: LuxTheme) {
    this.themeService.setCurrentTheme(theme)
  }

  disconnectedCallback() {
    this.subscription.unsubscribe()
    super.disconnectedCallback()
  }

  override createRenderRoot() {
    return this
  }
}
