import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Subscription } from 'rxjs'
import { LuxTheme } from './theme.model'
import { LuxThemeService, ThemeService } from './theme.service'
// import './theme-button.component'

@customElement('lux-theme-switcher')
export class ThemeSwitcher extends LitElement {
  private themeService: ThemeService
  private themes: LuxTheme[]
  private subscription: Subscription
  private themeColor
  constructor() {
    super()
    this.themeService = LuxThemeService
    this.subscription = this.themeService.themes$.subscribe(themes => {
      this.themes = themes
      this.requestUpdate()
    })
  }
  render() {
    return html`${this.themes.map(
      theme =>
        html`<button
          class="h-[150] w-1/2 py-4 text-center text-secondary uppercase bg-${theme.name}-primary shadow-primary-light shadow-lg text-xl"
          @click="${() => this.setTheme(theme)}"
        >
          ${theme.name}
        </button>`
      // FIXME: assign each button the color of its theme (bg-${theme.name}-primary in classes above does not work)
      // html`<lux-theme-button theme=${JSON.stringify(theme)}></lux-theme-button>`
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
