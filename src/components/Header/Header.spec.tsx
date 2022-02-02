import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('Should render with logo without crash', () => {
    const { queryByLabelText } = render(<Header />);

    expect(queryByLabelText('Warren Logo')).toBeInTheDocument();
  });
});
