import React, {useEffect} from 'react';
import {handlePermission} from 'helper';
import {NativeBaseProvider} from 'native-base';
import {customTheme} from 'constants/theme';
import RootNavigation from 'navigation/root-navigation';

export default function App() {
  useEffect(() => {
    handlePermission();
  });

  return (
    <NativeBaseProvider theme={customTheme}>
      <RootNavigation />
    </NativeBaseProvider>
  );
}

// RN fetch blob
// image crop picker
// rn video
// rn video control
//design https://www.uplabs.com/posts/video-compressor-app-ui-ux-design
