/// <reference types="react" />
/** Should manage options, auto function, and ripple change functions.
* Should get the initial grid array from a higher order component. */
declare function GridWrapper({ outerShellOnly, initialVariance, rippleVariance, maxGridSize, rippleSpeed, ripplePropagation, autoDrop, rippleTransitionSpeed, initialGrayscale, grayscaleChange }: {
    outerShellOnly?: boolean | undefined;
    initialVariance?: number | undefined;
    rippleVariance?: number | undefined;
    maxGridSize?: number | undefined;
    rippleSpeed?: number | undefined;
    ripplePropagation?: number | undefined;
    autoDrop?: boolean | undefined;
    rippleTransitionSpeed?: number | undefined;
    initialGrayscale?: boolean | undefined;
    grayscaleChange?: boolean | undefined;
}): JSX.Element;
export default GridWrapper;
