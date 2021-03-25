import React, { useState, useEffect } from 'react';
function DynaColorBox(props) {
    var _a = useState(props.clickVariance), variance = _a[0], setVariance = _a[1];
    var _b = useState(0), opacity = _b[0], setOpacity = _b[1];
    var _c = useState(Math.floor(Math.random() * 15)), opacityTransition = _c[0], setOpacityTransition = _c[1];
    var _d = useState(props.rippleTransitionSpeed), colorTransition = _d[0], setColorTransition = _d[1];
    // height of boxes is based on browser window height
    // rounding down so that boxes don't overflow window and cause weird rendering
    var boxHeight = Math.floor(props.height / Number(props.numColumns));
    var boxWidth = Math.floor(props.width / Number(props.numColumns));
    var styles = {
        colorBox: {
            width: boxWidth + 'px',
            height: boxHeight + 'px',
            backgroundColor: "rgb(" + props.red + ", " + props.green + ", " + props.blue + ")",
            opacity: opacity,
            transitionProperty: 'opacity, background-color',
            transitionDuration: opacityTransition + "s, " + colorTransition + "s",
            borderRadius: '20px',
            overflow: 'hidden'
        }
    };
    useEffect(function () {
        setOpacity(1);
    }, []);
    var plusMinus = [-1, 1]; // plus or minus random color variance
    // generates a random color variance, then propogates to surroundings thru props.changeSurroundings
    var changeColors = function () {
        var redVar = Math.floor(Math.random() * variance);
        var redPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        var greenVar = Math.floor(Math.random() * variance);
        var greenPlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        var blueVar = Math.floor(Math.random() * variance);
        var bluePlusMinus = plusMinus[Math.floor(Math.random() * 2)];
        props.changeSurroundings(props['data-value'], [redVar * redPlusMinus, greenVar * greenPlusMinus, blueVar * bluePlusMinus]);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: styles.colorBox, onClick: changeColors })));
}
export default DynaColorBox;
