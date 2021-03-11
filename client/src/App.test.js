import { getByTestId, render, screen } from '@testing-library/react';
import OptionsPage from './components/OptionsPage/OptionsPage';

test('renders options title', () => {
  render(<OptionsPage />);
  const ele = screen.getAllByText(/Color Rippler/i);
  expect(ele[0]).toBeInTheDocument();
});

test('renders grid', () => {

})

test('grid changes upon click', () => {

})

test('can get a color', () => {

})