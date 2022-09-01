// Components
import type { TemplateResult } from "lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TwLitElement } from "../common/TwLitElement";

import "../components/LuxembourgGeoportail";

@customElement("luxembourg-home-page")
export class LuxembourgHomePage extends TwLitElement {
  render(): TemplateResult {
    return html`
      <div class="container">
        <luxembourg-geoportail></luxembourg-geoportail>
      </div>
    `;
  }
}
