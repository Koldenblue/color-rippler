"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var axios_1 = __importDefault(require("axios"));
var Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
var colorGridSlice_1 = require("../redux/colorGridSlice");
var react_redux_1 = require("react-redux");
function ColorGetter() {
    var dispatch = react_redux_1.useDispatch();
    var gettingColor = react_redux_1.useSelector(colorGridSlice_1.selectGettingColor);
    var retrieveColor = function () {
        axios_1["default"].get('/api/colorgetter').then(function (data) {
            console.log(data);
        });
    };
    var colorDropper = function () {
        // set gettingColor so that instead of changing the surrounding colors, clicking on a square will get rgb values
        dispatch(colorGridSlice_1.setGettingColor());
        console.log('color dropper');
        console.log(gettingColor);
    };
    // to implement: set a flag for 'picking a color', which is activated by selecting the appropriate option in the dropdown.
    // when flag is set, clicking on a color will not trigger the changeSurroundings function
    // instead it will make a call to the /api/colorgetter route
    // the route will make an ajax call to the color api, with the rgb values
    // finally, the returned values from the api can be displayed
    // the display can possibly be in a navbar of some sort? to be implemented
    // perhaps the color grid should be put into a container-fluid rather than the entire window
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Dropdown_1["default"], { className: 'dropdown' },
            react_1["default"].createElement(Dropdown_1["default"].Toggle, { variant: "secondary", className: "dropdown-basic" }, "Get Colors"),
            react_1["default"].createElement(Dropdown_1["default"].Menu, null,
                react_1["default"].createElement(Dropdown_1["default"].Item, { onClick: function () { return colorDropper(); } }, "Color Dropper")))));
}
exports["default"] = ColorGetter;
// also to implement: local storage for a grid
// storage of grids per user
// navbar to hold options, etc.
