import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function LoadDropdown(props) {
  let styles = {
    dropdown: {
      // position: 'absolute',
      // zIndex: '9999',
    }
  }

  useEffect(() => {
    //get user every time grid is saved
  }, [])

  let saveGrid = () => {

    Axios.get('api/load/:slot')
  }

  return (<>
    <Dropdown >
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Load
      </Dropdown.Toggle>
      <Dropdown.Menu>

        <Dropdown.Item>Slot 1</Dropdown.Item>
        <Dropdown.Item>Slot 2</Dropdown.Item>
        <Dropdown.Item>Slot 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </>)
}