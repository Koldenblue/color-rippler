import React, { useEffect, useState } from 'react';
import { loggedInUser, selectLoggedInUser } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function ShouldLogIn() {
  return (<>
    <div className='should-log-in'>
      <a href='/login'>Log in</a> for additional functionality
    </div>
  </>)
}