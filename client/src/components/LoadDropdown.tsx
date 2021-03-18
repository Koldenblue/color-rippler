import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { selectLoggedInUser } from '../redux/userSlice';
import { setColorGrid } from '../redux/colorGridSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function LoadDropdown() {
  const dispatch = useDispatch();
  let userInfo: any = useSelector(selectLoggedInUser);


  useEffect(() => {
    //get user every time grid is saved
  }, [])

  let loadGrid = (slot: number): void => {
    if (userInfo !== null) {
      console.log('loading')
      Axios.get(`api/load/${userInfo._id}/${slot}`).then(loadedGrid => {
        if (loadedGrid) {
          console.log(loadedGrid.data)
          if (loadedGrid.data !== null) {
            dispatch(setColorGrid(loadedGrid.data));
          }
        }
      }).catch((err) => {
        console.error(err);
      })
    }
  }

  return (<>
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="secondary" className="dropdown-basic">
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