import React, { useState, useReducer, useEffect } from 'react';
import ColorBox from './Colors';
import DynaColorBox from './DynaColorBox';

function BoxGrid(props) {
  const [variance, setVariance] = useState(50);
  const [gridSize, setGridSize] = useState(12);

  // a 12 by 12 grid
  let rowArr = new Array(gridSize);
  let colArr = new Array(gridSize);
  for (let i = 0, j = gridSize; i < j; i++) {
    rowArr[i] = i;
    colArr[i] = i;
  }

  /** function passed to color boxes, triggered on click.
   * Gets the data-value objects for adjacent boxes
  * @param {object} value is from the data-value attribute on the box, or props.data-value */
  let changeSurroundings = (value, [redChange, greenChange, blueChange]) => {
    console.log(value, redChange, greenChange, blueChange);
    let currentRow = value.r;
    let currentCol = value.c;
    let adjacentBoxes = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0) {
          continue;
        }
        let adjBox = {r: currentRow + i, c: currentCol + j};
        if (adjBox.r < gridSize && adjBox.r >= 0 && adjBox.c < gridSize && adjBox.c >= 0) {
          adjacentBoxes.push(adjBox);
        }
      }
    }
    console.log(adjacentBoxes)
  }

  // initial random color to be applied to entire grid
  let randRed = Math.floor(Math.random() * 254)
  let randGreen = Math.floor(Math.random() * 254)
  let randBlue = Math.floor(Math.random() * 254)
  // determines whether to add or subtract variance from initial color
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
                    data-value={{r:row, c:col}} 
                    red={randRed + redVar * redPlusMinus} 
                    green={randGreen + greenVar * greenPlusMinus}
                    blue={randBlue + blueVar * bluePlusMinus}
                    numColumns = {gridSize}
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



  // const [red, setRed] = useState([]);
  // const [green, setGreen] = useState([]);
  // const [blue, setBlue] = useState([]);
  // const [positive, setPositive] = useState(1);

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
  //   for (let i = 0; i < gridSize * gridSize; i++) {
  //     red.push(i);
  //     green.push(i);
  //     blue.push(i);
  //   }
  //   setRed(red);
  //   setBlue(blue);
  //   setGreen(green);
  //   // now each color is an array of numbers, 0 thru 143
  // },[])

  // let dispatchArray = ['red', 'green', 'blue']
  // const randomDispatch = () => {
  //   let num = Math.floor(Math.random() * 3)
  //   let randDispatch = dispatchArray[num]
  //   return randDispatch;
  // }