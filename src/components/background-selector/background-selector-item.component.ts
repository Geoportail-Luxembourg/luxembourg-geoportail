import {LuxBase} from '../lux-base.component.ts';
import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('background-selector-item')
export class BackGroundSelectorItem extends LuxBase {
  @property() bgClass = '';

  constructor() {
    super();
  }

  render() {
    return html`
<img class="h-full w-full rounded-sm bg-[length:41px_41px] md:bg-[length:90px_50px] ${this.bgClass}_sm md:${this.bgClass} hd:${this.bgClass}_sm_hi hd_md:${this.bgClass}_hi bg-white">`;
  }
  createRenderRoot() {
    // no shadow dom
    return this;
  }
}
