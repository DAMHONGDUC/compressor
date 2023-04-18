import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {handlePermission} from 'helper';

export default function App() {
  useEffect(() => {
    handlePermission();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#f00',
    fontSize: 30,
  },
});

// RN fetch blob
// image crop picker
// rn video
// rn video control
//design https://www.uplabs.com/posts/video-compressor-app-ui-ux-design
