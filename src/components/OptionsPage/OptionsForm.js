import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function OptionsForm(props) {
  return (
    <section className='container'>
      <Form inline onSubmit={props.handleFormSubmit}>

        <Form.Group controlId='maxGridSize'>
          <Form.Label>Max Grid Size</Form.Label>
          <Form.Control
            type='text'
            placeholder='20'
          />
        </Form.Group>

        <Form.Group controlId='initialVariance'>
          <Form.Label>Initial color variance</Form.Label>
          <Form.Control
            type='text'
            placeholder='50'
          />
        </Form.Group>

        <Form.Group controlId='rippleVariance'>
          <Form.Label>Color variance of ripples</Form.Label>
          <Form.Control
            type='text'
            placeholder='100'
          />
        </Form.Group>

        <Form.Group controlId='rippleSpeed'>
          <Form.Label>Ripple Speed (milliseconds)</Form.Label>
          <Form.Control
            type='text'
            placeholder='100'
          />
        </Form.Group>

        <Form.Group controlId='ripplePropagation'>
          <Form.Label>Size of ripples</Form.Label>
          <Form.Control
            type='text'
            placeholder='5'
          />
        </Form.Group>

        <Form.Group controlId='`ripplePr`opagation'>
          <Form.Label>Ripple color change speed</Form.Label>
          <Form.Control
            type='text'
            placeholder='5'
          />
        </Form.Group>


        <Form.Check
          type="switch"
          id="grayscale-switch"
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
        <Button type='submit' className='btn btn-success'>submit form</Button>
      </Form>
    </section>
  )
}