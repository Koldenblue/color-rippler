import React, { useEffect, useState } from 'react';
import DynaColorBox from './DynaColorBox';

function Grid(props) {
  const [grids, setGrids] = useState('');

  console.log(props.colorGrid)
  const populateGrid = () => {
    let r = -1;
    let c = -1;
    console.log(props.colorGrid)
    let grids = props.colorGrid.map((row) => {
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
                // change={this.changeSurroundings}
                numColumns = {props.gridSize}
              />
            );
          })}
        </div>
      )
    })
    console.log(grids)
    return grids;
  }

  useEffect(() => {
    setGrids(populateGrid())
    console.log(grids)
  },[props.colorGrid])

  return (
    <>
      {grids}
    </>
  )
}

export default Grid;