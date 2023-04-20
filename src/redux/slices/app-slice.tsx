import {createSlice} from '@reduxjs/toolkit';
import {CompressMode} from 'constants/common';

interface IAppStore {
  mode: number;
}

const initialState: IAppStore = {
  mode: CompressMode.NONE,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const {setMode} = appSlice.actions;

export default appSlice.reducer;
