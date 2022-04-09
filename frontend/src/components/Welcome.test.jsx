import React from 'react';
import { render } from '@testing-library/react';
import Welcome from "./Welcome";

test('renders welcome', () => {
  const { getByText } = render(<Welcome />);
  const h1Element = getByText(/Auction Example/i);
  expect(h1Element).toBeInTheDocument();
});
