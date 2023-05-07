import Permission, {
  Permission as PermissionType,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Image as ImageCompress} from 'react-native-compressor';
import {CompressType} from 'constants/common';
import {store} from 'redux/stores/app-store';
import {setFilesPath} from 'redux/slices/app-slice';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

export const pickDocument = async (mode: number) => {
  try {
    let type: string = DocumentPicker.types.allFiles;

    switch (mode) {
      case CompressType.COMPRESS_IMAGE:
        type = DocumentPicker.types.images;
        break;
      case CompressType.COMPRESS_VIDEO:
        type = DocumentPicker.types.video;
        break;
      case CompressType.ARCHIVE_FILES:
        type = DocumentPicker.types.allFiles;
        break;
    }

    const filesPath = await DocumentPicker.pickMultiple({
      type: type,
    });

    console.log(filesPath);

    store.dispatch(setFilesPath(filesPath));

    return true;
  } catch (err) {
    console.log({err});
  }
};

export const getViewBoxIcon = (type: string) => {
  switch (type) {
    case 'Feather':
      return Feather;
    case 'MaterialIcons':
      return MaterialIcons;
    case 'Octicons':
      return Octicons;
    case 'Ionicons':
      return Ionicons;
  }
};
