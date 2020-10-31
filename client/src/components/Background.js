import React from 'react';

/** a colored background */
function Background() {

  let styles = {
    image: {
        top: '0',
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        margin: '0',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'fixed',
        backgroundColor: 'lightcoral',
        zIndex: '-1'
    }
  }

  return (
    <div style={styles.image}>

    </div>
  )
}

export default Background;