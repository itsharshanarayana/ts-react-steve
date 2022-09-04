import { render } from '@testing-library/react';

import DeptInventory from './dept-inventory';

describe('DeptInventory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeptInventory />);
    expect(baseElement).toBeTruthy();
  });
});
