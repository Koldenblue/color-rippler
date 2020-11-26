import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { setGettingColor, selectGettingColor } from '../redux/colorGridSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function ColorChooseIndicator() {
  const [opacity, setOpacity] = useState(0);
  let gettingColor = useSelector(selectGettingColor);

  useEffect(() => {
    gettingColor ? setOpacity(1) : setOpacity (0);
  }, [gettingColor])

  let styles = {
    chooseIndicator: {
      left: '42%',
      position: 'absolute',
      opacity: opacity,
      transition: 'opacity 0.5s'
      // transform: 'translateX(-50%)'
    }
  }

  return (<>
    <Dropdown disabled className='dropdown' style={styles.chooseIndicator}>
      <Dropdown.Toggle disabled variant="secondary" id='chooseIndicator'>
       Select a Color Below!
      </Dropdown.Toggle>
    </Dropdown>
  </>)
}