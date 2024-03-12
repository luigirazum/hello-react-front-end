import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../api/apiLibrary';

/** -----------------------------------------------------
 *   > Action type definitions
 *  ----------------------------------------------------- */
const FETCH_RANDOM = 'greetings/random';

/** -----------------------------------------------------
 *   > Action Thunks definitions
 *  ----------------------------------------------------- */
const fetchRandom = createAsyncThunk(
  FETCH_RANDOM,
  async (_, thunkAPI) => {
    try {
      const headersList = {
        Accept: 'application/json; charset=utf-8',
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': 'http://localhost:3001',
      };

      const reqOptions = {
        url: apiUrl,
        method: 'GET',
        headers: headersList,
      };

      const resp = await axios.request(reqOptions);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export { FETCH_RANDOM };

export { fetchRandom };
