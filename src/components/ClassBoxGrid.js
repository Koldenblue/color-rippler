import React, { useState, useReducer, useEffect } from 'react';
import ColorBox from './Colors';
import DynaColorBox from './DynaColorBox';

class ClassBoxGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      variance: 50,
      gridSize: 12,
      rgbArr: []
    }
    
    // initial random color to be applied to entire grid
    this.randRed = Math.floor(Math.random() * 254);
    this.randGreen = Math.floor(Math.random() * 254);
    this.randBlue = Math.floor(Math.random() * 254);
    // determines whether to add or subtract variance from initial color
    this.plusMinus = [-1, 1];
    this.newRgbArr = []

    this.starting = true;
    this.populateArrays();
    this.grid = this.populateGrid();
    this.colorGrid = this.generateColorGrid();
    this.newBoxArr = this.populateGrid2()
    console.log(this.newBoxArr)
  }
  
  // a 12 by 12 grid
  rowArr = new Array(12); 
  colArr = new Array(12);
  populateArrays = () => {
    for (let i = 0, j = this.state.gridSize; i < j; i++) {
      this.rowArr[i] = i;
      this.colArr[i] = i;
    }
  }

  /** function passed to color boxes, triggered on click.
   * Gets the data-value objects for adjacent boxes
  * @param {object} value is from the data-value attribute on the box, or props.data-value */
  changeSurroundings = (value, [redChange, greenChange, blueChange]) => {
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
        if (adjBox.r < this.state.gridSize && adjBox.r >= 0 && adjBox.c < this.state.gridSize && adjBox.c >= 0) {
          adjacentBoxes.push(adjBox);
        }
      }
    }
    console.log(adjacentBoxes)
    console.log(this.state.rgbArr)
  }

  generateColorGrid = () => {
    let colorGrid = [];
    for (let i = 0; i < this.state.gridSize; i++) {
      colorGrid.push([])
      for (let j = 0; j < this.state.gridSize; j++) {
        let redVar = Math.floor(Math.random() * this.state.variance)
        let redPlusMinus = this.plusMinus[Math.floor(Math.random() * 2)]
        let blueVar = Math.floor(Math.random() * this.state.variance)
        let bluePlusMinus = this.plusMinus[Math.floor(Math.random() * 2)]
        let greenVar = Math.floor(Math.random() * this.state.variance)
        let greenPlusMinus = this.plusMinus[Math.floor(Math.random() * 2)]
        colorGrid[i].push([this.randRed + redVar * redPlusMinus, this.randGreen + greenVar * greenPlusMinus, this.randBlue + blueVar * bluePlusMinus])
      }
    }
    return colorGrid;
  }

  populateGrid = () => {
    let grids = this.rowArr.map((row) => {
      if (this.starting) {
        this.newRgbArr.push([])
      }
      return (
        <div key={row} className='row'>
          {this.colArr.map((col) => {
            let redVar = Math.floor(Math.random() * this.state.variance)
            let redPlusMinus = this.plusMinus[Math.floor(Math.random() * 2)]
            let blueVar = Math.floor(Math.random() * this.state.variance)
            let bluePlusMinus = this.plusMinus[Math.floor(Math.random() * 2)]
            let greenVar = Math.floor(Math.random() * this.state.variance)
            let greenPlusMinus = this.plusMinus[Math.floor(Math.random() * 2)]
            if (this.starting) {
              this.newRgbArr[row].push([this.randRed + redVar * redPlusMinus, this.randGreen + greenVar * greenPlusMinus, this.randBlue + blueVar * bluePlusMinus])
            }
            return (
              <DynaColorBox
                key={[row, col]}
                change={this.changeSurroundings}
                data-value={{r:row, c:col}}
                red={this.randRed + redVar * redPlusMinus}
                green={this.randGreen + greenVar * greenPlusMinus}
                blue={this.randBlue + blueVar * bluePlusMinus}
                numColumns = {this.state.gridSize}
              />
            )
          })}
        </div>
      )
    })
    this.starting = false
    return grids;
  }

  populateGrid2 = () => {
    let row = -1;
    let grids = this.colorGrid.map((a) => {
      row++;
      let col = -1;
      return (
        <div key={a} className='row'>
          {a.map((b) => {
            col++
            return (
              <DynaColorBox
                key={[row, col]}
                change={this.changeSurroundings}
                red={b[0]}
                green={b[1]}
                blue={b[2]}
                numColumns = {this.state.gridSize}

              />
          )})}
        </div>
      )
    })
    console.log(grids)
    return grids
  }
  

componentDidMount() {
  // newRgbArr is populated by populateGrid, which is called in the constructor
  this.setState({rgbArr: this.newRgbArr})
  // colorGrid is created in constructor
  console.log(this.colorGrid)
}

  render() {

    return (
      <>
        <div className='container-fluid'>
          {/* {this.grid} */}
          {this.newBoxArr}
        </div>
      </>
    )
  }
}

export default ClassBoxGrid;
