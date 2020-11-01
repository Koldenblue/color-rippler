import React, { useState, useEffect } from 'react';

function DynaColorBox(props) {
  const [variance, setVariance] = useState(props.clickVariance);
  const [opacity, setOpacity] = useState(0);
  const [opacityTransition, setOpacityTransition] = useState(Math.floor(Math.random() * 15));
  const [colorTransition, setColorTransition] = useState(props.rippleTransitionSpeed)

  // height of boxes is based on browser window height
  // rounding down so that boxes don't overflow window and cause weird rendering
  let boxHeight = Math.floor(props.height / Number(props.numColumns))
  let boxWidth = Math.floor(props.width / Number(props.numColumns)) 
  let styles = {
    colorBox: {
      width: boxWidth + 'px',
      height: boxHeight + 'px',
      backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
      opacity: opacity,
      transitionProperty: 'opacity, background-color',
      transitionDuration: `${opacityTransition}s, ${colorTransition}s`,
      borderRadius: '20px',
      overflow: 'hidden'
    }
  }

  useEffect(() => {
    setOpacity(1);
  }, [])

  let plusMinus = [-1, 1]   // plus or minus random color variance

  // generates a random color variance, then propogates to surroundings thru props.changeSurroundings
  const changeColors = () => {
    let redVar = Math.floor(Math.random() * variance)
    let redPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
    let greenVar = Math.floor(Math.random() * variance)
    let greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)]
    let blueVar = Math.floor(Math.random() * variance)
    let bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)]

    props.changeSurroundings(props['data-value'], [redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus])
  }


  return(
    <>
      <div
        style={styles.colorBox}
        onClick={changeColors} 
      >
      </div>
    </>
  )
}

export default DynaColorBox;