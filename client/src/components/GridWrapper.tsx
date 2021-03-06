import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import { setColorGrid, selectColorGrid } from '../redux/colorGridSlice';
import { setGettingColor, selectGettingColor } from '../redux/colorGridSlice'
import { useSelector, useDispatch } from 'react-redux';

/** Should manage options, auto function, and ripple change functions.
* Should get the initial grid array from a higher order component. */
function GridWrapper({
  outerShellOnly=false, 
  initialVariance=50, 
  rippleVariance=100, 
  maxGridSize=20, 
  rippleSpeed=100, 
  ripplePropagation=3, 
  autoDrop=false,
  rippleTransitionSpeed=1.5,
  initialGrayscale=true,
  grayscaleChange=false
}) {
  // const [colorGrid, setColorGrid] = useState([]);
  const [variance, setVariance] = useState(initialVariance);
  const [gridSize, setGridSize] = useState(maxGridSize);
  const [clickVariance, setClickVariance] = useState(rippleVariance);
  const dispatch = useDispatch();
  let colorGrid: Array<Array<{ red: number, green: number, blue: number }>> = useSelector(selectColorGrid);
  let gettingColor: boolean = useSelector(selectGettingColor);


  // initial random color to be applied to entire grid
  // limit the range so that the variance won't be producing too much black or white by hitting 0 or 255
  let randRed: number = Math.floor(Math.random() * 256);
  if (randRed < initialVariance) {
    randRed = initialVariance;
  }
  else if (randRed + initialVariance > 255) {
    randRed = 255 - initialVariance;
  }
  let randGreen: number;
  let randBlue: number;
  if (initialGrayscale) {
    randGreen = randRed;
    randBlue = randRed;
  }
  else {
    randGreen = Math.floor(Math.random() * 256);
    randBlue = Math.floor(Math.random() * 256);
  }
  // determines whether to add or subtract variance from initial color
  const plusMinus: Array<number> = [-1, 1];


  // background color to be implemented, but doing it this way rerenders it every time grid changes
  // let styles = {
  //   background: {
  //     backgroundColor: `rgb(${randRed}, ${randGreen}, ${randBlue})`
  //   }
  // }


  // initializes the color grid by generating random color variance, with the random RGB values above as starting points.
  useEffect(() => {
    let newGrid: Array<Array<{ red: number, green: number, blue: number }>> = [];
    for (let i = 0; i < gridSize; i++) {
      newGrid.push([]);
      for (let j = 0; j < gridSize; j++) {
        let redVar = Math.floor(Math.random() * variance);
        let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        let blueVar = Math.floor(Math.random() * variance);
        let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        let greenVar = Math.floor(Math.random() * variance);
        let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        let newRed = randRed + redVar * redPlusMinus;
        let newGreen;
        let newBlue;
        if (initialGrayscale) {
          newGreen = newRed;
          newBlue = newRed;
        } else {
          newGreen = randGreen + greenVar * greenPlusMinus;
          newBlue = randBlue + blueVar * bluePlusMinus;
        }
        newGrid[i].push({
          red: newRed > 255 ? 255 : (newRed < 0 ? 0 : newRed),
          green: newGreen > 255 ? 255 : (newGreen < 0 ? 0 : newGreen),
          blue: newBlue > 255 ? 255 : (newBlue < 0 ? 0 : newBlue)
        })
      }
    }
    dispatch(setColorGrid(newGrid));
  }, [])

  // auto function. automatically selects a random row and column to execute changeSurroundings function for.
  // useEffect(() => {
  //   // console.log("checking auto")
  //   // console.log(autoDrop)
  //   // console.log(colorGrid.length)
  //   function auto() {
  //     if (autoDrop && colorGrid.length > 0) {
  //       console.log("start auto")
  //       // autoDrop = false;
  //       setTimeout(() => {
  //         console.log(colorGrid)
  //         console.log("auto")
  //         let randRow = Math.floor(Math.random() * gridSize);
  //         let randCol = Math.floor(Math.random() * gridSize);
  //         let redVar = Math.floor(Math.random() * clickVariance)
  //         let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
  //         let greenVar = Math.floor(Math.random() * clickVariance)
  //         let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
  //         let blueVar = Math.floor(Math.random() * clickVariance)
  //         let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)]
  //         changeSurroundings({r: randRow, c: randCol}, [redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus])
  //         // setColorGrid(colorGrid)
  //       }, rippleSpeed * ripplePropagation * 10)
  //     }
  //   }
  //   auto()
  // },[colorGrid.length])


  /** Accepts a 2D array and initial row/column value, containing rgb objects. Propogates rgb changes one array shell at a time.
   * @param {Array} grids A 2d array, consisting of an outer array of rows, and inner arrays corresponding to columns, with each row/col having an rgb object
   * @param {Number} maxDelta The maximum propogation of color change
   * @param {Number} startDelta The innermost shell in the array that will be changed
   * @param {Number} row The starting row, corresponding to the outermost array
   * @param {Number} col The starting column, corresponding to the inner arrays
   * @param {Number} redChange The amount that each red value in the rgb objects will be changed. Similar for greenChange and blueChange */
  const changeColor = (grids: Array<Array<{ red: number, green: number, blue: number }>>, maxDelta: number, startDelta: number = 1, row: number, col: number, redChange: number, greenChange:number, blueChange:number) => {
    // mapping to new grid to create a copy that doesn't have same reference
    const currentGrid = grids.map(a=> a.map(b=> b))

    setTimeout(()=> {
      // ranges is the row and column numbers of boxes to be changed - ex. [-2, -1, 0, 1, 2]
      const ranges = [0];
      for(let i = 1; i <= startDelta; i++) {
        ranges.unshift(-i);
        ranges.push(i);
      };
      // for each row/col in the range, return a new value in the outermost shell
      // the outermost shell will always have at least one row or column equal to the absolute value of the max range
      ranges.forEach(a => {
        return (
          // ranges is originally a 1 dimensional array. This is turning ranges into a 2D array of dimensions equal to max range,
          // by associating each 'a' value with another array of 'b' values
          ranges.forEach(b => {
            // only change the current outermost shell:
            if (Math.abs(b) === startDelta || Math.abs(a) === startDelta){
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
                // this expected error will happen if ripples go out of bounds
              }
            }
          })
        )
      });
      dispatch(setColorGrid(currentGrid))
      // can set the grids param to the original grids in order to only save changes to the outermost shell, instead of all shells, since the original grid has not changed
      // remember we are working with currentGrid, which is a copy of the original grids.
      if (outerShellOnly) {
        startDelta < maxDelta && changeColor(grids, maxDelta, startDelta + 1, row, col, redChange, greenChange, blueChange)
      // or set to currentGrid to change all shells
      } else {
        startDelta < maxDelta && changeColor(currentGrid, maxDelta, startDelta + 1, row, col, redChange, greenChange, blueChange)
      }
    }, rippleSpeed)
  }


  /** function passed to color boxes, triggered on click.
  * Gets the row and column of the clicked box, changes its color, 
  * then passes the color changes to the changeColor() algorithm in order to propagate ripples.
  * @param {object} value is from the data-value attribute on the box, or props.data-value */
  const changeSurroundings = (
    value: { r: number, c: number },
    [redChange, greenChange, blueChange]: Array<number>
  ): void => {
    const currentRow: number = value.r;
    const currentCol: number = value.c;

    // first, if gettingColor is active, then instead get the rgb values for the current square.
    if (gettingColor) {
      console.log('getting color is true');
      // set back to false
      dispatch(setGettingColor());
      console.log(gettingColor)
      let pickedColor: { r: null | number, g: null | number, b: null | number } = {r: null, g: null, b: null}
      console.log(colorGrid[currentRow][currentCol]);
    }

    // mapping to new grid to create a copy that doesn't have same reference
    else if (colorGrid.length > 0) {
      let newGrid: any = JSON.stringify(colorGrid); // stringifying then parsing avoids having same reference in memory
      newGrid = JSON.parse(newGrid)
      newGrid[currentRow].splice(currentCol, 1, {
        red: newGrid[currentRow][currentCol].red + redChange,
        green: newGrid[currentRow][currentCol].green + greenChange,
        blue: newGrid[currentRow][currentCol].blue + blueChange,
      })
      // console.log("new Grid", newGrid)
      changeColor(newGrid, ripplePropagation, 1, currentRow, currentCol, redChange, greenChange, blueChange)
      dispatch(setColorGrid(newGrid));
    }
  }


  return (
    <div className='container-fluid'>
      <Grid
        // appropriate options are passed down to lower components
        clickVariance={clickVariance}
        colorGrid={colorGrid}
        gridSize={gridSize}
        changeSurroundings={changeSurroundings}
        rippleTransitionSpeed={rippleTransitionSpeed}
      />
    </div>
  )
}

export default GridWrapper;