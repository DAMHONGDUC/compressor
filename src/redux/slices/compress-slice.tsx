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
}

const initialState: IAppStore = {
  compressImageOptions: compressImageOptions[0],
  currentOption: CompressOption.AUTO_COMPRESS,
};

export const compressSlice = createSlice({
  name: 'compressSlice',
  initialState: initialState,
  reducers: {
    setCompressImageOptions: (state, action) => {
      state.compressImageOptions = action.payload;
    },
    setCurrentOption: (state, action) => {
      state.currentOption = action.payload;
    },
  },
});

export const {setCompressImageOptions, setCurrentOption} =
  compressSlice.actions;

export default compressSlice.reducer;
