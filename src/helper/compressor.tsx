import Permission, {
  Permission as PermissionType,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {Image as ImageCompress} from 'react-native-compressor';
import RNFetchBlob from 'rn-fetch-blob';
import {isImageFile} from 'helper';
import {store} from 'redux/stores/app-store';

export enum DocumentType {
  IMAGE = 'image/',
  VIDEO = 'video/',
  ALL = '*/*',
}

class CompressorClass {
  constructor() {}

  compressFile = async (input: DocumentPickerResponse[]) => {
    if (isImageFile(input[0].type!)) {
      return await this.compressImage(input[0].uri!, input[0].name!);
    }
  };

  compressImage = async (uriInput: string, name: string) => {
    let imageResizeConfig = {
      maxWidth: 1024,
      maxHeight: 1024,
      quality: 0.5,
    };

    const isAndroid = Platform.OS === 'android';

    let uri = isAndroid ? uriInput : uriInput.replace('file://', '');
    if (isAndroid && uri.includes('com.android.providers.downloads')) {
      uri = `${RNFetchBlob.fs.dirs.DownloadDir}/${name}`;
    }

    try {
      //store.dispatch(addListCacheImageCompress(cacheName));

      const result = await ImageCompress.compress(uriInput, imageResizeConfig);

      return result;
    } catch (err) {}

    return uriInput;
  };

  compressVideo = async () => {};

  archiveFiles = async () => {};

  deleteCompressedCache = async () => {
    try {
      const listCacheImageCompress: any[] = [];
      //store.getState().appInfo.listCacheImageCompress;

      await Promise.all(
        listCacheImageCompress.map(async e => {
          const destPath = `${RNFetchBlob.fs.dirs.CacheDir}/${e}`;
          const destPathExist = await RNFetchBlob.fs.exists(destPath);

          if (destPathExist) await RNFetchBlob.fs.unlink(destPath);
        }),
      );
    } catch (err) {}
  };
}

export const CompressorHelper = new CompressorClass();
