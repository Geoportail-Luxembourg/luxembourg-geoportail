/**
 * Sanitizing replacement for `v-html`, owned by this package.
 *
 * Register it locally in every template that needs it, via `<script setup>`'s
 * `vXxx` convention — never globally:
 *
 * ```vue
 * import { vLuxHtml } from '../../sanitize-html'
 * ...
 * <span v-lux-html="attributeEntry.value"></span>
 * ```
 *
 * The lib-specific name is deliberate. These templates previously used
 * `v-dompurify-html`, which resolved against a global the geoportail happens to
 * install app-wide in `main.ts`: inside that app it silently worked, and in any
 * other host the values rendered blank with only a dev-only "Failed to resolve
 * directive" warning. `v-lux-html` has no global anywhere, so a template that
 * forgets the import fails identically in every host — including ours, where
 * `sanitized-html.spec.ts` catches it.
 *
 * Built with no configuration, matching what both geoportail entry points
 * register app-wide, so the rendered output is unchanged. Note that DOMPurify's
 * default `ALLOWED_ATTR` excludes `target`, so `target="_blank"` in a
 * server-supplied value is dropped — that is existing behaviour, not new.
 */
export declare const vLuxHtml: import('vue').ObjectDirective<HTMLElement, any, string, any>;
