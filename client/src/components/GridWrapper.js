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
var Grid_1 = __importDefault(require("./Grid"));
var colorGridSlice_1 = require("../redux/colorGridSlice");
var colorGridSlice_2 = require("../redux/colorGridSlice");
var react_redux_1 = require("react-redux");
/** Should manage options, auto function, and ripple change functions.
* Should get the initial grid array from a higher order component. */
function GridWrapper(_a) {
    var _b = _a.outerShellOnly, outerShellOnly = _b === void 0 ? false : _b, _c = _a.initialVariance, initialVariance = _c === void 0 ? 50 : _c, _d = _a.rippleVariance, rippleVariance = _d === void 0 ? 100 : _d, _e = _a.maxGridSize, maxGridSize = _e === void 0 ? 20 : _e, _f = _a.rippleSpeed, rippleSpeed = _f === void 0 ? 100 : _f, _g = _a.ripplePropagation, ripplePropagation = _g === void 0 ? 3 : _g, _h = _a.autoDrop, autoDrop = _h === void 0 ? false : _h, _j = _a.rippleTransitionSpeed, rippleTransitionSpeed = _j === void 0 ? 1.5 : _j, _k = _a.initialGrayscale, initialGrayscale = _k === void 0 ? true : _k, _l = _a.grayscaleChange, grayscaleChange = _l === void 0 ? false : _l;
    // const [colorGrid, setColorGrid] = useState([]);
    var _m = react_1.useState(initialVariance), variance = _m[0], setVariance = _m[1];
    var _o = react_1.useState(maxGridSize), gridSize = _o[0], setGridSize = _o[1];
    var _p = react_1.useState(rippleVariance), clickVariance = _p[0], setClickVariance = _p[1];
    var dispatch = react_redux_1.useDispatch();
    var colorGrid = react_redux_1.useSelector(colorGridSlice_1.selectColorGrid);
    var gettingColor = react_redux_1.useSelector(colorGridSlice_2.selectGettingColor);
    // initial random color to be applied to entire grid
    // limit the range so that the variance won't be producing too much black or white by hitting 0 or 255
    var randRed = Math.floor(Math.random() * 256);
    if (randRed < initialVariance) {
        randRed = initialVariance;
    }
    else if (randRed + initialVariance > 255) {
        randRed = 255 - initialVariance;
    }
    var randGreen;
    var randBlue;
    if (initialGrayscale) {
        randGreen = randRed;
        randBlue = randRed;
    }
    else {
        randGreen = Math.floor(Math.random() * 256);
        randBlue = Math.floor(Math.random() * 256);
    }
    // determines whether to add or subtract variance from initial color
    var plusMinus = [-1, 1];
    // background color to be implemented, but doing it this way rerenders it every time grid changes
    // let styles = {
    //   background: {
    //     backgroundColor: `rgb(${randRed}, ${randGreen}, ${randBlue})`
    //   }
    // }
    // initializes the color grid by generating random color variance, with the random RGB values above as starting points.
    react_1.useEffect(function () {
        var newGrid = [];
        for (var i = 0; i < gridSize; i++) {
            newGrid.push([]);
            for (var j = 0; j < gridSize; j++) {
                var redVar = Math.floor(Math.random() * variance);
                var redPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
                var blueVar = Math.floor(Math.random() * variance);
                var bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)];
                var greenVar = Math.floor(Math.random() * variance);
                var greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
                var newRed = randRed + redVar * redPlusMinus;
                var newGreen = void 0;
                var newBlue = void 0;
                if (initialGrayscale) {
                    newGreen = newRed;
                    newBlue = newRed;
                }
                else {
                    newGreen = randGreen + greenVar * greenPlusMinus;
                    newBlue = randBlue + blueVar * bluePlusMinus;
                }
                newGrid[i].push({
                    red: newRed > 255 ? 255 : (newRed < 0 ? 0 : newRed),
                    green: newGreen > 255 ? 255 : (newGreen < 0 ? 0 : newGreen),
                    blue: newBlue > 255 ? 255 : (newBlue < 0 ? 0 : newBlue)
                });
            }
        }
        dispatch(colorGridSlice_1.setColorGrid(newGrid));
    }, []);
    // auto function. automatically selects a random row and column to execute changeSurroundings function for.
    // useEffect(() => {
    //   // console.log("checking auto")
    //   // console.log(autoDrop)
    //   // console.log(colorGrid.length)
    //   function auto() {
    //     if (autoDrop && colorGrid.length > 0) {
    //       console.log("start auto")
    //       // autoDrop = false;
    //       setTimeout(() => {
    //         console.log(colorGrid)
    //         console.log("auto")
    //         let randRow = Math.floor(Math.random() * gridSize);
    //         let randCol = Math.floor(Math.random() * gridSize);
    //         let redVar = Math.floor(Math.random() * clickVariance)
    //         let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
    //         let greenVar = Math.floor(Math.random() * clickVariance)
    //         let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
    //         let blueVar = Math.floor(Math.random() * clickVariance)
    //         let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)]
    //         changeSurroundings({r: randRow, c: randCol}, [redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus])
    //         // setColorGrid(colorGrid)
    //       }, rippleSpeed * ripplePropagation * 10)
    //     }
    //   }
    //   auto()
    // },[colorGrid.length])
    /** Accepts a 2D array and initial row/column value, containing rgb objects. Propogates rgb changes one array shell at a time.
     * @param {Array} grids A 2d array, consisting of an outer array of rows, and inner arrays corresponding to columns, with each row/col having an rgb object
     * @param {Number} maxDelta The maximum propogation of color change
     * @param {Number} startDelta The innermost shell in the array that will be changed
     * @param {Number} row The starting row, corresponding to the outermost array
     * @param {Number} col The starting column, corresponding to the inner arrays
     * @param {Number} redChange The amount that each red value in the rgb objects will be changed. Similar for greenChange and blueChange */
    var changeColor = function (grids, maxDelta, startDelta, row, col, redChange, greenChange, blueChange) {
        if (startDelta === void 0) { startDelta = 1; }
        // mapping to new grid to create a copy that doesn't have same reference
        var currentGrid = grids.map(function (a) { return a.map(function (b) { return b; }); });
        setTimeout(function () {
            // ranges is the row and column numbers of boxes to be changed - ex. [-2, -1, 0, 1, 2]
            var ranges = [0];
            for (var i = 1; i <= startDelta; i++) {
                ranges.unshift(-i);
                ranges.push(i);
            }
            ;
            // for each row/col in the range, return a new value in the outermost shell
            // the outermost shell will always have at least one row or column equal to the absolute value of the max range
            ranges.forEach(function (a) {
                return (
                // ranges is originally a 1 dimensional array. This is turning ranges into a 2D array of dimensions equal to max range,
                // by associating each 'a' value with another array of 'b' values
                ranges.forEach(function (b) {
                    // only change the current outermost shell:
                    if (Math.abs(b) === startDelta || Math.abs(a) === startDelta) {
                        try {
                            var newRed = currentGrid[a + row][b + col].red + redChange;
                            var newGreen = currentGrid[a + row][b + col].green + greenChange;
                            var newBlue = currentGrid[a + row][b + col].blue + blueChange;
                            currentGrid[a + row][b + col] = {
                                red: newRed > 255 ? 255 : (newRed < 0 ? 0 : newRed),
                                green: newGreen > 255 ? 255 : (newGreen < 0 ? 0 : newGreen),
                                blue: newBlue > 255 ? 255 : (newBlue < 0 ? 0 : newBlue)
                            };
                        }
                        catch (TypeError) {
                            // this expected error will happen if ripples go out of bounds
                        }
                    }
                }));
            });
            dispatch(colorGridSlice_1.setColorGrid(currentGrid));
            // can set the grids param to the original grids in order to only save changes to the outermost shell, instead of all shells, since the original grid has not changed
            // remember we are working with currentGrid, which is a copy of the original grids.
            if (outerShellOnly) {
                startDelta < maxDelta && changeColor(grids, maxDelta, startDelta + 1, row, col, redChange, greenChange, blueChange);
                // or set to currentGrid to change all shells
            }
            else {
                startDelta < maxDelta && changeColor(currentGrid, maxDelta, startDelta + 1, row, col, redChange, greenChange, blueChange);
            }
        }, rippleSpeed);
    };
    /** function passed to color boxes, triggered on click.
    * Gets the row and column of the clicked box, changes its color,
    * then passes the color changes to the changeColor() algorithm in order to propagate ripples.
    * @param {object} value is from the data-value attribute on the box, or props.data-value */
    var changeSurroundings = function (value, _a) {
        var redChange = _a[0], greenChange = _a[1], blueChange = _a[2];
        var currentRow = value.r;
        var currentCol = value.c;
        // first, if gettingColor is active, then instead get the rgb values for the current square.
        if (gettingColor) {
            console.log('getting color is true');
            // set back to false
            dispatch(colorGridSlice_2.setGettingColor());
            console.log(gettingColor);
            var pickedColor = { r: null, g: null, b: null };
            console.log(colorGrid[currentRow][currentCol]);
        }
        // mapping to new grid to create a copy that doesn't have same reference
        else if (colorGrid.length > 0) {
            var newGrid = JSON.stringify(colorGrid); // stringifying then parsing avoids having same reference in memory
            newGrid = JSON.parse(newGrid);
            newGrid[currentRow].splice(currentCol, 1, {
                red: newGrid[currentRow][currentCol].red + redChange,
                green: newGrid[currentRow][currentCol].green + greenChange,
                blue: newGrid[currentRow][currentCol].blue + blueChange
            });
            // console.log("new Grid", newGrid)
            changeColor(newGrid, ripplePropagation, 1, currentRow, currentCol, redChange, greenChange, blueChange);
            dispatch(colorGridSlice_1.setColorGrid(newGrid));
        }
    };
    return (react_1["default"].createElement("div", { className: 'container-fluid' },
        react_1["default"].createElement(Grid_1["default"]
        // appropriate options are passed down to lower components
        , { 
            // appropriate options are passed down to lower components
            clickVariance: clickVariance, colorGrid: colorGrid, gridSize: gridSize, changeSurroundings: changeSurroundings, rippleTransitionSpeed: rippleTransitionSpeed })));
}
exports["default"] = GridWrapper;
