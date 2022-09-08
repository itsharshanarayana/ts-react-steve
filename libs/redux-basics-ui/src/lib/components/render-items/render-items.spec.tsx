import { render } from '@testing-library/react';

import RenderItems from './render-items';

describe('RenderItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RenderItems />);
    expect(baseElement).toBeTruthy();
  });
});
