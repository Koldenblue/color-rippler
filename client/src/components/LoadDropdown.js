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
var axios_1 = __importDefault(require("axios"));
var react_1 = __importStar(require("react"));
var Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
var userSlice_1 = require("../redux/userSlice");
var colorGridSlice_1 = require("../redux/colorGridSlice");
var react_redux_1 = require("react-redux");
function LoadDropdown() {
    var dispatch = react_redux_1.useDispatch();
    var userInfo = react_redux_1.useSelector(userSlice_1.selectLoggedInUser);
    react_1.useEffect(function () {
        //get user every time grid is saved
    }, []);
    var loadGrid = function (slot) {
        if (userInfo !== null) {
            console.log('loading');
            axios_1["default"].get("api/load/" + userInfo._id + "/" + slot).then(function (loadedGrid) {
                if (loadedGrid) {
                    console.log(loadedGrid.data);
                    if (loadedGrid.data !== null) {
                        dispatch(colorGridSlice_1.setColorGrid(loadedGrid.data));
                    }
                }
            })["catch"](function (err) {
                console.error(err);
            });
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Dropdown_1["default"], { className: 'dropdown' },
            react_1["default"].createElement(Dropdown_1["default"].Toggle, { variant: "secondary", className: "dropdown-basic" }, "Load"),
            react_1["default"].createElement(Dropdown_1["default"].Menu, null,
                react_1["default"].createElement(Dropdown_1["default"].Item, { onClick: function () { return loadGrid(1); } }, "Slot 1"),
                react_1["default"].createElement(Dropdown_1["default"].Item, { onClick: function () { return loadGrid(2); } }, "Slot 2"),
                react_1["default"].createElement(Dropdown_1["default"].Item, { onClick: function () { return loadGrid(3); } }, "Slot 3")))));
}
exports["default"] = LoadDropdown;
