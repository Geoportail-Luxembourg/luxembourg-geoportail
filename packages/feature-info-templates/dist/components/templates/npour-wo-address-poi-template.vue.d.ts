import { FeatureInfoJSON, FeatureJSON } from '../../models';
type __VLS_Props = {
    layers: FeatureInfoJSON;
    currentUrl?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    export: (payload: {
        feature: FeatureJSON;
        format: "kml" | "gpx";
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onExport?: ((payload: {
        feature: FeatureJSON;
        format: "kml" | "gpx";
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
