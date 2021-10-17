import React from 'react';
import { render } from '../testUtils';
import { Register } from '../../pages/register';

describe('Register page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Register />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
