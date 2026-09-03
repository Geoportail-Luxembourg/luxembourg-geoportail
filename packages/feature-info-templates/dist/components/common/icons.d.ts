/**
 * The icon set used by the templates, as inline SVG path data on a 16×16 grid.
 *
 * These replace the Font Awesome subset the templates used to pull from the
 * geoportail's `public/assets/font-awesome-6.2.0.all.min.css`. That sheet is
 * not an npm dependency and is not something a third-party host (the 3D viewer)
 * can be assumed to serve, so relying on it left the package not actually
 * self-contained.
 *
 * They are hand-drawn rather than lifted from an icon set, deliberately:
 * Font Awesome Free's icons are CC BY 4.0, which would put an attribution
 * obligation on every downstream consumer of this package. These carry none.
 */
export declare const LUX_TPL_ICON_PATHS: {
    readonly 'caret-down': "M3.5 6h9L8 11.5 3.5 6Z";
    readonly 'caret-up': "M3.5 10h9L8 4.5 3.5 10Z";
    readonly download: "M7.25 1.75h1.5v5.19l1.72-1.72 1.06 1.06L8 9.81 4.47 6.28l1.06-1.06 1.72 1.72V1.75ZM2.5 11.5H4v1.75h8V11.5h1.5v3.25h-11V11.5Z";
    readonly grid: "M2 3h5.25v5.25H2V3Zm6.75 0H14v5.25H8.75V3ZM2 9.75h5.25V15H2V9.75Zm6.75 0H14V15H8.75V9.75Z";
    readonly list: "M2 3.5h2v2H2v-2Zm3.5 0H14v2H5.5v-2ZM2 7h2v2H2V7Zm3.5 0H14v2H5.5V7ZM2 10.5h2v2H2v-2Zm3.5 0H14v2H5.5v-2Z";
    readonly phone: "M4.6 1.9a1 1 0 0 0-1.35.06L2.1 3.1a2 2 0 0 0-.35 2.35 15.5 15.5 0 0 0 6.8 6.8 2 2 0 0 0 2.35-.35l1.14-1.15a1 1 0 0 0 .06-1.35l-1.9-2.2a1 1 0 0 0-1.46-.05l-.9.9a12.2 12.2 0 0 1-3.14-3.14l.9-.9a1 1 0 0 0-.05-1.46L4.6 1.9Z";
    readonly fax: "M4.5 1h7v3.25h-7V1ZM2.75 5.25h10.5A1.25 1.25 0 0 1 14.5 6.5v3.5a1.25 1.25 0 0 1-1.25 1.25H2.75A1.25 1.25 0 0 1 1.5 10V6.5a1.25 1.25 0 0 1 1.25-1.25ZM4.5 11.5h7V15h-7v-3.5ZM12 6.9a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7Z";
    readonly at: "M8 1.5a6.5 6.5 0 1 0 3.1 12.2.75.75 0 0 0-.72-1.32A5 5 0 1 1 13 8v.55a1.1 1.1 0 0 1-2.2 0V5h-1.4v.83A3 3 0 1 0 8 11a3 3 0 0 0 2.06-.82 2.6 2.6 0 0 0 4.44-1.63V8A6.5 6.5 0 0 0 8 1.5Zm0 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z";
};
export type LuxTplIconName = keyof typeof LUX_TPL_ICON_PATHS;
