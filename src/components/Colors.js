import React, { useReducer } from 'react';

function ColorBox() {
  const [color, dispatch] = useReducer((state, action) =>{
    if (action === 'red') {
      return ({ 'red': state.red + 15, 'green': state.green, 'blue': state.blue })
    }
  }, { 'red': 40, 'green': 80, 'blue': 120 })

  let styles = {
    colorBox: {
      width: 'auto',
      height: '75px',
      backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`
    }
  }
  return (
    <>
      <div className='col-md-1' style={styles.colorBox} onMouseOver={() => dispatch('red')}>

      </div>
    </>
  )
}

export default ColorBox;