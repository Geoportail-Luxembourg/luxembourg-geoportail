import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'

import './theme-switcher.component'
import { LuxTheme } from './theme.model'
import { LuxThemeService, ThemeService } from './theme.service'

@customElement('lux-theme-selector')
export class ThemeSelector extends LitElement {
  @state()
  private displayThemeCards = false

  private themeService: ThemeService
  private currentTheme: LuxTheme
  private subscription: Subscription
  constructor() {
    super()
    this.themeService = LuxThemeService
    this.subscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme
      this.requestUpdate()
    })
  }

  toggleThemes() {
    this.displayThemeCards = !this.displayThemeCards
  }

  render(): TemplateResult {
    return html`
      <div
        class="bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary"
        @click=${this.toggleThemes}
      >
        Theme: ${this.currentTheme.name}
      </div>
      ${this.displayThemeCards
        ? html` <div class="absolute w-[300] bg-white">
            <lux-theme-switcher></lux-theme-switcher>
          </div>`
        : html``}
    `
  }

  override createRenderRoot() {
    return this
  }
}
