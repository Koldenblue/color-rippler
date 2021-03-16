"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var DynaColorBox_1 = __importDefault(require("./DynaColorBox"));
/** Uses the color grid array of RGB values in order to map DynaColorBox components to the DOM.
* The colorGrid array must be generated first before DynaBoxes can be mapped,
 * hence why the colorGrid is a higher order component */
function Grid(props) {
    var _a = react_1.useState(window.innerWidth), width = _a[0], setWidth = _a[1];
    var _b = react_1.useState(window.innerHeight), height = _b[0], setHeight = _b[1];
    // resizes the DynaColorBox components based on the window size.
    // Resizing is only allowed every 500 ms.
    var allowResize = true;
    react_1.useEffect(function () {
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
    return (react_1["default"].createElement(react_1["default"].Fragment, null, props.colorGrid.map(function (row) {
        r++;
        return (react_1["default"].createElement("div", { className: 'row', key: r }, row.map(function (box) {
            // reset column to 0 after it reaches max
            {
                if (++c > (props.gridSize - 1)) {
                    c = 0;
                }
            }
            // map a grid of DynaColorBoxes, based on the props.colorGrid array
            return (react_1["default"].createElement(DynaColorBox_1["default"], { clickVariance: props.clickVariance, key: "r" + c + "c" + r, "data-value": { r: r, c: c }, red: box.red, green: box.green, blue: box.blue, changeSurroundings: props.changeSurroundings, numColumns: props.gridSize, rippleTransitionSpeed: props.rippleTransitionSpeed, height: height, width: width }));
        })));
    })));
    // } else {
    //   return (<> </>)
    // }
}
exports["default"] = Grid;
