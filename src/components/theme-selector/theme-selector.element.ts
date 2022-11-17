import { html, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { ThemeNodeModel } from '../../services/themes/themes.model'
import { themesService } from '../../services/themes/themes.service'
import { themeSelectorService } from './theme-selector.service'

import './theme-grid.element'
import './theme-selector-button.element'
import { map } from 'rxjs'
import LuxElement from '../common/lux.element'

@customElement('lux-theme-selector')
export class ThemeSelectorElement extends LuxElement {
  @state()
  private isOpen = false
  @state()
  private currentTheme?: ThemeNodeModel
  @state()
  private themes?: ThemeNodeModel[]

  constructor() {
    super()

    this.subscribe(
      'currentTheme' as keyof this,
      themesService.theme$
    ).subscribe(theme => themeSelectorService.setCurrentThemeColors(theme))

    this.subscribe(
      'themes' as keyof this,
      themesService.themes$.pipe(
        map(themes =>
          themes.filter(theme => theme.metadata?.display_in_switcher === true)
        )
      )
    )
  }

  toggleThemesGrid() {
    this.isOpen = !this.isOpen

    this.dispatchEvent(
      new CustomEvent('toggleThemesGrid', {
        detail: {
          isOpen: this.isOpen,
        },
      })
    )
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
