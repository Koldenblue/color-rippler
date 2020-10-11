import React, { useState, useReducer, useEffect } from 'react';

function DynaColorBox(props) {
  const [variance, setVariance] = useState(60);
  const [opacity, setOpacity] = useState(0);
  const [transition, setTransition] = useState(Math.floor(Math.random() * 15));

  
  // height of boxes is based on browser window height
  let boxHeight = window.innerHeight / Number(props.numColumns)
  let styles = {
    colorBox: {
      width: 'auto',
      height: boxHeight + 'px',
      backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
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
    // dispatch([redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus])
    // props.reduce()
    props.changeSurroundings(props['data-value'], [redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus])
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