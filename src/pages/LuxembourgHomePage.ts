// Components
import type { TemplateResult } from 'lit'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import '../components/layers-panel/LayerPanel'

@customElement('luxembourg-home-page')
export class LuxembourgHomePage extends LitElement {
  render(): TemplateResult {
    return html`
      <div class="h-screen flex flex-col">
        <header class="h-14 bg-white shadow-header z-10 shrink-0">
          <div class="p-[5px]">
            <img src="./assets/header/gov-light.8b5db4.png" />
          </div>
        </header>
        <main class="flex h-full">
          <!--side bar-->
          <div class="w-80 bg-main-secondary">
            <lux-layer-panel></lux-layer-panel>
          </div>
          <div class="grow bg-blue-100"></div>
        </main>
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
