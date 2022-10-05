import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'

import './theme-switcher.component'
import './theme-selector-button.component'
import { LuxTheme } from './theme.model'
import { LuxThemeService, ThemeService } from './theme.service'

@customElement('lux-theme-selector')
export class ThemeSelector extends LitElement {
  @state()
  private displayThemeCards = false
  @state()
  private currentTheme?: LuxTheme
  @state()
  private themes?: LuxTheme[]
  private themeService: ThemeService
  private currentThemeSubscription: Subscription
  private themesSubscription: Subscription
  constructor() {
    super()
    this.themeService = LuxThemeService
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe(
      theme => {
        this.currentTheme = theme
        this.requestUpdate()
      }
    )
    this.themesSubscription = this.themeService.themes$.subscribe(themes => {
      this.themes = themes
    })
  }

  toggleThemesGrid() {
    this.displayThemeCards = !this.displayThemeCards
  }

  render(): TemplateResult {
    return html`
      <lux-theme-selector-button
        @toggle-themes="${this.toggleThemesGrid}"
        themes="${JSON.stringify(this.themes)}"
        currentTheme="${JSON.stringify(this.currentTheme)}"
      ></lux-theme-selector-button>
      ${this.displayThemeCards
        ? html` <div class="absolute w-[300] bg-white">
            <lux-theme-switcher
              @set-theme="${this.setTheme}"
              themes="${JSON.stringify(this.themes)}"
              class="flex flex-row flex-wrap"
            ></lux-theme-switcher>
          </div>`
        : html``}
    `
  }

  setTheme(event: CustomEvent) {
    this.themeService.setCurrentTheme(event.detail)
  }

  disconnectedCallback() {
    this.currentThemeSubscription.unsubscribe()
    this.themesSubscription.unsubscribe()
    super.disconnectedCallback()
  }

  override createRenderRoot() {
    return this
  }
}
