import React, { useEffect, useState } from 'react';
import DynaColorBox from './DynaColorBox';

function Grid(props) {

  let r = -1;
  let c = -1;

  return (
    <>
      {props.colorGrid.map((row) => {
      r++;
      return (
        <div className='row' key={r}>
          {row.map((box) => {
            {if (++c > 11) {
              c = 0 
            }}
            return (
              <DynaColorBox
                key={`r${c}c${r}`}
                data-value={{r:r, c:c}}
                red={box.red}
                green={box.green}
                blue={box.blue}
                changeSurroundings={props.changeSurroundings}
                numColumns = {props.gridSize}
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