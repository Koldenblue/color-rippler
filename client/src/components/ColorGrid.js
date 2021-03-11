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
var GridWrapper_1 = __importDefault(require("./GridWrapper"));
var react_router_dom_1 = require("react-router-dom");
/** highest-order component for ColorGrid. The grid array generation should be in this function,
 * since the array needs to be generated in order for all other components to operate.
 * For example, the ColorGrid array needs to be in place first, before the autoDrop works properly,
 * or before the DynaColorBox components can be mapped. */
function ColorGrid(props) {
    var _a = react_1.useState(react_1["default"].createElement(react_1["default"].Fragment, null)), grid = _a[0], setGrid = _a[1];
    var history = react_router_dom_1.useHistory();
    // disallow scroll bar when the grid is on the page (cuz it messes up margins)
    react_1.useEffect(function () {
        document.body.classList.add('no-scroll');
        return function () {
            document.body.classList.remove('no-scroll');
        };
    }, []);
    // if at the /optionsgrid route, the custom options here will be loaded from session storage
    react_1.useEffect(function () {
        if (props.reloadingWithOptions) {
            var options = sessionStorage.getItem('optionsGrid');
            if (!options) {
                history.push('/options');
            }
            else {
                options = JSON.parse(options);
                setGrid(react_1["default"].createElement(GridWrapper_1["default"], { outerShellOnly: options.outerShellOnly, initialVariance: options.initialVariance, rippleVariance: options.rippleVariance, maxGridSize: options.maxGridSize, rippleSpeed: options.rippleSpeed, ripplePropagation: options.ripplePropagation, initialGrayscale: options.initialGrayscale, rippleTransitionSpeed: options.rippleTransitionSpeed }));
            }
        }
    }, []);
    if (props.reloadingWithOptions) {
        return (react_1["default"].createElement(react_1["default"].Fragment, null, grid));
    }
    else {
        return (react_1["default"].createElement(GridWrapper_1["default"]
        // options. These have default values if not entered.
        , { 
            // options. These have default values if not entered.
            outerShellOnly: props.outerShellOnly, initialVariance: props.initialVariance, rippleVariance: props.rippleVariance, maxGridSize: props.maxGridSize, rippleSpeed: props.rippleSpeed, ripplePropagation: props.ripplePropagation, autoDrop: props.autoDrop, rippleTransitionSpeed: props.rippleTransitionSpeed, initialGrayscale: props.initialGrayscale, grayscaleChange: props.grayscaleChange }));
    }
}
exports["default"] = ColorGrid;
