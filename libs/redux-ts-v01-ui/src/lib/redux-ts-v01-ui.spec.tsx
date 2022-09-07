import { render } from '@testing-library/react';

import ReduxTsV01Ui from './redux-ts-v01-ui';

describe('ReduxTsV01Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReduxTsV01Ui />);
    expect(baseElement).toBeTruthy();
  });
});
