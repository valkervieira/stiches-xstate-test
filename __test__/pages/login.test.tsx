import React from 'react';
import { render } from '../testUtils';
import { Login } from '../../pages/login';

describe('Login page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Login />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
