import React from 'react';
import { render } from '../testUtils';
import { Welcome } from '../../pages/welcome';

describe('Welcome page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Welcome />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
