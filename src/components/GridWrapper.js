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


  // accepting a 2d array, d for the max delta, o for the current delta, row and column
  const changeColor = (grids, maxDelta, startDelta = 1, row, col, redChange, greenChange, blueChange) => {
    // mapping to new grid to create a copy that doesn't have same reference
    const currentGrid = grids.map(a=> a.map(b=> b))

    setTimeout(()=> {

      // ranges is the row and column numbers of boxes to be changed - ex. [-2, -1, 0, 1, 2]
      const ranges = [0];
      for(let i = 1; i <= startDelta; i++){
        ranges.unshift(-i);
        ranges.push(i);
      };

      // for each row/col in the range, return a new value in the outermost shell
      // the outermost shell will always have at least one row or column equal to the absolute value of the max range
      ranges.forEach(a => {
        return (
          ranges.map(b => {
            // only change the outermost shell:
            if(Math.abs(b) === startDelta || Math.abs(a) === startDelta){
              // turning the range into a 2D array of dimensions equal to max range
              currentGrid[a + row][b + col] = {
                red: currentGrid[a + row][b + col].red + redChange,
                green: currentGrid[a + row][b + col].green + greenChange,
                blue: currentGrid[a + row][b + col].blue + blueChange,
              };
            }
          })
        )
      });
      setColorGrid(currentGrid)
      console.log(currentGrid);
      startDelta < maxDelta && changeColor(grids, maxDelta, startDelta + 1, row, col, redChange, greenChange, blueChange)
    }, 1000)
  }


  /** function passed to color boxes, triggered on click.
  * Gets the data-value objects for adjacent boxes
  * @param {object} value is from the data-value attribute on the box, or props.data-value */
  const changeSurroundings = (value, [redChange, greenChange, blueChange]) => {
    console.log(value, redChange, greenChange, blueChange);
    const currentRow = value.r;
    const currentCol = value.c;
    console.log(colorGrid)
    // mapping to new grid to create a copy that doesn't have same reference
    let newGrid = colorGrid.map((data) => {
      return data;
    })
    newGrid[currentRow].splice(currentCol, 1, {
      red: newGrid[currentRow][currentCol].red + redChange,
      green: newGrid[currentRow][currentCol].green + greenChange,
      blue: newGrid[currentRow][currentCol].blue + blueChange,
    })
    // console.log("new Grid", newGrid)
    changeColor(newGrid, 3, 1, currentRow, currentCol, redChange, greenChange, blueChange)
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