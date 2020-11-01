import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Redirect } from 'react-router-dom';

export default function OptionsDropdown(props) {
  const [redirect, setRedirect] = useState();

  let styles = {
    dropdown: {
      position: 'fixed',
      zIndex: '9999'
    }
  }

  let generateNewGrid = async () => {
    // Generate a new grid with the selected options by redirecting to appropriate route,
    // if options are stored. Else reload page.
    let options = JSON.parse(sessionStorage.getItem('optionsGrid'));
    if (!options) {
      await setRedirect(
        <Redirect to='/options' />
      )
      window.location.reload();
    }
    else {
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
      <Dropdown style={styles.dropdown}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Options
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={generateNewGrid}>Generate Grid with Customized Options</Dropdown.Item>
          <Dropdown.Item onClick={generateDefaultGrid}>Generate Grid with Default Options</Dropdown.Item>
          <Dropdown.Item href="/options">Go to Options Page</Dropdown.Item>
          {/* <Dropdown.Item href="#">Save to be implemented</Dropdown.Item>
          <Dropdown.Item href="#">Ripple style, to be implemented</Dropdown.Item> */}

        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}