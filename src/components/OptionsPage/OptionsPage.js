import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../../index.css'
import Background from "../Background"
import ColorGrid from '../ColorGrid';
import OptionsDropdown from '../OptionsDropdown';
import OptionsForm from './OptionsForm';

function OptionsPage() {
  const [outerShellOnly, setOuterShellOnly] = useState(false)
  const [colorGrid, setColorGrid] = useState()
  // things that could be options:
  // grayscale
  // color variance
  // outer shell change only
  // algorithm style
  // background color
  // grid size

  let handleShellSwitch = () => {
    try {
      let isChecked = document.getElementById('outer-shell-switch').checked
      setOuterShellOnly(isChecked)
      console.log(outerShellOnly)
    } catch (err) {
      console.log(err)
      console.log(outerShellOnly)
    }
  }

  let generateColorGrid = () => {
    setColorGrid(
      <ColorGrid
        outerShellOnly={outerShellOnly}
      />
    )
  }

  let handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    console.log(event.target[0].value)
    console.log(event.target[1].checked);
  }

  if (colorGrid) {
    return (
      <>
        <OptionsDropdown />
        {colorGrid}
      </>
    )
  }
  else {
    return (
      <>
        <Background />
        <Jumbotron fluid id='options-jumbotron'>
          <Container>
            <h1>Options</h1>
            <p>
              Page not fully functional, under construction!
            </p>
          </Container>
        </Jumbotron>

        <Link className='color-grid-link' to='/'>Click to go to color grid using default settings</Link>

      <OptionsForm 
        handleFormSubmit={handleFormSubmit}
        handleShellSwitch={handleShellSwitch}
      />

        <button onClick={generateColorGrid}>Generate a new color grid with selected options</button>
      </>
    )
  }
}
export default OptionsPage;