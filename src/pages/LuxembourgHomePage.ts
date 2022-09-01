// Components
import type { TemplateResult } from 'lit';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/LuxembourgGeoportail';

@customElement('luxembourg-home-page')
export class LuxembourgHomePage extends LitElement {
  render(): TemplateResult {
    return html`
      <div class="container">
        <luxembourg-geoportail></luxembourg-geoportail>
      </div>
    `;
  }

  override createRenderRoot() {
    return this;
  }
}
