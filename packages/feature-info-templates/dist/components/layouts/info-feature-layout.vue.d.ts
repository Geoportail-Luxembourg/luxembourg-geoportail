import { FeatureInfoJSON, FeatureJSON } from '../../models';
type __VLS_Props = {
    layers: FeatureInfoJSON;
    currentUrl?: string;
    getDirectLink?: (feature: FeatureJSON, currentUrl?: string) => string;
};
declare var __VLS_1: {}, __VLS_3: {
    feature: FeatureJSON;
};
type __VLS_Slots = {} & {
    'layer-content'?: (props: typeof __VLS_1) => any;
} & {
    'feature-content'?: (props: typeof __VLS_3) => any;
};
declare const _default: __VLS_WithSlots<import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    export: (payload: {
        feature: FeatureJSON;
        format: "kml" | "gpx";
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onExport?: ((payload: {
        feature: FeatureJSON;
        format: "kml" | "gpx";
    }) => any) | undefined;
}>, {
    getDirectLink: (feature: FeatureJSON, currentUrl?: string | undefined) => string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
