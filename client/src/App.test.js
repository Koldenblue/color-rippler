import { getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import OptionsPage from './components/OptionsPage/OptionsPage';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


test('renders options title', () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <OptionsPage />
          </Router>
      </Provider>
    </React.StrictMode>
  );
  const ele = screen.getAllByText(/Color Rippler/i);
  expect(ele[0]).toBeInTheDocument();
});


test('renders grid', () => {

})

test('grid changes upon click', () => {

})

test('can get a color', () => {

})