import { render } from '@testing-library/react';

import ReduxUi from './redux-ui';

describe('ReduxUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReduxUi />);
    expect(baseElement).toBeTruthy();
  });
});
