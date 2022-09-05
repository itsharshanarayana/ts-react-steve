import { render } from '@testing-library/react';

import ReduxThunkUi from './redux-thunk-ui';

describe('ReduxThunkUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReduxThunkUi />);
    expect(baseElement).toBeTruthy();
  });
});
