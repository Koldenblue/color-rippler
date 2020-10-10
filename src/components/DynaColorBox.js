import React, { useState, useReducer } from 'react';

function DynaColorBox(props) {
  const [red, setRed] = useState(props.red)
  const [blue, setBlue] = useState(props.blue)
  const [green, setGreen] = useState(props.green)

  let styles = {
    colorBox: {
      width: 'auto',
      height: '75px',
      backgroundColor: `rgb(${red}, ${props.green}, ${props.blue})`
    }
  }

  console.log(props)
  return(
    <>
      <div 
        className='col-md-1' 
        style={styles.colorBox}
        onClick={() => props.change(props['data-value'])} >
      </div>
    </>
  )
}

export default DynaColorBox;