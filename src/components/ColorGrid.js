import React, {useEffect} from 'react';
import GridWrapper from './GridWrapper';

/** highest-order component for ColorGrid. The grid array generation should be in this function,
 * since the array needs to be generated in order for all other components to operate.
 * For example, the ColorGrid array needs to be in place first, before the autoDrop works properly,
 * or before the DynaColorBox components can be mapped. */
function ColorGrid(props) {

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return() => {
      document.body.classList.remove('no-scroll');
    }
  },[])


  if (props.reloadingWithOptions) {
    console.log('reloading with options');
    return(
      <>
      <p>hi</p>
      </>
    )
  }
  else {
    return(
      <GridWrapper 
        // options. These have default values if not entered.
        outerShellOnly={props.outerShellOnly}
        initialVariance={props.initialVariance} 
        rippleVariance={props.rippleVariance}
        maxGridSize={props.maxGridSize}
        rippleSpeed={props.rippleSpeed} 
        ripplePropagation={props.ripplePropagation}
        autoDrop={props.autoDrop}
        rippleTransitionSpeed={props.rippleTransitionSpeed}
        initialGrayscale={props.initialGrayscale}
        grayscaleChange={props.grayscaleChange}
      />
    )
  }
}

export default ColorGrid;