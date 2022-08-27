import React from 'react';
import { render, screen } from '@testing-library/react';
import Sum from './sum';

test('renders learn react link', () => {
  render(<Sum />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('find pairs for expected sum', () => {
  render(<Sum />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
