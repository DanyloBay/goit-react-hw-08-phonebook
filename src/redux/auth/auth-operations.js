import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Report } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = createAsyncThunk('auth/register', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token);
    return data;
  } catch (error) {
    Report.warning('Data entered incorrectly.', 'Try again!');
  }
});

const loginUser = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('users/login', user);
    token.set(data.token);
    return data;
  } catch (error) {
    Report.warning('Email or password entered incorrectly.', 'Try again!');
  }
});

const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    Report.warning('Not logout.', 'Try again!');
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);

  try {
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default operations;
