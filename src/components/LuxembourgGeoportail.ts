import type { TemplateResult } from "lit";
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { customElement } from "lit/decorators.js";
import { TwLitElement } from '../common/TwLitElement';

@customElement("luxembourg-geoportail")
export class LuxembourgGeoportail extends TwLitElement {
  @property({ type: String }) title = 'Luxembourg Geoportail';

  render(): TemplateResult {
    return html`
      <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-xl w-1/2">Hello, ${this.title} !</h1>
    `;
  }
}
