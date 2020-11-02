import React from 'react';
import axios from 'axios';

export default function ColorGetter() {
  let retrieveColor = () => {
    console.log("hi")
    axios.get('/api/colorgetter').then((data) => {
      console.log(data);
    })
  }

  return (<>
    <button onClick={retrieveColor}>Click me</button>
  </>)
}