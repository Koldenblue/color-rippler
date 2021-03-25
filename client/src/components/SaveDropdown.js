import Axios from 'axios';
import React, { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { selectLoggedInUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { selectColorGrid } from '../redux/colorGridSlice';
export default function SaveDropdown() {
    var userInfo = useSelector(selectLoggedInUser);
    var colorGrid = useSelector(selectColorGrid);
    useEffect(function () {
        console.log(userInfo);
    });
    /** Calls the api to save a particular color grid to the database.
     * Each color grid will be stored with a slot number, and each user has 3 slots.
     */
    var saveGrid = function (slot) {
        if (userInfo !== null) {
            Axios.put("api/save/" + userInfo._id + "/" + slot, colorGrid).then(function (data) {
                // indicate save here
            }).catch(function (err) {
                console.error(err);
            });
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Dropdown, { className: 'dropdown' },
            React.createElement(Dropdown.Toggle, { variant: "secondary", className: "dropdown-basic" }, "Save"),
            React.createElement(Dropdown.Menu, null,
                React.createElement(Dropdown.Item, { onClick: function () { return saveGrid(1); } }, "Slot 1"),
                React.createElement(Dropdown.Item, { onClick: function () { return saveGrid(2); } }, "Slot 2"),
                React.createElement(Dropdown.Item, { onClick: function () { return saveGrid(3); } }, "Slot 3")))));
}
