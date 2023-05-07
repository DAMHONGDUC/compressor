import {useState, useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from 'redux/stores/app-store';
import {CompressType} from 'constants/common';
import {TOTAL_PROGRESS} from 'constants/common';
import {setIsDone} from 'redux/slices/compress-slice';

export const useCompressProgress = (compressType: CompressType) => {
  const [fakeProgress, setFakeProgress] = useState<number>(0);
  const {compressProgress} = useAppSelector(state => state.compress);
  const isCompressImage = compressType === CompressType.COMPRESS_IMAGE;
  const dispath = useAppDispatch();
  const refInterval = useRef<number>();

  useEffect(() => {
    if (isCompressImage) {
      refInterval.current = setInterval(() => {
        if (fakeProgress < TOTAL_PROGRESS) setFakeProgress(fakeProgress + 25);
      }, 1000);
    }

    return () => {
      if (refInterval.current) clearInterval(refInterval.current);
    };
  }, [isCompressImage, fakeProgress]);

  useEffect(() => {
    if (
      fakeProgress === TOTAL_PROGRESS ||
      compressProgress === TOTAL_PROGRESS
    ) {
      dispath(setIsDone(true));
    }
  }, [fakeProgress, compressProgress]);

  return isCompressImage ? fakeProgress : compressProgress;
};
