import type { TemplateResult } from 'lit';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Subscription } from 'rxjs';
import { LuxTheme, LuxThemes } from './theme.model';
import { LuxThemeService, ThemeService } from './theme.service';

@customElement('lux-theme-switcher')
export class ThemeSwitcher extends LitElement {
  private themeService: ThemeService;
  private themes: LuxThemes;
  private subscription: Subscription;
  constructor() {
    super();
    this.themeService = LuxThemeService;
    this.subscription = this.themeService.themes$.subscribe(
      themes => (this.themes = themes)
    );
  }
  render(): TemplateResult {
    return html`${Object.keys(this.themes).map(
      theme =>
        html`<button
          class="mx-4 my-4 py-4 text-center text-secondary uppercase bg-primary shadow-primary-light shadow-lg text-xl w-1/3"
          @click="${() => this.setTheme(this.themes[theme])}"
        >
          ${theme}
        </button>`
    )} `;
  }

  setTheme(theme: LuxTheme) {
    this.themeService.setCurrentTheme(theme);
  }

  disconnectedCallback() {
    this.subscription.unsubscribe();
    super.disconnectedCallback();
  }

  override createRenderRoot() {
    return this;
  }
}
