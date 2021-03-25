import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import circle2 from '../../assets/watercolor-circle2.svg';
import circle3 from '../../assets/watercolor-circle3.svg';
import circle1 from '../../assets/watercolor-circle.svg';

export default function WatercolorCircles() {
  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);
  const [opacity3, setOpacity3] = useState(0);

  let styles = {
    circle1: {
      position: 'fixed',
      zIndex: '-2',
      width: '70%',
      top: '45%',
      left: '10%',
      transform: 'translateX(-20%)',
      transitionProperty: 'opacity',
      transitionDuration: '2s',
      opacity: opacity1
    },
    circle2: {
      position: 'fixed',
      zIndex: '-1',
      width: '70%',
      top: '45%',
      left: '50%',
      transform: 'translateX(-50%)',
      transitionProperty: 'opacity',
      transitionDuration: '2s',
      opacity: opacity2
    },
    circle3: {
      position: 'fixed',
      zIndex: '-2',
      width: '70%',
      top: '45%',
      left: '90%',
      transform: 'translateX(-80%)',
      transitionProperty: 'opacity',
      transitionDuration: '2s',
      opacity: opacity3
    }
  }

  // changes the opacity of the watercolor circles, in a pattern dictated by the array
  let counter = 1;
  let changeOpacity = async () => {
    let opacityArr = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 1],
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 1, 1]
    ]

    setOpacity1(opacityArr[counter][0]);
    setOpacity2(opacityArr[counter][1]);
    setOpacity3(opacityArr[counter][2]);

    counter++;
    if (counter >= opacityArr.length) {
      counter = 0;
    }
  }

  useEffect(() => {
    setOpacity1(1)
    let opacityInterval = setInterval(changeOpacity, 6000)

    // cleans up the clearInterval function upon component unmount
    return() => {
      clearInterval(opacityInterval)
    }
  }, [])


  return (<>
    <Image style={styles.circle2} src={circle1} alt='watercolor circle' />
    <Image style={styles.circle1} src={circle2} alt='watercolor circle' />
    <Image style={styles.circle3} src={circle3} alt='watercolor circle' />
  </>)
}