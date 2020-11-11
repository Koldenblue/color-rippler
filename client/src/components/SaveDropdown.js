import Axios from 'axios';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SaveDropdown(props) {
  let styles = {
    dropdown: {
      // left: '200px'
    }
  }

  let saveGrid = () => {

    Axios.put('api/save', props.colorgrid)
  }

  return (<>
      <Dropdown >
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Save
      </Dropdown.Toggle>
      <Dropdown.Menu>

      <Dropdown.Item>Slot 1</Dropdown.Item>
      <Dropdown.Item>Slot 2</Dropdown.Item>
      <Dropdown.Item>Slot 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

  </>)
}