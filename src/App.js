import React from 'react';
import { render } from '@testing-library/react';
import App from '../App'; // Make sure the relative path is correct

test('renders the app component', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Hello, World!/i)).toBeInTheDocument(); // Adjust text as needed
});
