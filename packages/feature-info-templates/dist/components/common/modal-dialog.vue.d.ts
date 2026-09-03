declare var __VLS_15: {}, __VLS_17: {};
type __VLS_Slots = {} & {
    content?: (props: typeof __VLS_15) => any;
} & {
    footer?: (props: typeof __VLS_17) => any;
};
declare const _default: __VLS_WithSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: StringConstructor;
    role: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: StringConstructor;
    role: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    footer: boolean;
    role: string;
    maxHeight: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
