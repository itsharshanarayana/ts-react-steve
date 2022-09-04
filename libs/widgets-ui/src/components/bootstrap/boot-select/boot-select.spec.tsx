import { render } from '@testing-library/react';

import BootSelect from './boot-select';

describe('BootSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BootSelect />);
    expect(baseElement).toBeTruthy();
  });
});
