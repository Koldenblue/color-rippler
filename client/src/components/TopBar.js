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
var LoadDropdown_1 = __importDefault(require("./LoadDropdown"));
var OptionsDropdown_1 = __importDefault(require("./OptionsDropdown"));
var SaveDropdown_1 = __importDefault(require("./SaveDropdown"));
var react_redux_1 = require("react-redux");
var userSlice_1 = require("../redux/userSlice");
var ColorGetter_1 = __importDefault(require("./ColorGetter"));
var ColorChooseIndicator_1 = __importDefault(require("./ColorChooseIndicator"));
var ShouldLogIn_1 = __importDefault(require("./ShouldLogIn"));
function TopBar() {
    var userInfo = react_redux_1.useSelector(userSlice_1.selectLoggedInUser);
    var _a = react_1.useState(react_1["default"].createElement(react_1["default"].Fragment, null)), save = _a[0], setSave = _a[1];
    var _b = react_1.useState(react_1["default"].createElement(react_1["default"].Fragment, null)), load = _b[0], setLoad = _b[1];
    react_1.useEffect(function () {
        if (userInfo) {
            setSave(react_1["default"].createElement(SaveDropdown_1["default"], null));
            setLoad(react_1["default"].createElement(LoadDropdown_1["default"], null));
        }
    }, [userInfo]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'topbar' },
            react_1["default"].createElement(OptionsDropdown_1["default"], null),
            react_1["default"].createElement(ColorGetter_1["default"], null),
            react_1["default"].createElement("div", { className: 'empty-div' }),
            react_1["default"].createElement(ColorChooseIndicator_1["default"], null),
            react_1["default"].createElement("div", { className: 'empty-div' }),
            save,
            load,
            react_1["default"].createElement(ShouldLogIn_1["default"], null))));
}
exports["default"] = TopBar;
