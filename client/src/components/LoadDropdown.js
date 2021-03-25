import Axios from 'axios';
import React, { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { selectLoggedInUser } from '../redux/userSlice';
import { setColorGrid } from '../redux/colorGridSlice';
import { useSelector, useDispatch } from 'react-redux';
export default function LoadDropdown() {
    var dispatch = useDispatch();
    var userInfo = useSelector(selectLoggedInUser);
    useEffect(function () {
        //get user every time grid is saved
    }, []);
    var loadGrid = function (slot) {
        if (userInfo !== null) {
            console.log('loading');
            Axios.get("api/load/" + userInfo._id + "/" + slot).then(function (loadedGrid) {
                if (loadedGrid) {
                    console.log(loadedGrid.data);
                    if (loadedGrid.data !== null) {
                        dispatch(setColorGrid(loadedGrid.data));
                    }
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Dropdown, { className: 'dropdown' },
            React.createElement(Dropdown.Toggle, { variant: "secondary", className: "dropdown-basic" }, "Load"),
            React.createElement(Dropdown.Menu, null,
                React.createElement(Dropdown.Item, { onClick: function () { return loadGrid(1); } }, "Slot 1"),
                React.createElement(Dropdown.Item, { onClick: function () { return loadGrid(2); } }, "Slot 2"),
                React.createElement(Dropdown.Item, { onClick: function () { return loadGrid(3); } }, "Slot 3")))));
}
