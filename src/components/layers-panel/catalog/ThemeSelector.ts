import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { ThemeNodeModel } from '../../../services/themes/themes.model'
import { themesService } from '../../../services/themes/themes.service'
import { themingService } from './theme/theming.service'

import './theme/theme-grid.component'
import './theme/theme-selector-button.component'

@customElement('lux-theme-selector')
export class ThemeSelector extends LitElement {
  @state()
  private isOpen = false
  @state()
  private currentTheme?: ThemeNodeModel
  @state()
  private themes?: ThemeNodeModel[]
  private currentThemeSubscription: Subscription
  private themesSubscription: Subscription
  constructor() {
    super()
    this.currentThemeSubscription = themesService.theme$.subscribe(theme => {
      if (theme) {
        this.currentTheme = theme
        themingService.setCurrentThemeColors(theme)
      }
    })
    this.themesSubscription = themesService.themes$.subscribe(themes => {
      this.themes = themes
    })
  }

  toggleThemesGrid() {
    this.isOpen = !this.isOpen
  }

  render(): TemplateResult {
    return html`
      <lux-theme-selector-button
        @click="${this.toggleThemesGrid}"
        .themes="${this.themes}"
        .currentTheme="${this.currentTheme}"
      ></lux-theme-selector-button>
      ${this.isOpen
        ? html` <div
            class="absolute w-[310] mt-2 bg-white h-4/5 overflow-y-auto overflow-x-hidden"
          >
            <lux-theme-grid
              @set-theme="${this.setTheme}"
              .themes="${this.themes}"
              class="flex flex-row flex-wrap"
            ></lux-theme-grid>
          </div>`
        : html``}
    `
  }

  setTheme(event: CustomEvent) {
    themesService.setTheme(event.detail)
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
