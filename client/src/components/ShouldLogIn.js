import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loggedInUser, selectLoggedInUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
// the login / logout button changes depending on logged in status
export default function ShouldLogIn() {
    var dispatch = useDispatch();
    var userInfo = useSelector(selectLoggedInUser);
    var _a = useState(React.createElement(React.Fragment, null)), loginBtn = _a[0], setLoginBtn = _a[1];
    var history = useHistory();
    var logout = function () {
        Axios.get('/api/logout').then(function () {
            dispatch(loggedInUser(null));
            window.location.reload();
        });
    };
    // change when userInfo changes
    useEffect(function () {
        if (userInfo) {
            setLoginBtn(React.createElement("button", { className: 'btn-secondary btn dropdown-basic should-log-in', onClick: logout }, "Log out"));
        }
        else {
            setLoginBtn(React.createElement("button", { className: 'btn-secondary btn dropdown-basic should-log-in', onClick: function () { return history.push('/login'); } }, "Log in"));
        }
    }, [userInfo]);
    return (React.createElement(React.Fragment, null, loginBtn));
}
