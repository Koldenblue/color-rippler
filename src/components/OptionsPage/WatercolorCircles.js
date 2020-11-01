import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

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
  useEffect(() => {
    setOpacity1(1);
    setOpacity2(1);
    setOpacity3(1);
  })

  return (<>
    {/* <Image className='circle1-img' src={require('../../assets/watercolor-circle2.svg')} alt='watercolor circle' />
    <Image className='circle3-img' src={require('../../assets/watercolor-circle3.svg')} alt='watercolor circle' />
    <Image className='circle2-img' src={require('../../assets/watercolor-circle.svg')} alt='watercolor circle' /> */}
    <Image style={styles.circle2} src={require('../../assets/watercolor-circle.svg')} alt='watercolor circle' />
    <Image style={styles.circle1} src={require('../../assets/watercolor-circle2.svg')} alt='watercolor circle' />
    <Image style={styles.circle3} src={require('../../assets/watercolor-circle3.svg')} alt='watercolor circle' />
  </>)
}