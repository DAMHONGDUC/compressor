import Permission, {
  Permission as PermissionType,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Image as ImageCompress} from 'react-native-compressor';

const requestPermission = async (permission: PermissionType) => {
  const checkPermission = await Permission.check(permission);

  if (checkPermission !== RESULTS.BLOCKED) {
    await Permission.request(permission);
  }
};

export const handlePermission = async () => {
  if (Platform.OS === 'android') {
    // Starting in API level 29 (android 10), apps don't need to request this permission to access files in their app-specific directory on external storage, or their own files in the MediaStore
    await requestPermission(
      Permission.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    );
  }
};

export const pickDocument = async () => {
  try {
    const document = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.images, DocumentPicker.types.video],
    });

    console.log(document[0].uri);

    const result = await ImageCompress.compress(document[0].uri, {
      maxWidth: 1000,
      quality: 0.8,
    });

    console.log({result});
  } catch (err) {
    console.log({err});
  }
};

// export const compressFile = async (
//   uriInput: string,
//   name: string,
//   type: string,
// ) => {
//   if (isImage(type)) return compressImage(uriInput, name);
//   else return uriInput;
// };

// const compressImage = async (uriInput: string, name: string) => {
//   try {
//     let imageResizeConfig = store.getState().auth.userData
//       ?.imageResizeConfig ?? {
//       maxWidth: IMAGE_UPLOAD_MAX_WIDTH,
//       maxHeight: IMAGE_UPLOAD_MAX_HEIGHT,
//       quality: IMAGE_UPLOAD_QUALITY,
//       sizeToTrigger: SIZE_TO_TRIGGER,
//     };
//     const imageCompressOption = {
//       maxWidth:
//         imageResizeConfig.maxWidth === -1
//           ? IMAGE_UPLOAD_MAX_WIDTH
//           : imageResizeConfig.maxWidth,
//       maxHeight:
//         imageResizeConfig.maxHeight === -1
//           ? IMAGE_UPLOAD_MAX_HEIGHT
//           : imageResizeConfig.maxHeight,
//       quality: imageResizeConfig.quality,
//     };

//     const isAndroid = Platform.OS === 'android';

//     let uri = isAndroid ? uriInput : uriInput.replace('file://', '');
//     if (isAndroid && uri.includes('com.android.providers.downloads')) {
//       uri = `${RNFetchBlob.fs.dirs.DownloadDir}/${name}`;
//     }

//     const stat = await RNFetchBlob.fs.stat(
//       isAndroid ? uri : uri.replace('file://', ''),
//     );

//     if (stat.size > imageResizeConfig.sizeToTrigger) {
//       const cacheName = `${name}_${Date.now()}`;
//       const destPath = `${RNFetchBlob.fs.dirs.CacheDir}/${cacheName}`;
//       store.dispatch(addListCacheImageCompress(cacheName));

//       await RNFetchBlob.fs.cp(uri, destPath);

//       console.log(uri);
//       const result = await ImageCompress.compress(
//         destPath,
//         imageCompressOption,
//       );

//       return result;
//     }
//     return uriInput;
//   } catch (err) {}
// };

// export const deleteCompressedCache = async () => {
//   try {
//     const listCacheImageCompress =
//       store.getState().appInfo.listCacheImageCompress;

//     await Promise.all(
//       listCacheImageCompress.map(async e => {
//         const destPath = `${RNFetchBlob.fs.dirs.CacheDir}/${e}`;
//         const destPathExist = await RNFetchBlob.fs.exists(destPath);

//         if (destPathExist) await RNFetchBlob.fs.unlink(destPath);
//       }),
//     );
//   } catch (err) {}
// };