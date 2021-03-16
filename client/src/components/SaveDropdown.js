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
var react_redux_1 = require("react-redux");
var colorGridSlice_1 = require("../redux/colorGridSlice");
function SaveDropdown() {
    var userInfo = react_redux_1.useSelector(userSlice_1.selectLoggedInUser);
    var colorGrid = react_redux_1.useSelector(colorGridSlice_1.selectColorGrid);
    react_1.useEffect(function () {
        console.log(userInfo);
    });
    /** Calls the api to save a particular color grid to the database.
     * Each color grid will be stored with a slot number, and each user has 3 slots.
     */
    var saveGrid = function (slot) {
        if (userInfo !== null) {
            axios_1["default"].put("api/save/" + userInfo._id + "/" + slot, colorGrid).then(function (data) {
                // indicate save here
            })["catch"](function (err) {
                console.error(err);
            });
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Dropdown_1["default"], { className: 'dropdown' },
            react_1["default"].createElement(Dropdown_1["default"].Toggle, { variant: "secondary", className: "dropdown-basic" }, "Save"),
            react_1["default"].createElement(Dropdown_1["default"].Menu, null,
                react_1["default"].createElement(Dropdown_1["default"].Item, { onClick: function () { return saveGrid(1); } }, "Slot 1"),
                react_1["default"].createElement(Dropdown_1["default"].Item, { onClick: function () { return saveGrid(2); } }, "Slot 2"),
                react_1["default"].createElement(Dropdown_1["default"].Item, { onClick: function () { return saveGrid(3); } }, "Slot 3")))));
}
exports["default"] = SaveDropdown;
