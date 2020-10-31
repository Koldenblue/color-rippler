import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../../index.css'
import Background from "../Background"
import ColorGrid from '../ColorGrid';
import OptionsDropdown from '../OptionsDropdown';
import OptionsForm from './OptionsForm';

/** Either routes to ColorGrid with default options, or will load up ColorGrid with selected options */
function OptionsPage() {
  const [colorGrid, setColorGrid] = useState()
  const [validated, setValidated] = useState(false);


  // things that could be options:
  // grayscale
  // color variance
  // outer shell change only
  // algorithm style
  // background color
  // grid size

  let handleShellSwitch = () => {
    // try {
    //   let isChecked = document.getElementById('outer-shell-switch').checked
    //   setOuterShellOnly(isChecked)
    //   console.log(outerShellOnly)
    // } catch (err) {
    //   console.log(err)
    //   console.log(outerShellOnly)
    // }
  }

  let generateColorGrid = () => {

  }

  let handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("false")
    }

    else {
      console.log(event.target)
      let maxGridSize = event.target[0].value;
      if (maxGridSize === '') {
        maxGridSize = 20;
      }
      let initialVariance = event.target[1].value;
      if (initialVariance === '') {
        initialVariance = 50;
      }
      let rippleVariance = event.target[2].value;
      if (rippleVariance === '') {
        rippleVariance = 100;
      }
      let rippleSpeed = event.target[3].value;
      if (rippleSpeed === '') {
        rippleSpeed = 100;
      }
      let ripplePropagation = event.target[4].value;
      if (ripplePropagation === '') {
        ripplePropagation = 5;
      }
      let rippleTransitionSpeed = event.target[5].value;
      console.log(rippleTransitionSpeed)
      if (rippleTransitionSpeed === '') {
        rippleTransitionSpeed = 1.5
      }
      else {
        rippleTransitionSpeed = rippleTransitionSpeed / 1000;
      }
      let initialGrayscale = event.target[6].checked;
      let grayscaleChange = event.target[7].checked;
      let autoDrop = event.target[8].checked;
      console.log(autoDrop)
      let outerShellOnly = event.target[9].checked;

      setColorGrid(
        <ColorGrid
          outerShellOnly={outerShellOnly}
          initialVariance={initialVariance}
          rippleVariance={rippleVariance}
          maxGridSize={maxGridSize}
          rippleSpeed={rippleSpeed}
          ripplePropagation={ripplePropagation}
          autoDrop={autoDrop}
          rippleTransitionSpeed={rippleTransitionSpeed}
        />
      )
    }
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
              Page is still being improved!
            </p>
        <Link className='color-grid-link' to='/'>Click to go to color grid using default settings</Link>
          </Container>
        </Jumbotron>


      <OptionsForm 
        handleFormSubmit={handleFormSubmit}
        // handleShellSwitch={handleShellSwitch}
        validated={validated}
      />

        {/* <button onClick={generateColorGrid}>Generate a new color grid with selected options</button> */}
      </>
    )
  }
}
export default OptionsPage;