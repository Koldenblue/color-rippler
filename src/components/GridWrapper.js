import React, { useEffect, useState } from 'react';
import Grid from './Grid';

// manages initial state 
function GridWrapper() {
  const [colorGrid, setColorGrid] = useState([]);
  const [variance, setVariance] = useState(50);
  const [gridSize, setGridSize] = useState(12);

  // initial random color to be applied to entire grid
  const randRed = Math.floor(Math.random() * 255);
  const randGreen = Math.floor(Math.random() * 255);
  const randBlue = Math.floor(Math.random() * 255);
  // determines whether to add or subtract variance from initial color
  const plusMinus = [-1, 1];

  // initializes the color grid
  useEffect(() => {
    let newGrid = []
    for (let i = 0; i < gridSize; i++) {
      newGrid.push([])
      for (let j = 0; j < gridSize; j++) {
        let redVar = Math.floor(Math.random() * variance)
        let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
        let blueVar = Math.floor(Math.random() * variance)
        let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)]
        let greenVar = Math.floor(Math.random() * variance)
        let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
        newGrid[i].push({ red: randRed + redVar * redPlusMinus, green: randGreen + greenVar * greenPlusMinus, blue: randBlue + blueVar * bluePlusMinus })
      }
    }
    setColorGrid(newGrid)
  }, [])


  /** function passed to color boxes, triggered on click.
  * Gets the data-value objects for adjacent boxes
  * @param {object} value is from the data-value attribute on the box, or props.data-value */
  const changeSurroundings = (value, [redChange, greenChange, blueChange]) => {
    console.log(value, redChange, greenChange, blueChange);
    const currentRow = value.r;
    const currentCol = value.c;
    console.log(colorGrid)
    let newGrid = colorGrid.map((data) => {
      return data;
    })
    newGrid[currentRow].splice(currentCol, 1, {
      red: newGrid[currentRow][currentCol].red + redChange,
      green: newGrid[currentRow][currentCol].green + greenChange,
      blue: newGrid[currentRow][currentCol].blue + blueChange,
    })
    console.log("new Grid", newGrid)
    setColorGrid(newGrid)
  }

  return (
    <>
      <Grid
        colorGrid={colorGrid}
        gridSize={gridSize}
        changeSurroundings={changeSurroundings}
      />
    </>
  )
}

export default GridWrapper;