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
  let userInfo = useSelector(selectLoggedInUser);
  const [save, setSave] = useState(<></>);
  const [load, setLoad] = useState(<></>);

  useEffect(() => {
    if (userInfo) {
      setSave(<SaveDropdown />)
      setLoad(<LoadDropdown />)
    }
  }, [userInfo])

  return (<>
    <div className='topbar'>
      <OptionsDropdown />
      <ColorGetter />
      <div className='empty-div'></div>
      <ColorChooseIndicator />
      <div className='empty-div'></div>
      {save}
      {load}
      <ShouldLogIn />
    </div>
  </>)
}