import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn 15 react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
