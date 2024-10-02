import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/25 React Projects/i);
  expect(linkElement).toBeInTheDocument();
});
