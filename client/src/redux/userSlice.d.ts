export declare const userSlice: import("@reduxjs/toolkit").Slice<{
    currentUser: null;
}, {
    loggedInUser: (state: any, action: {
        payload: any;
        type: string;
    }) => void;
}, "user">;
export declare const selectLoggedInUser: (state: any) => any;
export declare const loggedInUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
declare const _default: import("redux").Reducer<{
    currentUser: null;
}, import("redux").AnyAction>;
export default _default;
