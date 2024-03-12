import { createSlice } from '@reduxjs/toolkit';
import { fetchRandom } from './greetingsActions';

/** --------------------------------------------------
 *   > Set initialState for message
 *  -------------------------------------------------- */
const initialState = {
  message: null,
  status: { type: 'idle' },
  error: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
  /** ------------------------------------------
   *   > when we launch the request
   *  ------------------------------------------ */
    .addCase(fetchRandom.pending,
      (state) => (
        {
          ...state,
          status: { type: 'loading' },
          error: null,
        }
      ))
  /** ------------------------------------------
   *   > if the message is retrieved
   *  ------------------------------------------ */
    .addCase(fetchRandom.fulfilled,
      (state, { payload: { data } }) => (
        {
          ...state,
          ...data,
          status: { type: 'idle' },
          error: null,
        }
      ))
  /** ------------------------------------------
   *   > if something happens
   *  ------------------------------------------ */
    .addCase(fetchRandom.rejected,
      (state, { payload }) => (
        {
          ...state,
          status: { type: 'idle' },
          ...payload,
        }
      )),
});

export default messageSlice.reducer;
