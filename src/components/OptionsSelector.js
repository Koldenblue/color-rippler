import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../index.css'
import Background from "./Background"

function OptionsSelector() {
  // things that could be options:
  // grayscale
  // color variance
  // outer shell change only
  // algorithm style
  // background color
  // grid size
  return (
    <>
      <Background />
      <Jumbotron fluid id='options-jumbotron'>
        <Container>
          <h1>Options</h1>
          <p>
            Page not yet functional, under construction!
          </p>
        </Container>
      </Jumbotron>

      <Link className='color-grid-link' to='/'>Click to go to color grid using default settings</Link>
      <Form>
        <Form.Check
          type="switch"
          id="outer-shell-switch"
          label="Only Outer Shell Changes Color"
        />
      </Form>
    </>
  )
}
export default OptionsSelector;