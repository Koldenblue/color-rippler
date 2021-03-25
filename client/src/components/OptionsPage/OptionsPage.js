import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../../index.css';
import Background from "./Background";
import ColorGrid from '../ColorGrid';
import OptionsForm from './OptionsForm';
import WatercolorCircles from './WatercolorCircles';
import TopBar from '../TopBar';
/** Either routes to ColorGrid with default options, or will load up ColorGrid with selected options */
function OptionsPage() {
    var _a = useState(null), colorGrid = _a[0], setColorGrid = _a[1];
    var _b = useState(false), validated = _b[0], setValidated = _b[1];
    // things that could be options:
    // algorithm style
    // background color
    // submits options form, stores the options in session storage, then generates a grid with the selected options
    var handleFormSubmit = function (event) {
        event.preventDefault();
        var form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            // console.log("false")
        }
        else {
            // console.log(event.target)
            var maxGridSize = event.target[0].value;
            if (maxGridSize === '') {
                maxGridSize = 20;
            }
            var initialVariance = event.target[1].value;
            if (initialVariance === '') {
                initialVariance = 50;
            }
            var rippleVariance = event.target[2].value;
            if (rippleVariance === '') {
                rippleVariance = 100;
            }
            var rippleSpeed = event.target[3].value;
            if (rippleSpeed === '') {
                rippleSpeed = 100;
            }
            var ripplePropagation = event.target[4].value;
            if (ripplePropagation === '') {
                ripplePropagation = 3;
            }
            var rippleTransitionSpeed = event.target[5].value;
            if (rippleTransitionSpeed === '') {
                rippleTransitionSpeed = 1.5;
            }
            else {
                rippleTransitionSpeed = rippleTransitionSpeed / 1000;
            }
            var initialGrayscale = event.target[6].checked;
            // let grayscaleChange = event.target[7].checked;
            // let autoDrop = event.target[8].checked;
            // console.log(autoDrop)
            var outerShellOnly = event.target[7].checked;
            // store options in session storage for use with the options dropdown generate new grid button
            sessionStorage.setItem('optionsGrid', JSON.stringify({
                outerShellOnly: outerShellOnly,
                initialVariance: initialVariance,
                rippleVariance: rippleVariance,
                maxGridSize: maxGridSize,
                rippleSpeed: rippleSpeed,
                ripplePropagation: ripplePropagation,
                initialGrayscale: initialGrayscale,
                rippleTransitionSpeed: rippleTransitionSpeed
            }));
            setColorGrid(React.createElement(ColorGrid, { reloadingWithOptions: true, outerShellOnly: outerShellOnly, initialVariance: initialVariance, rippleVariance: rippleVariance, maxGridSize: maxGridSize, rippleSpeed: rippleSpeed, ripplePropagation: ripplePropagation, initialGrayscale: initialGrayscale, 
                // autoDrop={autoDrop}
                rippleTransitionSpeed: rippleTransitionSpeed }));
        }
    };
    if (colorGrid) {
        return (React.createElement(React.Fragment, null,
            React.createElement(TopBar, null),
            colorGrid));
    }
    else {
        return (React.createElement(React.Fragment, null,
            React.createElement(Background, null),
            React.createElement(WatercolorCircles, null),
            React.createElement(Jumbotron, { fluid: true, id: 'options-jumbotron' },
                React.createElement(Container, { className: 'title-text' },
                    React.createElement("h1", { className: 'title-text' }, "Color Rippler"),
                    React.createElement("p", { className: 'title-text' }, "Select options below to customize the color ripples!"),
                    React.createElement("hr", null),
                    React.createElement(Link, { className: 'color-grid-link', to: '/' }, "Go to color grid using default settings"))),
            React.createElement(OptionsForm, { handleFormSubmit: handleFormSubmit, validated: validated })));
    }
}
export default OptionsPage;
