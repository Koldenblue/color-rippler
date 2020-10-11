import React from 'react';
import DynaColorBox from './DynaColorBox';

class ClassBoxGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      variance: 50,
      gridSize: 12,
      rgbArr: [],
      colorGrid: []
    }

    // initial random color to be applied to entire grid
    this.randRed = Math.floor(Math.random() * 255);
    this.randGreen = Math.floor(Math.random() * 255);
    this.randBlue = Math.floor(Math.random() * 255);
    // determines whether to add or subtract variance from initial color
    this.plusMinus = [-1, 1];

    // generate the initial color grid, which will then be set to the rgbArr state upon componentDidMount
    

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
    let newRed = this.state.rgbArr[currentRow][currentCol].red + redChange;
    let newGreen = this.state.rgbArr[currentRow][currentCol].green + greenChange;
    let newBlue = this.state.rgbArr[currentRow][currentCol].blue + blueChange;
    let newColorArr = this.state.rgbArr;
    console.log(this.state.rgbArr)

    newColorArr[currentRow].splice(currentCol , 1, {red: newRed, green: newGreen, blue: newBlue})
    console.log(newColorArr)
    this.setState({ rgbArr:newColorArr })
    // console.log(adjacentBoxes)
    console.log(this.state.rgbArr)
  }

  

  populateGrid3 = () => {
    let r = -1;
    let c = -1;
    let grids = this.colorGrid.map((row) => {
      r++;
      return (
        <div className='row' key={r}>
          {row.map((box) => {
            {if (++c > 11) {
              c = 0 
            }}
            return (
              <DynaColorBox
                key={`r$c${c}{r}`}
                data-value={{r:r, c:c}}
                red={box.red}
                green={box.green}
                blue={box.blue}
                change={this.changeSurroundings}
                numColumns = {this.state.gridSize}
              />
            );
          })}
        </div>
      )
    })
    return grids;
  }

componentDidMount() {
  // newRgbArr is populated by populateGrid, which is called in the constructor
  
  this.setState({rgbArr: this.generateColorGrid()})
  // colorGrid is created in constructor
  this.boxArr3 = this.populateGrid3()
}

  render() {

    return (
      <>
        <div className='container-fluid'>
          {/* {this.grid} */}
          {this.boxArr3}
        </div>
      </>
    )
  }
}

export default ClassBoxGrid;
