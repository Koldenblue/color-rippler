import Axios from 'axios';
import React, { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { selectLoggedInUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { selectColorGrid } from '../redux/colorGridSlice';

export default function SaveDropdown() {
  let userInfo: any = useSelector(selectLoggedInUser);
  let colorGrid = useSelector(selectColorGrid);

  useEffect(() => {
    console.log(userInfo)
  })

  /** Calls the api to save a particular color grid to the database.
   * Each color grid will be stored with a slot number, and each user has 3 slots.
   */
  let saveGrid = (slot: number) => {
    if (userInfo !== null) {
      Axios.put(`api/save/${userInfo._id}/${slot}`, colorGrid).then(data => {
        // indicate save here
      }).catch((err) => {
        console.error(err);
      })
    }
  }

  return (<>
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="secondary" className="dropdown-basic">
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