// Components
import type { TemplateResult } from 'lit'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import './background-selector/background-selector.element'
import './layers-panel/layer-panel.element'
import './map/map-container.element'
import './nav-bars/language-selector.element'

@customElement('lux-app')
export class App extends LitElement {
  render(): TemplateResult {
    return html`
      <div class="h-screen flex flex-col overflow-hidden">
        <header class="h-14 flex bg-white shadow-header z-10 shrink-0">
          <div class="p-[5px]">
            <img src="./assets/header/gov-light.8b5db4.png" />
          </div>
          <lux-language-selector></lux-language-selector>
        </header>
        <main class="flex grow">
          <!--side bar-->
          <div class="w-80 bg-secondary">
            <lux-layer-panel></lux-layer-panel>
          </div>
          <div class="grow bg-blue-100">
            <lux-map-container></lux-map-container>
          </div>
          <lux-background-selector
            class="absolute right-1 top-16"
          ></lux-background-selector>
        </main>
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
