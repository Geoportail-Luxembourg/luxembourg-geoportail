import { FeatureInfoJSON, FeatureJSON } from '../../models';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    layers: {
        type: () => FeatureInfoJSON;
        required: true;
    };
    currentUrl: {
        type: StringConstructor;
        required: false;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    export: (payload: {
        feature: FeatureJSON;
        format: "kml" | "gpx";
    }) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    layers: {
        type: () => FeatureInfoJSON;
        required: true;
    };
    currentUrl: {
        type: StringConstructor;
        required: false;
    };
}>> & Readonly<{
    onExport?: ((payload: {
        feature: FeatureJSON;
        format: "kml" | "gpx";
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
