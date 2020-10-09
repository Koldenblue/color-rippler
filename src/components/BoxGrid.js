import React, { useState, useReducer } from 'react';
import ColorBox from './Colors';


function BoxGrid(props) {
  // const [red, setRed] = useState(100);
  // const [green, setGreen] = useState(150);
  // const [blue, setBlue] = useState(50);
  const [blueNum, dispatch] = useReducer((state, action) => {
    if (action === 'blue') {
      console.log(state)
      return { 'blue': state.blue + 20,  'red': state.red, 'green': 80 }
    }
  }, { 'red': 40, 'green': 80, 'blue': 120 })


  const GRID_SIZE = 12;
  let rowArr = new Array(GRID_SIZE);
  let colArr = new Array(GRID_SIZE);
  for (let i = 0, j = GRID_SIZE; i < j; i++) {
    rowArr[i] = i;
    colArr[i] = i;
  }

  let styles = {
    color: {
      backgroundColor: `rgb(${blueNum.red}, ${blueNum.green}, ${blueNum.blue})`,

    }
  }

  const increaseBlue = () => {
    
  }

  return (
    <>
      <div className='container-fluid'>
        {rowArr.map((row) => {
          return (
            <div key={row} className='row'>
              {colArr.map((col) => {
                return (
                  <ColorBox />
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default BoxGrid;