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
    // console.log(grids[value.r].props.children[value.c].props.red)
    // console.log(grids[value.r].props.children[value.c].props.green)
    // console.log(grids[value.r].props.children[value.c].props.blue)
    let adjacentBoxes = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0) {
          continue;
        }
        let adjBox = {r: currentRow + i, c: currentCol + j};
        if (adjBox.r < this.gridSize && adjBox.r >= 0 && adjBox.c < this.gridSize && adjBox.c >= 0) {
          adjacentBoxes.push(adjBox);
        }
      }
    }
    console.log(adjacentBoxes)
    console.log(this.state.rgbArr)
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
              reduce={this.reduce}
            />
          )
        })}
      </div>
    )
  })
  this.starting = false
  return grids
}

componentDidMount() {
  this.setState({rgbArr: this.newRgbArr})
}

  render() {
    let grids;
    grids = this.populateGrid()
    return (
      <>
        <div className='container-fluid'>
          {grids}
        </div>
      </>
    )
  }
}

export default ClassBoxGrid;
