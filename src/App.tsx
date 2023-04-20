import React, {useEffect} from 'react';
import {handlePermission} from 'helper';
import {NativeBaseProvider} from 'native-base';
import {customTheme} from 'constants/theme';
import RootNavigation from 'navigation/root-navigation';
import {store} from 'redux/stores/app-store';
import {Provider} from 'react-redux';

export default function App(): JSX.Element {
  useEffect(() => {
    handlePermission();
  });

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme}>
        <RootNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}

// RN fetch blob
// image crop picker
// rn video
// rn video control
//design https://www.uplabs.com/posts/video-compressor-app-ui-ux-design
