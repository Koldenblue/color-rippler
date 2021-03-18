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
var react_router_dom_1 = require("react-router-dom");
var Jumbotron_1 = __importDefault(require("react-bootstrap/Jumbotron"));
var Container_1 = __importDefault(require("react-bootstrap/Container"));
require("../../index.css");
var Background_1 = __importDefault(require("./Background"));
var ColorGrid_1 = __importDefault(require("../ColorGrid"));
var OptionsForm_1 = __importDefault(require("./OptionsForm"));
var WatercolorCircles_1 = __importDefault(require("./WatercolorCircles"));
var TopBar_1 = __importDefault(require("../TopBar"));
/** Either routes to ColorGrid with default options, or will load up ColorGrid with selected options */
function OptionsPage() {
    var _a = react_1.useState(null), colorGrid = _a[0], setColorGrid = _a[1];
    var _b = react_1.useState(false), validated = _b[0], setValidated = _b[1];
    // things that could be options:
    // algorithm style
    // background color
    // submits options form, stores the options in session storage, then generates a grid with the selected options
    var handleFormSubmit = function (event) {
        event.preventDefault();
        var form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            // console.log("false")
        }
        else {
            // console.log(event.target)
            var maxGridSize = event.target[0].value;
            if (maxGridSize === '') {
                maxGridSize = 20;
            }
            var initialVariance = event.target[1].value;
            if (initialVariance === '') {
                initialVariance = 50;
            }
            var rippleVariance = event.target[2].value;
            if (rippleVariance === '') {
                rippleVariance = 100;
            }
            var rippleSpeed = event.target[3].value;
            if (rippleSpeed === '') {
                rippleSpeed = 100;
            }
            var ripplePropagation = event.target[4].value;
            if (ripplePropagation === '') {
                ripplePropagation = 3;
            }
            var rippleTransitionSpeed = event.target[5].value;
            if (rippleTransitionSpeed === '') {
                rippleTransitionSpeed = 1.5;
            }
            else {
                rippleTransitionSpeed = rippleTransitionSpeed / 1000;
            }
            var initialGrayscale = event.target[6].checked;
            // let grayscaleChange = event.target[7].checked;
            // let autoDrop = event.target[8].checked;
            // console.log(autoDrop)
            var outerShellOnly = event.target[7].checked;
            // store options in session storage for use with the options dropdown generate new grid button
            sessionStorage.setItem('optionsGrid', JSON.stringify({
                outerShellOnly: outerShellOnly,
                initialVariance: initialVariance,
                rippleVariance: rippleVariance,
                maxGridSize: maxGridSize,
                rippleSpeed: rippleSpeed,
                ripplePropagation: ripplePropagation,
                initialGrayscale: initialGrayscale,
                rippleTransitionSpeed: rippleTransitionSpeed
            }));
            setColorGrid(react_1["default"].createElement(ColorGrid_1["default"], { reloadingWithOptions: true, outerShellOnly: outerShellOnly, initialVariance: initialVariance, rippleVariance: rippleVariance, maxGridSize: maxGridSize, rippleSpeed: rippleSpeed, ripplePropagation: ripplePropagation, initialGrayscale: initialGrayscale, 
                // autoDrop={autoDrop}
                rippleTransitionSpeed: rippleTransitionSpeed }));
        }
    };
    if (colorGrid) {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(TopBar_1["default"], null),
            colorGrid));
    }
    else {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Background_1["default"], null),
            react_1["default"].createElement(WatercolorCircles_1["default"], null),
            react_1["default"].createElement(Jumbotron_1["default"], { fluid: true, id: 'options-jumbotron' },
                react_1["default"].createElement(Container_1["default"], { className: 'title-text' },
                    react_1["default"].createElement("h1", { className: 'title-text' }, "Color Rippler"),
                    react_1["default"].createElement("p", { className: 'title-text' }, "Select options below to customize the color ripples!"),
                    react_1["default"].createElement("hr", null),
                    react_1["default"].createElement(react_router_dom_1.Link, { className: 'color-grid-link', to: '/' }, "Go to color grid using default settings"))),
            react_1["default"].createElement(OptionsForm_1["default"], { handleFormSubmit: handleFormSubmit, validated: validated })));
    }
}
exports["default"] = OptionsPage;
