import {createSlice} from '@reduxjs/toolkit';
import {CompressType} from 'constants/common';
import {ICompressType} from 'constants/common';

interface IAppStore {
  compressType?: ICompressType;
  filesPath?: string[];
}

const initialState: IAppStore = {
  filesPath: [],
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: initialState,
  reducers: {
    setCompressType: (state, action) => {
      state.compressType = action.payload;
    },
    setFilesPath: (state, action) => {
      state.filesPath = action.payload;
    },
  },
});

export const {setCompressType, setFilesPath} = appSlice.actions;

export default appSlice.reducer;
