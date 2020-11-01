import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
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
  // algorithm style
  // background color

  // submits options form, stores the options in session storage, then generates a grid with the selected options
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
      // let grayscaleChange = event.target[7].checked;
      // let autoDrop = event.target[8].checked;
      // console.log(autoDrop)
      let outerShellOnly = event.target[7].checked;

      // store options in session storage for use with the options dropdown generate new grid button
      sessionStorage.setItem('optionsGrid', JSON.stringify({
        outerShellOnly: outerShellOnly,
        initialVariance: initialVariance,
        rippleVariance: rippleVariance,
        maxGridSize: maxGridSize,
        rippleSpeed: rippleSpeed,
        ripplePropagation: ripplePropagation,
        initialGrayscale: initialGrayscale,
        rippleTransitionSpeed: rippleTransitionSpeed
      }))

      setColorGrid(
        <ColorGrid
          outerShellOnly={outerShellOnly}
          initialVariance={initialVariance}
          rippleVariance={rippleVariance}
          maxGridSize={maxGridSize}
          rippleSpeed={rippleSpeed}
          ripplePropagation={ripplePropagation}
          initialGrayscale={initialGrayscale}
          // autoDrop={autoDrop}
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
        <Image className='circle1-img' src={require('../../assets/watercolor-circle2.svg')} />
        <Image className='circle3-img' src={require('../../assets/watercolor-circle3.svg')} />
        <Image className='circle2-img' src={require('../../assets/watercolor-circle.svg')} />


        <Jumbotron fluid id='options-jumbotron'>
          <Container className='title-text'>
            <h1 className='title-text'>Color Rippler</h1>
            <p className='title-text'>
              Select options below to customize the color ripples!
            </p>
            <hr></hr>
            <Link className='color-grid-link' to='/'>Go to color grid using default settings</Link>
          </Container>
        </Jumbotron>

        <OptionsForm
          handleFormSubmit={handleFormSubmit}
          validated={validated}
        />
      </>
    )
  }
}
export default OptionsPage;