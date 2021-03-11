import React from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { setGettingColor, selectGettingColor } from '../redux/colorGridSlice';
import { useSelector, useDispatch } from 'react-redux';
export default function ColorGetter() {
    var dispatch = useDispatch();
    var gettingColor = useSelector(selectGettingColor);
    var retrieveColor = function () {
        axios.get('/api/colorgetter').then(function (data) {
            console.log(data);
        });
    };
    var colorDropper = function () {
        // set gettingColor so that instead of changing the surrounding colors, clicking on a square will get rgb values
        dispatch(setGettingColor());
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
    return (React.createElement(React.Fragment, null,
        React.createElement(Dropdown, { className: 'dropdown' },
            React.createElement(Dropdown.Toggle, { variant: "secondary", className: "dropdown-basic" }, "Get Colors"),
            React.createElement(Dropdown.Menu, null,
                React.createElement(Dropdown.Item, { onClick: function () { return colorDropper(); } }, "Color Dropper")))));
}
// also to implement: local storage for a grid
// storage of grids per user
// navbar to hold options, etc.
