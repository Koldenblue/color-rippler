export declare const colorGridSlice: import("@reduxjs/toolkit").Slice<{
    colorGrid: never[];
    gettingColor: boolean;
}, {
    setColorGrid: (state: any, action: {
        payload: any;
        type: string;
    }) => void;
    setGettingColor: (state: any) => void;
}, "colorGrid">;
export declare const selectColorGrid: (state: any) => any;
export declare const selectGettingColor: (state: any) => any;
export declare const setColorGrid: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, setGettingColor: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<{
    colorGrid: never[];
    gettingColor: boolean;
}, import("redux").AnyAction>;
export default _default;
