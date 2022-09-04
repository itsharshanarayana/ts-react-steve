import { render } from '@testing-library/react';

import SemanticDropdown from './semantic-dropdown';

describe('SemanticDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SemanticDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
