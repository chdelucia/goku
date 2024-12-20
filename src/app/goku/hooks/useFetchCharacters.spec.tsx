import { act, renderHook } from '@testing-library/react';

import UseFetchCharacters from './useFetchCharacters';

describe('UseFetchCharacters', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => UseFetchCharacters());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
