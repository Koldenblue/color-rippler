/// <reference types="react" />
/** Uses the color grid array of RGB values in order to map DynaColorBox components to the DOM.
* The colorGrid array must be generated first before DynaBoxes can be mapped,
 * hence why the colorGrid is a higher order component */
declare function Grid(props: {
    clickVariance: number;
    colorGrid: Array<Array<{
        red: number;
        green: number;
        blue: number;
    }>>;
    gridSize: number;
    changeSurroundings: (value: {
        r: number;
        c: number;
    }, [redChange, greenChange, blueChange]: Array<number>) => void;
    rippleTransitionSpeed: number;
}): JSX.Element;
export default Grid;
