import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userSlice = createSlice({
  name: 'userReducer',
  initialState: initialState,
  reducers: {
    addUserAction(state, action) {
      state.contacts.push(action.payload);
    },
    delUserAction(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addUserAction, delUserAction } = userSlice.actions;
export const userReducer = userSlice.reducer;
