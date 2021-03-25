import React, { useEffect, useState } from 'react';
import DynaColorBox from './DynaColorBox';
/** Uses the color grid array of RGB values in order to map DynaColorBox components to the DOM.
* The colorGrid array must be generated first before DynaBoxes can be mapped,
 * hence why the colorGrid is a higher order component */
function Grid(props) {
    var _a = useState(window.innerWidth), width = _a[0], setWidth = _a[1];
    var _b = useState(window.innerHeight), height = _b[0], setHeight = _b[1];
    // resizes the DynaColorBox components based on the window size.
    // Resizing is only allowed every 500 ms.
    var allowResize = true;
    useEffect(function () {
        function handleResize() {
            if (allowResize) {
                allowResize = false;
                setTimeout(function () {
                    setWidth(window.innerWidth);
                    setHeight(window.innerHeight);
                    allowResize = true;
                }, 500);
            }
        }
        window.addEventListener('resize', handleResize);
    }, []);
    // enable to see changes in color grid
    // useEffect(() => {
    //   console.log(props.colorGrid)
    // }, [props.colorGrid])
    // r and c are used to indicate rows and columns in the keys and data
    var r = -1;
    var c = -1;
    // if (Array.isArray(props.colorGrid) && props.colorGrid.length > 0) {
    return (React.createElement(React.Fragment, null, props.colorGrid.map(function (row) {
        r++;
        return (React.createElement("div", { className: 'row', key: r }, row.map(function (box) {
            // reset column to 0 after it reaches max
            {
                if (++c > (props.gridSize - 1)) {
                    c = 0;
                }
            }
            // map a grid of DynaColorBoxes, based on the props.colorGrid array
            return (React.createElement(DynaColorBox, { clickVariance: props.clickVariance, key: "r" + c + "c" + r, "data-value": { r: r, c: c }, red: box.red, green: box.green, blue: box.blue, changeSurroundings: props.changeSurroundings, numColumns: props.gridSize, rippleTransitionSpeed: props.rippleTransitionSpeed, height: height, width: width }));
        })));
    })));
    // } else {
    //   return (<> </>)
    // }
}
export default Grid;
