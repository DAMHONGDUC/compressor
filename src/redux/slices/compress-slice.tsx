import {createSlice} from '@reduxjs/toolkit';
import {CompressType} from 'constants/common';
import {ICompressType} from 'constants/common';
import {
  ICompressOption,
  compressImageOptions,
  CompressOption,
} from 'constants/common';

interface IAppStore {
  compressImageOptions: ICompressOption;
  currentOption: number;
  compressProgress: number;
  isDone: boolean;
}

const initialState: IAppStore = {
  compressImageOptions: compressImageOptions[0],
  currentOption: CompressOption.AUTO_COMPRESS,
  compressProgress: 0,
  isDone: false,
};

export const compressSlice = createSlice({
  name: 'compressSlice',
  initialState: initialState,
  reducers: {
    setCompressImageOptions: (state, action) => {
      state.compressImageOptions = action.payload;
    },
    setCurrentCompressOption: (state, action) => {
      state.currentOption = action.payload;
    },
    setCompressProgress: (state, action) => {
      state.compressProgress = action.payload;
    },
    setIsDone: (state, action) => {
      state.isDone = action.payload;
    },
  },
});

export const {
  setCompressImageOptions,
  setCurrentCompressOption,
  setCompressProgress,
  setIsDone,
} = compressSlice.actions;

export default compressSlice.reducer;
