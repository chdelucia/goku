import { render } from '@testing-library/react';

import CharacterCard from './characterCard';

describe('CharacterCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CharacterCard />);
    expect(baseElement).toBeTruthy();
  });
});
