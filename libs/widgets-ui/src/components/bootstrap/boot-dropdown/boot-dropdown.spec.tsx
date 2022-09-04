import { render } from '@testing-library/react';

import BootDropdown from './boot-dropdown';

describe('BootDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BootDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
