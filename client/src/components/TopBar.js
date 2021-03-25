import React, { useEffect, useState } from 'react';
import LoadDropdown from './LoadDropdown';
import OptionsDropdown from './OptionsDropdown';
import SaveDropdown from './SaveDropdown';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../redux/userSlice';
import ColorGetter from './ColorGetter';
import ColorChooseIndicator from './ColorChooseIndicator';
import ShouldLogIn from './ShouldLogIn';
export default function TopBar() {
    var userInfo = useSelector(selectLoggedInUser);
    var _a = useState(React.createElement(React.Fragment, null)), save = _a[0], setSave = _a[1];
    var _b = useState(React.createElement(React.Fragment, null)), load = _b[0], setLoad = _b[1];
    useEffect(function () {
        if (userInfo) {
            setSave(React.createElement(SaveDropdown, null));
            setLoad(React.createElement(LoadDropdown, null));
        }
    }, [userInfo]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'topbar' },
            React.createElement(OptionsDropdown, null),
            React.createElement(ColorGetter, null),
            React.createElement("div", { className: 'empty-div' }),
            React.createElement(ColorChooseIndicator, null),
            React.createElement("div", { className: 'empty-div' }),
            save,
            load,
            React.createElement(ShouldLogIn, null))));
}
