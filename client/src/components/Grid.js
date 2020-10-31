import React, { useEffect, useState } from 'react';
import DynaColorBox from './DynaColorBox';

/** Uses the color grid array of RGB values in order to map DynaColorBox components to the DOM.
* The colorGrid array must be generated first before DynaBoxes can be mapped, 
 * hence why the colorGrid is a higher order component */
function Grid(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  let r = -1;
  let c = -1;
  let allowResize = true;
  useEffect(() => {
    function handleResize() {
      allowResize = false;
      setTimeout(() => {
        allowResize = true;
        if (allowResize) {
          setWidth(window.innerWidth )
          setHeight(window.innerHeight)
        }
      }, 500)
      // allowResize = false;
    }

    window.addEventListener('resize', handleResize);
  }, [])

  return (
    <>
      {props.colorGrid.map((row) => {
        // r and c are used to indicate rows and columns in the keys and data
      r++;
      return (
        <div className='row' key={r}>
          {row.map((box) => {
            // reset column to 0 after it reaches max
            {if (++c > (props.gridSize - 1)) {
              c = 0 
            }}
            // map a grid of DynaColorBoxes, based on the props.colorGrid array
            return (
              <DynaColorBox
                clickVariance={props.clickVariance}
                key={`r${c}c${r}`}
                data-value={{r:r, c:c}}
                red={box.red}
                green={box.green}
                blue={box.blue}
                changeSurroundings={props.changeSurroundings}
                numColumns = {props.gridSize}
                rippleTransitionSpeed={props.rippleTransitionSpeed}
                height={height}
                width={width}
              />
            );
          })}
        </div>
      )
    })}
    </>
  )
}

export default Grid;