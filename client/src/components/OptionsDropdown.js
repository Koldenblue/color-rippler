import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Redirect, useHistory } from 'react-router-dom';

export default function OptionsDropdown(props) {
  const [redirect, setRedirect] = useState();
  const history = useHistory();

  let generateNewGrid = async () => {
    // Generate a new grid with the selected options by redirecting to appropriate route,
    // if options are stored. Else reload page.
    let options = JSON.parse(sessionStorage.getItem('optionsGrid'));
    if (!options) {
      // await setRedirect(
      //   <Redirect to='/options' />
      // )
      history.push('/options')
      // window.location.reload();
    }
    else {
      // pushing history doesn't seem helpful, since the colorgrid doesn't revert anyway
      await setRedirect(
        <Redirect to='/optionsgrid' />
      )
      window.location.reload();
    }
  }

  // generate default grid
  let generateDefaultGrid = async () => {
    await setRedirect(
      <Redirect to='/' />
    )
    window.location.reload();
  }

  return (
    <>
    {redirect}
      <Dropdown className='dropdown'>
        <Dropdown.Toggle variant="secondary" className="dropdown-basic">
          Options
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={generateNewGrid}>New Grid with Customized Options</Dropdown.Item>
          <Dropdown.Item onClick={generateDefaultGrid}>New Grid with Default Options</Dropdown.Item>
          <Dropdown.Item href="/options">Go to Options Page</Dropdown.Item>
          {/* <Dropdown.Item href="#">Save to be implemented</Dropdown.Item>
          <Dropdown.Item href="#">Ripple style, to be implemented</Dropdown.Item> */}

        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}