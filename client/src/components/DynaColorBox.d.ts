/// <reference types="react" />
declare function DynaColorBox(props: {
    height: number;
    width: number;
    clickVariance: number;
    rippleTransitionSpeed: number;
    numColumns: number;
    red: number;
    green: number;
    blue: number;
    changeSurroundings: any;
    'data-value': {
        r: number;
        c: number;
    };
}): JSX.Element;
export default DynaColorBox;
