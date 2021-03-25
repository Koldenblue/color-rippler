import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { selectGettingColor } from '../redux/colorGridSlice';
import { useSelector } from 'react-redux';
export default function ColorChooseIndicator() {
    var _a = useState(0), opacity = _a[0], setOpacity = _a[1];
    var gettingColor = useSelector(selectGettingColor);
    useEffect(function () {
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
    return (React.createElement(React.Fragment, null,
        React.createElement(Dropdown, { className: 'dropdown', style: styles.chooseIndicator },
            React.createElement(Dropdown.Toggle, { disabled: true, variant: "secondary", id: 'chooseIndicator' }, "Select Color Below!"))));
}
