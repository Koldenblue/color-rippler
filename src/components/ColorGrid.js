import React from 'react';
import GridWrapper from './GridWrapper';

function ColorGrid(props) {


  return(
    <GridWrapper 
      outerShellOnly={props.outerShellOnly}
      initialVariance={props.initialVariance} 
      rippleVariance={props.rippleVariance}
      maxGridSize={props.maxGridSize}
      rippleSpeed={props.rippleSpeed} 
      ripplePropogation={props.ripplePropogation}
      autoDrop={props.autoDrop}
      rippleTransitionSpeed={props.rippleTransitionSpeed}

      // grayscale={props.grayscale}
    />
  )
}

export default ColorGrid;