import { LuxTplIconName } from './icons';
/**
 * Renders one of the package's inline SVG icons at the current font size and
 * in the current text colour, so it behaves like the `<i class="fa …">` element
 * it replaced.
 *
 * Pass `title` for an icon that carries meaning on its own; leave it off for a
 * decorative one sitting next to a text label, and it is hidden from assistive
 * technology.
 */
type __VLS_Props = {
    name: LuxTplIconName;
    title?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
