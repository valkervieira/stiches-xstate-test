import React from 'react';
import { render } from '../testUtils';
import { Home } from '../../pages/index';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders at least one h1', () => {
    const { getByRole } = render(<Home />, {});
    const h1 = getByRole('heading', { level: 1 });
    expect(h1).toBeTruthy();
  });

  it('renders only one h1', () => {
    const { getAllByRole } = render(<Home />, {});
    const h1Collection = getAllByRole('heading', { level: 1 });
    expect(h1Collection).toHaveLength(1);
  });
});
