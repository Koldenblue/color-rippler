import React from 'react';

function DynaColorBox(props) {
  let styles = {
    colorBox: {
      width: 'auto',
      height: '75px',
      backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`
    }
  }
  return (
    <>
      <div className='col-md-1' style={styles.colorBox}>

      </div>
    </>
  )
}

export default DynaColorBox;