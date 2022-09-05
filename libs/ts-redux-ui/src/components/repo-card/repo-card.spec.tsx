import { render } from '@testing-library/react';

import RepoCard from './repo-card';

describe('RepoCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RepoCard />);
    expect(baseElement).toBeTruthy();
  });
});
