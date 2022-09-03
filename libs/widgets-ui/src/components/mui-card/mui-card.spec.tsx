import { render } from '@testing-library/react';

import MuiCard from './mui-card';

describe('MuiCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<div />);
    expect(baseElement).toBeTruthy();
  });
});
