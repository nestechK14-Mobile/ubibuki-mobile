import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { ACTION_AUTHENTICATION } from './actionTypes';
import { signUpEmail } from '@/services/auth';

export const signUpWithEmail = createAsyncThunk(ACTION_AUTHENTICATION.SIGN_UP, async params => {
  const { email, password } = params;
  console.log('email', email);
  console.log('password', password);
  const response = await signUpEmail(email, password);
  console.log(response);

  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

export default authSlice.reducer;
