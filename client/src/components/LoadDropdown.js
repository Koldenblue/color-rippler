import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { loggedInUser, selectLoggedInUser } from '../redux/userSlice';
import { setColorGrid, selectColorGrid } from '../redux/colorGridSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function LoadDropdown(props) {
  const dispatch = useDispatch();
  let userInfo = useSelector(selectLoggedInUser);
  let colorGrid = useSelector(selectColorGrid);
  
  let styles = {
    dropdown: {
      // position: 'absolute',
      // zIndex: '9999',
    }
  }

  useEffect(() => {
    //get user every time grid is saved
  }, [])

  let loadGrid = (slot) => {
    if (userInfo !== null) {
      console.log('loading')
      Axios.get(`api/load/${userInfo._id}/${slot}`).then(loadedGrid => {
        if (loadedGrid) {
          console.log(loadedGrid.data)
          dispatch(setColorGrid(loadedGrid.data));
        }
      }).catch((err) => {
        console.error(err);
      })
    }
  }

  return (<>
    <Dropdown >
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Load
      </Dropdown.Toggle>
      <Dropdown.Menu>

        <Dropdown.Item onClick={() => loadGrid(1)}>Slot 1</Dropdown.Item>
        <Dropdown.Item onClick={() => loadGrid(2)}>Slot 2</Dropdown.Item>
        <Dropdown.Item onClick={() => loadGrid(3)}>Slot 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </>)
}