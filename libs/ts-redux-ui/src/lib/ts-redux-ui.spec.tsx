import { render } from '@testing-library/react';

import TsReduxUi from './ts-redux-ui';

describe('TsReduxUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TsReduxUi />);
    expect(baseElement).toBeTruthy();
  });
});
