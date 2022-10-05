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
  @state()
  private currentTheme?: LuxTheme
  private themeService: ThemeService
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
        class="flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary"
        @click=${this.toggleThemes}
      >
        <span class="py-[2]">Theme: ${this.currentTheme?.name}</span>
        <a
          href="#"
          class="p-[2] shrink-0 flex flex-row text-[12px] bg-secondary"
        >
          <span class="py-[3]">Changer</span>
          <span class="flex flex-row flex-wrap ml-1 w-12">
            <div class="h-[10] w-[10] m-[1] bg-main-primary"></div>
            <div class="h-[10] w-[10] m-[1] bg-tourisme-primary"></div>
            <div class="h-[10] w-[10] m-[1] bg-environnement-primary"></div>
            <div class="h-[10] w-[10] m-[1] bg-eau-primary"></div>
            <div class="h-[10] w-[10] m-[1] bg-main-primary"></div>
            <div class="h-[10] w-[10] m-[1] bg-tourisme-primary"></div>
            <div class="h-[10] w-[10] m-[1] bg-environnement-primary"></div>
            <div class="h-[10] w-[10] m-[1] bg-eau-primary"></div>
          </span>
        </a>
      </div>
      ${this.displayThemeCards
        ? html` <div class="absolute w-[300] bg-white">
            <lux-theme-switcher
              class="flex flex-row flex-wrap"
            ></lux-theme-switcher>
          </div>`
        : html``}
    `
  }

  override createRenderRoot() {
    return this
  }
}
