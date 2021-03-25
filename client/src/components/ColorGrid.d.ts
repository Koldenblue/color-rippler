/// <reference types="react" />
/** highest-order component for ColorGrid. The grid array generation should be in this function,
 * since the array needs to be generated in order for all other components to operate.
 * For example, the ColorGrid array needs to be in place first, before the autoDrop works properly,
 * or before the DynaColorBox components can be mapped. */
declare function ColorGrid(props: {
    reloadingWithOptions: boolean;
    outerShellOnly?: boolean;
    initialVariance?: number;
    rippleVariance?: number;
    maxGridSize?: number;
    rippleSpeed?: number;
    ripplePropagation?: number;
    initialGrayscale?: boolean;
    rippleTransitionSpeed?: number;
    grayscaleChange?: boolean;
    autoDrop?: boolean;
}): JSX.Element;
export default ColorGrid;
