import React, { useState, useReducer, useEffect } from 'react';

function DynaColorBox(props) {
  const [variance, setVariance] = useState(60);
  const [opacity, setOpacity] = useState(0);
  const [transition, setTransition] = useState(Math.floor(Math.random() * 15));
  // reducer modifies state of colors based on prev state.
  const [colors, dispatch] = useReducer((state, action) => {
    let newRed = state.red + action[0];
    let newGreen = state.green + action[1];
    let newBlue = state.blue + action[2];
    if (newRed > 254) {
      newRed = 254;
    } else if (newRed < 0) {
      newRed = 0;
    } 
    if (newGreen > 254) {
      newGreen = 254;
    } else if (newGreen < 0) {
      newGreen = 0;
    } 
    if (newBlue > 254) {
      newBlue = 254;
    } else if (newBlue < 0) {
      newBlue = 0;
    } 
    return { 'red': newRed, 'green': newGreen, 'blue': newBlue}
  }, { 'red': props.red, 'green': props.green, 'blue': props.blue })
  
  // height of boxes is based on browser window height
  let boxHeight = window.innerHeight / Number(props.numColumns)
  let styles = {
    colorBox: {
      width: 'auto',
      height: boxHeight + 'px',
      backgroundColor: `rgb(${colors['red']}, ${colors['green']}, ${colors['blue']})`,
      opacity: opacity,
      transition: `opacity ${transition}s`,
    }
  }

  useEffect(() => {
    setOpacity(1);
  }, [])

  let plusMinus = [-1, 1]

  const changeColors = () => {
    let redVar = Math.floor(Math.random() * variance)
    let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
    let greenVar = Math.floor(Math.random() * variance)
    let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
    let blueVar = Math.floor(Math.random() * variance)
    let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)]
    dispatch([redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus])

    props.change(props['data-value'], [redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus])
  }

  return(
    <>
      <div
        className='col-md-1' 
        style={styles.colorBox}
        onClick={changeColors} >
      </div>
    </>
  )
}

export default DynaColorBox;