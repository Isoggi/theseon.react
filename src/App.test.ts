import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders theseon.link', () => {
  const { getByText } = render(React.createElement(App));
  const linkElement = getByText(/theseon./i);
  expect(linkElement).toBeDefined();
});
