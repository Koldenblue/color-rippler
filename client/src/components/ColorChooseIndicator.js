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
var Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
var colorGridSlice_1 = require("../redux/colorGridSlice");
var react_redux_1 = require("react-redux");
function ColorChooseIndicator() {
    var _a = react_1.useState(0), opacity = _a[0], setOpacity = _a[1];
    var gettingColor = react_redux_1.useSelector(colorGridSlice_1.selectGettingColor);
    react_1.useEffect(function () {
        gettingColor ? setOpacity(1) : setOpacity(0);
    }, [gettingColor]);
    var styles = {
        chooseIndicator: {
            // left: '42%',
            // position: 'absolute',
            opacity: opacity,
            transition: 'opacity 0.5s'
            // transform: 'translateX(-50%)'
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Dropdown_1["default"], { className: 'dropdown', style: styles.chooseIndicator },
            react_1["default"].createElement(Dropdown_1["default"].Toggle, { disabled: true, variant: "secondary", id: 'chooseIndicator' }, "Select Color Below!"))));
}
exports["default"] = ColorChooseIndicator;
