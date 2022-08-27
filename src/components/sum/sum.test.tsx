import React from 'react';
import { render, screen } from '@testing-library/react';
import Sum from './sum';

test('renders learn react link', () => {
  render(<Sum />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
