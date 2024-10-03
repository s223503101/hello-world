import { render, screen } from '@testing-library/react';
import App from './App';

// Test to check if the title renders
test('renders expense tracker title', () => {
  render(<App />);
  const titleElement = screen.getByText(/expense tracker/i);
  expect(titleElement).toBeInTheDocument();
});

// Test to check if the balance is rendered correctly
test('renders balance', () => {
  render(<App />);
  const balanceText = screen.getByText(/your balance/i);
  expect(balanceText).toBeInTheDocument();
});
