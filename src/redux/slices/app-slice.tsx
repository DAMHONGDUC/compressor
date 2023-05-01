import {createSlice} from '@reduxjs/toolkit';
import {CompressMode} from 'constants/common';
import {IModalOption} from 'constants/common';

interface IAppStore {
  compressOption?: IModalOption;
  filesPath?: string[];
}

const initialState: IAppStore = {
  filesPath: [],
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: initialState,
  reducers: {
    setCompressOption: (state, action) => {
      state.compressOption = action.payload;
    },
    setFilesPath: (state, action) => {
      state.filesPath = action.payload;
    },
  },
});

export const {setCompressOption, setFilesPath} = appSlice.actions;

export default appSlice.reducer;
