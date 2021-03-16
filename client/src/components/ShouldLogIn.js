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
var userSlice_1 = require("../redux/userSlice");
var react_redux_1 = require("react-redux");
var axios_1 = __importDefault(require("axios"));
// the login / logout button changes depending on logged in status
function ShouldLogIn() {
    var dispatch = react_redux_1.useDispatch();
    var userInfo = react_redux_1.useSelector(userSlice_1.selectLoggedInUser);
    var _a = react_1.useState(react_1["default"].createElement(react_1["default"].Fragment, null)), loginBtn = _a[0], setLoginBtn = _a[1];
    var history = react_router_dom_1.useHistory();
    var logout = function () {
        axios_1["default"].get('/api/logout').then(function () {
            dispatch(userSlice_1.loggedInUser(null));
            window.location.reload();
        });
    };
    // change when userInfo changes
    react_1.useEffect(function () {
        if (userInfo) {
            setLoginBtn(react_1["default"].createElement("button", { className: 'btn-secondary btn dropdown-basic should-log-in', onClick: logout }, "Log out"));
        }
        else {
            setLoginBtn(react_1["default"].createElement("button", { className: 'btn-secondary btn dropdown-basic should-log-in', onClick: function () { return history.push('/login'); } }, "Log in"));
        }
    }, [userInfo]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, loginBtn));
}
exports["default"] = ShouldLogIn;
