import React, { useState, useReducer, useEffect } from 'react';
import ColorBox from './Colors';
import DynaColorBox from './DynaColorBox';

function BoxGrid(props) {
  const [red, setRed] = useState([]);
  const [green, setGreen] = useState([]);
  const [blue, setBlue] = useState([]);
  const [positive, setPositive] = useState(1);

  const [colors, dispatch] = useReducer((state, action) => {
    if (action === 'blue') {
      if (state.blue > 254 || state.blue < 0) {
         setPositive(positive * -1)
        }
      return { 'red': state.red, 'green': state.green, 'blue': state.blue + 5 * positive}
    }
    else if (action === 'red') {
      if (state.red > 254 || state.red < 0) {
         setPositive(positive * -1)
        }
      return { 'red': state.red + 5 * positive, 'green': state.green, 'blue': state.blue }
    }
    else if (action === 'green') {
      if (state.green > 254 || state.green < 0) {
        setPositive(positive * -1)
      }
      return { 'red': state.red, 'green': state.green + 5 * positive, 'blue': state.blue }
    }
  }, { 'red': 20, 'green': 80, 'blue': 40 })


  useEffect(() => {
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      red.push(i);
      green.push(i);
      blue.push(i);
    }
    setRed(red);
    setBlue(blue);
    setGreen(green);
    // now each color is an array of numbers, 0 thru 143
  },[])


  const GRID_SIZE = 12;
  let rowArr = new Array(GRID_SIZE);
  let colArr = new Array(GRID_SIZE);
  for (let i = 0, j = GRID_SIZE; i < j; i++) {
    rowArr[i] = i;
    colArr[i] = i;
  }


  // let styles = {
  //   color: {
  //     backgroundColor: `rgb(${blueNum.red}, ${blueNum.green}, ${blueNum.blue})`,

  //   }
  // }

  let dispatchArray = ['red', 'green', 'blue']
  const randomDispatch = () => {
    let num = Math.floor(Math.random() * 3)
    let randDispatch = dispatchArray[num]
    return randDispatch;
  }
  let newDisp;

  let changeSurroundings = (value) => {
    console.log(value);
  }

  return (
    <>
      <div className='container-fluid'>
        {rowArr.map((row) => {
          return (
            <div key={row} className='row'>
              {colArr.map((col) => {
                // {dispatch(randomDispatch())}
                return (
                  <DynaColorBox key={col} change={changeSurroundings} data-value={`r${row}c${col}`} red={Math.floor(Math.random() * 254)} green={Math.floor(Math.random() * 254)} blue={Math.floor(Math.random() * 254)}/>
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