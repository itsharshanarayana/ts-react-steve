import { render } from '@testing-library/react';

import WidgetsUi from './widgets-ui';

describe('WidgetsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WidgetsUi />);
    expect(baseElement).toBeTruthy();
  });
});
