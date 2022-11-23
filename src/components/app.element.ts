import { html } from 'lit'
import { combineLatest, first, map, tap } from 'rxjs'
import { customElement } from 'lit/decorators.js'
import LuxElement from './common/lux.element'
import { themesService } from '../services/themes/themes.service'
import { layersService } from '../services/layers/layers.service'
import { mapState } from '../states/map/map.state'

import './background-selector/background-selector.element'
import './layers-panel/layer-panel.element'
import './map/map-container.element'
import './nav-bars/language-selector.element'

@customElement('lux-app')
export class App extends LuxElement {
  constructor() {
    super()

    themesService.theme$
      .pipe(first())
      .subscribe(() => layersService.boostrapLayers())

    const persistLayers$ = combineLatest([
      mapState.layers$,
      mapState.bgLayer$,
      themesService.theme$,
    ]).pipe(
      map(([layers, bgLayer]) => {
        layersService.persistLayers(layers)

        if (bgLayer) {
          layersService.persistBgLayer(bgLayer)
        }
      })
    )

    this.addSubscription(persistLayers$)
  }

  render() {
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
