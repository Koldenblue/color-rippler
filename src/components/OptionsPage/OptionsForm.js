import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function OptionsForm(props) {
  return (
    <Container>
      <Form inline onSubmit={props.handleFormSubmit} noValidate validated={props.validated}>

      <Row>
        <Form.Group controlId='maxGridSize'>
          <Col >
            <Form.Label>Max Grid Size</Form.Label>
          </Col>
          <Col >
            <Form.Control
              type='number'
              placeholder='20'
              defaultValue='20'
              max='50'
              min='1'
            />
          </Col>
          <Col >
            <Form.Text>Enter a number from 1 to 50</Form.Text>
          </Col>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group controlId='initialVariance'>
          <Col>
            <Form.Label>Initial color variance</Form.Label>
          </Col>
          <Col >
            <Form.Control
              type='text'
              placeholder='50'
              defaultValue='50'
              min='0'
              max='255'
            />
          </Col>
          <Col>
            <Form.Text>Enter a number from 0 to 255</Form.Text>
          </Col>
        </Form.Group>
      </Row>

    <Row>
        <Form.Group controlId='rippleVariance'>
          <Col>
            <Form.Label>Color variance of ripples</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type='text'
              placeholder='100'
              defaultValue='100'
              min='0'
              max='255'
            />
          </Col>
          <Col>
            <Form.Text>Enter a number from 0 to 255</Form.Text>
          </Col>
        </Form.Group>
      </Row>

<Row>
        <Form.Group controlId='rippleSpeed'>
          <Col>
            <Form.Label>Outward Ripple Speed (milliseconds)</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type='text'
              placeholder='100'
              defaultValue='100'
              min='10'
              max='2000'
            />
          </Col>
          <Col>
            <Form.Text>Enter a number from 10 to 2000</Form.Text>
          </Col>
        </Form.Group>
</Row>

<Row>
        <Form.Group controlId='ripplePropagation'>
          <Col>
            <Form.Label>Size of ripples</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type='text'
              placeholder='5'
              min='1'
              max='25'
              defaultValue='5'
            />
          </Col>
          <Col>
            <Form.Text>Enter a number from 1 to 25 </Form.Text>
          </Col>
        </Form.Group>
        </Row>

<Row>
        <Form.Group controlId='`rippleTransitionSpeed'>
          <Col>
            <Form.Label>Ripple color change speed (milliseconds)</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type='number'
              placeholder='1500'
              defaultValue='1500'
              min='10'
              max='5000'
            />
          </Col>
          <Col>
            <Form.Text>Enter a number from 10 to 5000 </Form.Text>
          </Col>
        </Form.Group>
</Row>

        {/* <Form.Check
          type="switch"
          id="initialGrayscale"
          label="Grayscale"
          onClick={() => {}}
        />

        <Form.Check
          type="switch"
          id="grayscaleChange"
          label="Grayscale"
          onClick={() => {}}
        />

        <Form.Check
          type="switch"
          id="auto-switch"
          label="Auto Drop"
          onClick={() => {}}
        />

        <Form.Check
          type="switch"
          id="outer-shell-switch"
          label="Only Outer Shell Changes Color"
          onClick={() => props.handleShellSwitch()}
        /> */}
        <Col sm={12}>
          <Button type='submit' className='btn btn-success'>Generate grid with selected options</Button>
        </Col>
        {/* <Button className='btn btn-secondary'>Store Options (not yet functional)</Button> */}
        {/* <Button className='btn btn-secondary'>Load Options (not yet functional)</Button> */}
      </Form>

      {/* <Button className='btn btn-warning'>See stored color ripples in database (to be implemented)</Button> */}
    </Container>
  )
}