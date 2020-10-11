import React, { useEffect, useState } from 'react';
import Grid from './Grid';

// manages initial state 
function GridWrapper() {
  const [colorGrid, setColorGrid] = useState([]);
  const [variance, setVariance] = useState(50);
  const [gridSize, setGridSize] = useState(12);

  // initial random color to be applied to entire grid
  const randRed = Math.floor(Math.random() * 254);
  const randGreen = Math.floor(Math.random() * 254);
  const randBlue = Math.floor(Math.random() * 254);
  // determines whether to add or subtract variance from initial color
  const plusMinus = [-1, 1];

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
        newGrid[i].push({red: randRed + redVar * redPlusMinus, green: randGreen + greenVar * greenPlusMinus, blue: randBlue + blueVar * bluePlusMinus})
      }
    }
    setColorGrid(newGrid)
  },[])

  useEffect(() => {
    console.log(colorGrid)
  }, [colorGrid])

  return (
    <>
      <Grid
        colorGrid={colorGrid}
        gridSize={gridSize}
      />
    </>
  )
}

export default GridWrapper;