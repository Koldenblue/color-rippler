import React, { useState, useEffect } from 'react';
import GridWrapper from './GridWrapper';
import { useHistory } from "react-router-dom";

/** highest-order component for ColorGrid. The grid array generation should be in this function,
 * since the array needs to be generated in order for all other components to operate.
 * For example, the ColorGrid array needs to be in place first, before the autoDrop works properly,
 * or before the DynaColorBox components can be mapped. */
function ColorGrid(props) {
  const [grid, setGrid] = useState();
  const history = useHistory();

  // disallow scroll bar when the grid is on the page (cuz it messes up margins)
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    }
  }, [])

  // if at the /optionsgrid route, the custom options here will be loaded from session storage
  useEffect(() => {
    if (props.reloadingWithOptions) {
      let options = JSON.parse(sessionStorage.getItem('optionsGrid'));
      if (!options) {
        history.push('/options');
      } else {
        setGrid(
          <GridWrapper
            outerShellOnly={options.outerShellOnly}
            initialVariance={options.initialVariance}
            rippleVariance={options.rippleVariance}
            maxGridSize={options.maxGridSize}
            rippleSpeed={options.rippleSpeed}
            ripplePropagation={options.ripplePropagation}
            initialGrayscale={options.initialGrayscale}
            rippleTransitionSpeed={options.rippleTransitionSpeed}
          />
        )
      }
    }
  }, [])

  if (props.reloadingWithOptions) {
    return (
      <>
        {grid}
      </>
    )
  }
  else {
    return (
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