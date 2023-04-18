import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useScreenDimensions} from 'hooks/useScreenDimensions';
import RNFetchBlob from 'rn-fetch-blob';
import Permission, {
  Permission as PermissionType,
  RESULTS,
} from 'react-native-permissions';

export default function App() {
  const {width, height} = useScreenDimensions();

  const requestPermission = async (permission: PermissionType) => {
    const checkPermission = await Permission.check(permission);

    if (
      checkPermission === RESULTS.GRANTED ||
      checkPermission === RESULTS.LIMITED
    )
      return true;
    else {
      const reqPermission = await Permission.request(permission);

      console.log({reqPermission});
    }
  };
  useEffect(() => {
    // const per = async () => {
    //   let permissions = [
    //     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   ];

    //   let status = await PermissionsAndroid.requestMultiple(permissions);

    //   if ((status = PermissionsAndroid.RESULTS.GRANTED)) {
    //     // granted
    //     console.log('granted: ', status);
    //   } else {
    //     // Not granted
    //     console.log('not granted: ', status);
    //   }
    // };

    // per();
    const handlePermission = async () => {
      const result1 = await requestPermission(
        Permission.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );
      const result2 = await requestPermission(
        Permission.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      console.log(result1, result2);
    };

    handlePermission();
  });

  useEffect(() => {
    const a = async () => {
      const data = await RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.DownloadDir);
      console.log(data);
    };

    a();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>height: {height}</Text>
      <Text style={[styles.text, {color: '#6DA9E4'}]}>width: {width}</Text>
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
