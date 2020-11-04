import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function OptionsForm(props) {

  // retrieves previous values from storage and puts them into form
  useEffect(() => {
    // can possibly switch to using state for the form input values for a more "react" solution, but this works fine
    // does not work: setting default value to a state, then setting the state to options.values
    let options = JSON.parse(sessionStorage.getItem('optionsGrid'));
    if (options) {
      document.getElementById('outer-shell-switch').checked=options.outerShellOnly;
      document.getElementById('initialGrayscale').checked=options.initialGrayscale;
      document.getElementById('rippleTransitionSpeed').value=(options.rippleTransitionSpeed * 1000);
      document.getElementById('ripplePropagation').value=options.ripplePropagation;
      document.getElementById('rippleSpeed').value=options.rippleSpeed;
      document.getElementById('rippleVariance').value=options.rippleVariance;
      document.getElementById('initialVariance').value=options.initialVariance;
      document.getElementById('maxGridSize').value=options.maxGridSize;
    }
  }, [])

  return (
    <Container>
      <Form onSubmit={props.handleFormSubmit} noValidate validated={props.validated}>

        <Form.Row>
          <Col>
            <Form.Group controlId='maxGridSize'>
              <Form.Label>Max Grid Size</Form.Label>
              <Form.Control
                type='number'
                placeholder='20'
                defaultValue='20'
                max='50'
                min='1'
              />
              <Form.Text>Enter a number from 1 to 50</Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId='initialVariance'>
              <Form.Label>Initial color variance</Form.Label>
              <Form.Control
                type='number'
                placeholder='50'
                defaultValue='50'
                min='0'
                max='255'
              />
              <Form.Text>Enter a number from 0 to 255</Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId='rippleVariance'>
              <Form.Label>Color variance of ripples</Form.Label>
              <Form.Control
                type='number'
                placeholder='100'
                defaultValue='100'
                min='0'
                max='255'
              />
              <Form.Text>Enter a number from 0 to 255</Form.Text>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId='rippleSpeed'>
              <Form.Label>Outward Ripple Speed (milliseconds)</Form.Label>
              <Form.Control
                type='number'
                placeholder='100'
                defaultValue='100'
                min='10'
                max='2000'
              />
              <Form.Text>Enter a number from 10 to 2000</Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId='ripplePropagation'>
              <Form.Label>Size of ripples</Form.Label>
              <Form.Control
                type='number'
                placeholder='3'
                min='1'
                max='25'
                defaultValue='3'
              />
              <Form.Text>Enter a number from 1 to 25 </Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId='rippleTransitionSpeed'>
              <Form.Label>Ripple color change speed (milliseconds)</Form.Label>
              <Form.Control
                type='number'
                placeholder='1500'
                defaultValue='1500'
                min='10'
                max='5000'
              />
              <Form.Text>Enter a number from 10 to 5000 </Form.Text>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          {/* <Form.Check
          type="switch"
          id="grayscaleChange"
          label="Color Changes are Grayscale"
          onClick={() => {}}
        /> */}
          <Col>
            <Form.Check
              type="switch"
              id="initialGrayscale"
              label="Grid is initially Grayscale"
              onClick={() => { }}
              defaultChecked={true}
            />
          </Col>

          {/* <Form.Check
          type="switch"
          id="auto-switch"
          label="Auto Drop"
          onClick={() => {}}
        /> */}

          <Col>
            <Form.Check
              type="switch"
              id="outer-shell-switch"
              label="Only Outer Shell Changes Color"
              defaultChecked={false}
              onClick={() => {}}
            />
          </Col>

        </Form.Row>
        <br />
        <Row>
          <Button type='submit' className='btn btn-success'>Generate grid with customized options</Button>
        </Row>
        {/* <Button className='btn btn-secondary'>Store Options (not yet functional)</Button> */}
        {/* <Button className='btn btn-secondary'>Load Options (not yet functional)</Button> */}
      </Form>

      {/* <Button className='btn btn-warning'>See stored color ripples in database (to be implemented)</Button> */}
    </Container>
  )
}