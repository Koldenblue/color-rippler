import React from 'react';
import axios from 'axios';

export default function ColorGetter() {
  let retrieveColor = () => {
    console.log("hi")
    axios.get('/api/colorgetter').then((data) => {
      console.log(data);
    })
  }

  // to implement: set a flag for 'picking a color', which is activated by selecting the appropriate option in the dropdown.
  // when flag is set, clicking on a color will not trigger the changeSurroundings function
  // instead it will make a call to the /api/colorgetter route
  // the route will make an ajax call to the color api, with the rgb values
  // finally, the returned values from the api can be displayed
  // the display can possibly be in a navbar of some sort? to be implemented
  // perhaps the color grid should be put into a container-fluid rather than the entire window
  return (<>
    <button onClick={retrieveColor}>Click me</button>
  </>)
}

// also to implement: local storage for a grid
// storage of grids per user
// navbar to hold options, etc.