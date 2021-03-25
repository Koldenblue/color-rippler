import React from 'react';
/** a colored background */
function Background() {
    var styles = {
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
            position: 'fixed',
            zIndex: '-3'
        }
    };
    return (React.createElement("div", { id: 'pink-watermelon', style: styles.image }));
}
export default Background;
