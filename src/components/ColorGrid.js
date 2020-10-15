import React from 'react';
import GridWrapper from './GridWrapper';

/** highest-order component for ColorGrid. The grid array generation should be in this function,
 * since the array needs to be generated in order for all other components to operate.
 * For example, the ColorGrid array needs to be in place first, before the autoDrop works properly,
 * or before the DynaColorBox components can be mapped. */
function ColorGrid(props) {

  return(
    <GridWrapper 
      // options. These have default values if not entered.
      outerShellOnly={props.outerShellOnly}
      initialVariance={props.initialVariance} 
      rippleVariance={props.rippleVariance}
      maxGridSize={props.maxGridSize}
      rippleSpeed={props.rippleSpeed} 
      ripplePropogation={props.ripplePropogation}
      autoDrop={props.autoDrop}
      rippleTransitionSpeed={props.rippleTransitionSpeed}
      grayscale={props.grayscale}
    />
  )
}

export default ColorGrid;