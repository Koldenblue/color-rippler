import React, { useEffect, useState } from 'react';
import Grid from './Grid';

// manages initial state 
function GridWrapper({ outerShellOnly=false, initialVariance=50, rippleVariance=100, maxGridSize=20, rippleSpeed=100, ripplePropogation=5, autoDrop=false }) {
  const [colorGrid, setColorGrid] = useState([]);
  const [variance, setVariance] = useState(initialVariance);
  const [gridSize, setGridSize] = useState(maxGridSize);
  const [clickVariance, setClickVariance] = useState(rippleVariance);

  // initial random color to be applied to entire grid
  const randRed = Math.floor(Math.random() * 256);
  const randGreen = Math.floor(Math.random() * 256);
  const randBlue = Math.floor(Math.random() * 256);
  // determines whether to add or subtract variance from initial color
  const plusMinus = [-1, 1];
  // let styles = {
  //   background: {
  //     backgroundColor: `rgb(${randRed}, ${randGreen}, ${randBlue})`
  //   }
  // }
  // initializes the color grid
  useEffect(() => {
    let newGrid = []
    for (let i = 0; i < gridSize; i++) {
      newGrid.push([])
      for (let j = 0; j < gridSize; j++) {
        let redVar = Math.floor(Math.random() * variance);
        let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        let blueVar = Math.floor(Math.random() * variance);
        let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        let greenVar = Math.floor(Math.random() * variance);
        let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        let newRed = randRed + redVar * redPlusMinus;
        let newGreen = randGreen + greenVar * greenPlusMinus;
        let newBlue = randBlue + blueVar * bluePlusMinus;
        newGrid[i].push({
          red: newRed > 255 ? 255 : (newRed < 0 ? 0 : newRed),
          green: newGreen > 255 ? 255 : (newGreen < 0 ? 0 : newGreen),
          blue: newBlue > 255 ? 255 : (newBlue < 0 ? 0 : newBlue)
        })
      }
    }
    setColorGrid(newGrid)
  }, [])

  useEffect(() => {
    if (autoDrop && colorGrid.length > 0) {
      autoDrop = false;
      setInterval(() => {
        console.log(colorGrid)
        console.log("auto")
        let randRow = Math.floor(Math.random() * gridSize);
        let randCol = Math.floor(Math.random() * gridSize);
        let redVar = Math.floor(Math.random() * clickVariance)
        let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
        let greenVar = Math.floor(Math.random() * clickVariance)
        let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
        let blueVar = Math.floor(Math.random() * clickVariance)
        let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)]
        changeSurroundings({r: randRow, c: randCol}, [redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus])
      }, rippleSpeed * ripplePropogation * 1.5)
    }
  },[autoDrop])

  /** Accepts a 2D array and initial row/column value, containing rgb objects. Propogates rgb changes one array shell at a time.
   * @param {Array} grids A 2d array, consisting of an outer array of rows, and inner arrays corresponding to columns, with each row/col having an rgb object
   * @param {Number} maxDelta The maximum propogation of color change
   * @param {Number} startDelta The innermost shell in the array that will be changed
   * @param {Number} row The starting row, corresponding to the outermost array
   * @param {Number} col The starting column, corresponding to the inner arrays
   * @param {Number} redChange The amount that each red value in the rgb objects will be changed. Similar for greenChange and blueChange */
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
              try {
                let newRed = currentGrid[a + row][b + col].red + redChange;
                let newGreen = currentGrid[a + row][b + col].green + greenChange;
                let newBlue = currentGrid[a + row][b + col].blue + blueChange;
                currentGrid[a + row][b + col] = {
                  red: newRed > 255 ? 255 : (newRed < 0 ? 0 : newRed),
                  green: newGreen > 255 ? 255 : (newGreen < 0 ? 0 : newGreen),
                  blue: newBlue > 255 ? 255 : (newBlue < 0 ? 0 : newBlue)
                };
              }
              catch (TypeError) {
                // console.log('max range reached');
              }
            }
          })
        )
      });
      setColorGrid(currentGrid)
      console.log(currentGrid);
      // can set the grids param to the original grid in order to only change outermost shell, instead of all shells
      // or set to currentGrid to change all shells
      if (outerShellOnly) {
        startDelta < maxDelta && changeColor(grids, maxDelta, startDelta + 1, row, col, redChange, greenChange, blueChange)
      } else {
        startDelta < maxDelta && changeColor(currentGrid, maxDelta, startDelta + 1, row, col, redChange, greenChange, blueChange)
      }
    }, rippleSpeed)
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
    if (colorGrid.length > 0) {
      let newGrid = colorGrid.map((data) => {
        return data;
      })
      newGrid[currentRow].splice(currentCol, 1, {
        red: newGrid[currentRow][currentCol].red + redChange,
        green: newGrid[currentRow][currentCol].green + greenChange,
        blue: newGrid[currentRow][currentCol].blue + blueChange,
      })
      // console.log("new Grid", newGrid)
      changeColor(newGrid, ripplePropogation, 1, currentRow, currentCol, redChange, greenChange, blueChange)
      setColorGrid(newGrid)
    }
  }


  return (
    <div className='container-fluid'>
      <Grid
        clickVariance={clickVariance}
        colorGrid={colorGrid}
        gridSize={gridSize}
        changeSurroundings={changeSurroundings}
      />
    </div>
  )
}

export default GridWrapper;