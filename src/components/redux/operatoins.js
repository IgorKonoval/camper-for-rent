import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllCampers } from '../Api';

axios.defaults.baseURL = 'https://6587edfb90fa4d3dabf94208.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'adverts/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await getAllCampers({ page, limit });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
