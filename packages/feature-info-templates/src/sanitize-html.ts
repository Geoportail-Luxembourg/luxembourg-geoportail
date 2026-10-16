import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html'

/**
 * Sanitizing replacement for `v-html`. Import it in each template and use as
 * `v-lux-html`; the lib-specific name means a forgotten import fails in every
 * host, not just outside the geoportail. DOMPurify defaults, so `target` is
 * stripped.
 */
export const vLuxHtml = buildVueDompurifyHTMLDirective()
