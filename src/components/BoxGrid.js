import React, { useState, useReducer, useEffect } from 'react';
import ColorBox from './Colors';
import DynaColorBox from './DynaColorBox';

function BoxGrid(props) {
  // const [red, setRed] = useState([]);
  // const [green, setGreen] = useState([]);
  // const [blue, setBlue] = useState([]);
  // const [positive, setPositive] = useState(1);
  const [variance, setVariance] = useState(50);

  // const [colors, dispatch] = useReducer((state, action) => {
  //   if (action === 'blue') {
  //     if (state.blue > 254 || state.blue < 0) {
  //        setPositive(positive * -1)
  //       }
  //     return { 'red': state.red, 'green': state.green, 'blue': state.blue + 5 * positive}
  //   }
  //   else if (action === 'red') {
  //     if (state.red > 254 || state.red < 0) {
  //        setPositive(positive * -1)
  //       }
  //     return { 'red': state.red + 5 * positive, 'green': state.green, 'blue': state.blue }
  //   }
  //   else if (action === 'green') {
  //     if (state.green > 254 || state.green < 0) {
  //       setPositive(positive * -1)
  //     }
  //     return { 'red': state.red, 'green': state.green + 5 * positive, 'blue': state.blue }
  //   }
  // }, { 'red': 20, 'green': 80, 'blue': 40 })


  // useEffect(() => {
  //   for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  //     red.push(i);
  //     green.push(i);
  //     blue.push(i);
  //   }
  //   setRed(red);
  //   setBlue(blue);
  //   setGreen(green);
  //   // now each color is an array of numbers, 0 thru 143
  // },[])


  const GRID_SIZE = 12;
  let rowArr = new Array(GRID_SIZE);
  let colArr = new Array(GRID_SIZE);
  for (let i = 0, j = GRID_SIZE; i < j; i++) {
    rowArr[i] = i;
    colArr[i] = i;
  }

  // let dispatchArray = ['red', 'green', 'blue']
  // const randomDispatch = () => {
  //   let num = Math.floor(Math.random() * 3)
  //   let randDispatch = dispatchArray[num]
  //   return randDispatch;
  // }

  let changeSurroundings = (value) => {
    console.log(value);
  }

  let randRed = Math.floor(Math.random() * 254)
  let randGreen = Math.floor(Math.random() * 254)
  let randBlue = Math.floor(Math.random() * 254)
  let plusMinus = [-1, 1]

  return (
    <>
      <div className='container-fluid'>
        {rowArr.map((row) => {
          return (
            <div key={row} className='row'>
              {colArr.map((col) => {
                let redVar = Math.floor(Math.random() * variance)
                let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
                let blueVar = Math.floor(Math.random() * variance)
                let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)]
                let greenVar = Math.floor(Math.random() * variance)
                let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
                return (
                  <DynaColorBox 
                    key={col} 
                    change={changeSurroundings} 
                    data-value={`r${row}c${col}`} 
                    red={randRed + redVar * redPlusMinus} 
                    green={randGreen + greenVar * greenPlusMinus}
                    blue={randBlue + blueVar * bluePlusMinus}
                  />
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