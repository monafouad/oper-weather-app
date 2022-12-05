export const initialState: string = '';
export const SET_LOCATION: string = 'SET_LOCATION';

export function locationReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOCATION:
      state = action.payload;

      return state;
    default:

      return state;
  }
}
