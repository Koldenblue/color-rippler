import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../../index.css'
import Background from "./Background"
import ColorGrid from '../ColorGrid';
import OptionsForm from './OptionsForm';
import WatercolorCircles from './WatercolorCircles';
import TopBar from '../TopBar';

/** Either routes to ColorGrid with default options, or will load up ColorGrid with selected options */
function OptionsPage() {
  const [colorGrid, setColorGrid] = useState<any>(null)
  const [validated, setValidated] = useState<boolean>(false);

  // things that could be options:
  // algorithm style
  // background color

  // submits options form, stores the options in session storage, then generates a grid with the selected options
  let handleFormSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      // console.log("false")
    }

    else {
      // console.log(event.target)
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
        ripplePropagation = 3;
      }
      let rippleTransitionSpeed = event.target[5].value;
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
          reloadingWithOptions={true}
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
        <TopBar />
        {colorGrid}
      </>
    )
  }
  else {
    return (
      <>
        <Background />
        <WatercolorCircles />

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