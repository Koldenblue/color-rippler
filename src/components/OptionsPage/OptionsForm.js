import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function OptionsForm(props) {
  return (
    <section className='container'>
      <Form inline onSubmit={props.handleFormSubmit} noValidate validated={props.validated}>

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

        <Form.Group controlId='initialVariance'>
          <Form.Label>Initial color variance</Form.Label>
          <Form.Control
            type='text'
            placeholder='50'
            defaultValue='50'
            min='0'
            max='255'
          />
          <Form.Text>Enter a number from 0 to 255</Form.Text>
        </Form.Group>

        <Form.Group controlId='rippleVariance'>
          <Form.Label>Color variance of ripples</Form.Label>
          <Form.Control
            type='text'
            placeholder='100'
            defaultValue='100'
            min='0'
            max='255'
          />
          <Form.Text>Enter a number from 0 to 255</Form.Text>
        </Form.Group>

        <Form.Group controlId='rippleSpeed'>
          <Form.Label>Outward Ripple Speed (milliseconds)</Form.Label>
          <Form.Control
            type='text'
            placeholder='100'
            defaultValue='100'
            min='10'
            max='2000'
            />
          <Form.Text>Enter a number from 10 to 2000</Form.Text>
        </Form.Group>

        <Form.Group controlId='ripplePropagation'>
          <Form.Label>Size of ripples</Form.Label>
          <Form.Control
            type='text'
            placeholder='5'
            min='1'
            max='25'
            defaultValue='5'
          />
          <Form.Text>Enter a number from 1 to 25 </Form.Text>
        </Form.Group>

        <Form.Group controlId='`rippleTransitionSpeed'>
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


        <Form.Check
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
        />
        <Button type='submit' className='btn btn-success'>Generate grid with selected options (not yet functional)</Button>
        <Button className='btn btn-secondary'>Store Options (not yet functional)</Button>
        <Button className='btn btn-secondary'>Load Options (not yet functional)</Button>
      </Form>

      <Button className='btn btn-warning'>See stored color ripples in database (to be implemented)</Button>
    </section>
  )
}