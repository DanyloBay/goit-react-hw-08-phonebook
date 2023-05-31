import { createSlice } from '@reduxjs/toolkit';
import operations from './auth-operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [operations.loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [operations.loginUser.rejected](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },

    [operations.logoutUser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [operations.getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },

    [operations.getCurrentUser.rejected](state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },

    [operations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
  },
});

export const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
