import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loggedInUser, selectLoggedInUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

// the login / logout button changes depending on logged in status
export default function ShouldLogIn() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectLoggedInUser);
  const [loginBtn, setLoginBtn] = useState(<></>);
  const history = useHistory();

  const logout = (): void => {
    Axios.get('/api/logout').then(() => {
      dispatch(loggedInUser(null));
      window.location.reload();
    })
  }

  // change when userInfo changes
  useEffect(() => {
    if (userInfo) {
      setLoginBtn(
        <button 
          className='btn-secondary btn dropdown-basic should-log-in'
          onClick={logout}
        >
          Log out
        </button>
      );
    } else {
      setLoginBtn(
      <button 
        className='btn-secondary btn dropdown-basic should-log-in' 
        onClick={() => history.push('/login')}
      >
        Log in
      </button>);
    }
  }, [userInfo])


  return (<>
    {loginBtn}
  </>)
}