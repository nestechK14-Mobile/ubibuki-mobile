import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { signInEmail, signInWithGoogle, signUpEmail } from '@/services/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpEmails: async (state, action) => {
      const { payload } = action;
      const { email, password } = payload;

      state.loading = true;

      try {
        const response = await signUpEmail(email, password);
        if (response) {
          const { user } = response;
          state.user = user;
          state.loading = false;
        }
      } catch (error) {
        state.errorMessage = error;
        state.loading = false;
      }
    },
    signInEmails: async (state, action) => {
      const { payload } = action;
      const { email, password } = payload;
      try {
        const response = await signInEmail(email, password);
        if (response) {
          const { user } = response;
          state.user = user;
          state.loading = false;
        }
      } catch (error) {
        state.errorMessage = error;
        state.loading = false;
      }
    },
    signInGoogle: async (state, action) => {
      console.log(action, 'action');
      state.loading = true;
      try {
        const response = await signInWithGoogle();
        if (response) {
          // state.loading = true;
          console.log(JSON.parse(response), 'res');
        }
      } catch (error) {
        state.errorMessage = error;
        state.loading = false;
      }
    }
  }
});

export const { signUpEmails, signInEmails, signInGoogle } = authSlice.actions;

export default authSlice.reducer;
