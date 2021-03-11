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
exports.__esModule = true;
var react_1 = __importStar(require("react"));
function DynaColorBox(props) {
    var _a = react_1.useState(props.clickVariance), variance = _a[0], setVariance = _a[1];
    var _b = react_1.useState(0), opacity = _b[0], setOpacity = _b[1];
    var _c = react_1.useState(Math.floor(Math.random() * 15)), opacityTransition = _c[0], setOpacityTransition = _c[1];
    var _d = react_1.useState(props.rippleTransitionSpeed), colorTransition = _d[0], setColorTransition = _d[1];
    // height of boxes is based on browser window height
    // rounding down so that boxes don't overflow window and cause weird rendering
    var boxHeight = Math.floor(props.height / Number(props.numColumns));
    var boxWidth = Math.floor(props.width / Number(props.numColumns));
    var styles = {
        colorBox: {
            width: boxWidth + 'px',
            height: boxHeight + 'px',
            backgroundColor: "rgb(" + props.red + ", " + props.green + ", " + props.blue + ")",
            opacity: opacity,
            transitionProperty: 'opacity, background-color',
            transitionDuration: opacityTransition + "s, " + colorTransition + "s",
            borderRadius: '20px',
            overflow: 'hidden'
        }
    };
    react_1.useEffect(function () {
        setOpacity(1);
    }, []);
    var plusMinus = [-1, 1]; // plus or minus random color variance
    // generates a random color variance, then propogates to surroundings thru props.changeSurroundings
    var changeColors = function () {
        var redVar = Math.floor(Math.random() * variance);
        var redPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        var greenVar = Math.floor(Math.random() * variance);
        var greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        var blueVar = Math.floor(Math.random() * variance);
        var bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        props.changeSurroundings(props['data-value'], [redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus]);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { style: styles.colorBox, onClick: changeColors })));
}
exports["default"] = DynaColorBox;
