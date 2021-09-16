import uiReducer, { setLoading } from './uiSlice';

describe('uiReducer 에서', () => {
  context('isLoading 프로퍼티의', () => {
    it('값이 정상적으로 추가된다', () => {
      const initialState = {
        isLoading: false,
      };

      const state = uiReducer(
        initialState,
        setLoading({
          isLoading: true,
        }),
      );

      expect(state.isLoading).toEqual(true);
    });
  });
});
