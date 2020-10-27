import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function OptionsDropdown() {

  let styles = {
    dropdown: {
      position: 'fixed',
      zIndex: '9999'
    }
  }

  let generateNewGrid = (() => {
    window.location.reload()
  })

  return (
    <>
      <Dropdown style={styles.dropdown}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Options
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={generateNewGrid}>Generate New Grid</Dropdown.Item>
          <Dropdown.Item href="/options">Go to Options Page</Dropdown.Item>
          {/* <Dropdown.Item href="#">Save to be implemented</Dropdown.Item>
          <Dropdown.Item href="#">Ripple style, to be implemented</Dropdown.Item> */}

        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}