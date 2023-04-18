import React, {useEffect} from 'react';
import {handlePermission} from 'helper';
import {NativeBaseProvider} from 'native-base';
import HomeScreen from 'screen/home/home-screen';
import {customTheme} from 'constants/theme';

export default function App() {
  useEffect(() => {
    handlePermission();
  });

  return (
    <NativeBaseProvider theme={customTheme}>
      <HomeScreen />
    </NativeBaseProvider>
  );
}

// RN fetch blob
// image crop picker
// rn video
// rn video control
//design https://www.uplabs.com/posts/video-compressor-app-ui-ux-design
