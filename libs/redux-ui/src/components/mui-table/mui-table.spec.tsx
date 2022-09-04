import { render } from '@testing-library/react';

import MuiTable from './mui-table';

describe('MuiTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiTable />);
    expect(baseElement).toBeTruthy();
  });
});
