import { __awaiter, __generator } from "tslib";
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Redirect, useHistory } from 'react-router-dom';
export default function OptionsDropdown() {
    var _this = this;
    var _a = useState(React.createElement(React.Fragment, null)), redirect = _a[0], setRedirect = _a[1];
    var history = useHistory();
    var generateNewGrid = function () { return __awaiter(_this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = sessionStorage.getItem('optionsGrid');
                    if (!!options) return [3 /*break*/, 1];
                    // await setRedirect(
                    //   <Redirect to='/options' />
                    // )
                    history.push('/options');
                    return [3 /*break*/, 3];
                case 1:
                    options = JSON.parse(options);
                    // pushing history doesn't seem helpful, since the colorgrid doesn't revert anyway
                    return [4 /*yield*/, setRedirect(React.createElement(Redirect, { to: '/optionsgrid' }))];
                case 2:
                    // pushing history doesn't seem helpful, since the colorgrid doesn't revert anyway
                    _a.sent();
                    window.location.reload();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // generate default grid
    var generateDefaultGrid = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setRedirect(React.createElement(Redirect, { to: '/' }))];
                case 1:
                    _a.sent();
                    window.location.reload();
                    return [2 /*return*/];
            }
        });
    }); };
    console.log('he');
    return (React.createElement(React.Fragment, null,
        redirect,
        React.createElement(Dropdown, { className: 'dropdown' },
            React.createElement(Dropdown.Toggle, { variant: "secondary", className: "dropdown-basic" }, "Options"),
            React.createElement(Dropdown.Menu, null,
                React.createElement(Dropdown.Item, { onClick: generateNewGrid }, "New Grid with Customized Options"),
                React.createElement(Dropdown.Item, { onClick: generateDefaultGrid }, "New Grid with Default Options"),
                React.createElement(Dropdown.Item, { href: "/options" }, "Go to Options Page")))));
}
