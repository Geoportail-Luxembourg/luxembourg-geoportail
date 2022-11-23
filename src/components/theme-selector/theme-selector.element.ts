import { html, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { ThemeNodeModel } from '../../services/themes/themes.model'
import { themesService } from '../../services/themes/themes.service'
import { themeSelectorService } from './theme-selector.service'

import './theme-grid.element'
import './theme-selector-button.element'
import { map, tap } from 'rxjs'
import LuxElement from '../common/base.element'
import { subscribe } from '../../mixins/subscribable'

@customElement('lux-theme-selector')
export class ThemeSelectorElement extends LuxElement {
  @state()
  private isOpen = false

  @subscribe(
    themesService.theme$.pipe(
      tap(theme => themeSelectorService.setCurrentThemeColors(theme))
    )
  )
  private currentTheme?: ThemeNodeModel

  @subscribe(
    themesService.themes$.pipe(
      map(themes =>
        themes.filter(theme => theme.metadata?.display_in_switcher === true)
      )
    )
  )
  private themes?: ThemeNodeModel[]

  constructor() {
    super()
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
        .isOpen="${this.isOpen}"
      ></lux-theme-selector-button>
      ${this.isOpen
        ? html` <div
            class="absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
          >
            <lux-theme-grid
              @set-theme="${this.setTheme}"
              .themes="${this.themes}"
              class="flex flex-row flex-wrap pl-2.5"
            ></lux-theme-grid>
          </div>`
        : html``}
    `
  }

  setTheme(event: CustomEvent) {
    themesService.setTheme(event.detail)
    this.toggleThemesGrid()
  }

  override createRenderRoot() {
    return this
  }
}
