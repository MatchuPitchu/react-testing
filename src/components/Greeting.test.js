import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as a text', () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...nothing

  // Assert
  // get fns throw error if element is not found, query fns won't and
  // find fns return a promise (-> for case if element is eventually on the screen)
  // exact: false -> casing doesn't matter and match occurs also for substrings
  const element = screen.getByText('Hello World', { exact: false });
  // expect is globally available
  expect(element).toBeInTheDocument();
});
