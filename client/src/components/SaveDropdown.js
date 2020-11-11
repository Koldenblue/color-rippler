import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { loggedInUser, selectLoggedInUser } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setColorGrid, selectColorGrid } from '../redux/colorGridSlice';

export default function SaveDropdown(props) {
  const dispatch = useDispatch();
  let userInfo = useSelector(selectLoggedInUser);
  let colorGrid = useSelector(selectColorGrid);

  let styles = {
    dropdown: {
    }
  }
  useEffect(() => {
    console.log(userInfo)
  })

  let saveGrid = (slot) => {
    if (userInfo !== null) {
      Axios.put(`api/save/${userInfo._id}/${slot}`, colorGrid).then(data => {
        // indicate save here
      }).catch((err) => {
        console.error(err);
      })
    }
  }

  return (<>
      <Dropdown >
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Save
      </Dropdown.Toggle>
      <Dropdown.Menu>

      <Dropdown.Item onClick={() => saveGrid(1)}>Slot 1</Dropdown.Item>
      <Dropdown.Item onClick={() => saveGrid(2)}>Slot 2</Dropdown.Item>
      <Dropdown.Item onClick={() => saveGrid(3)}>Slot 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

  </>)
}