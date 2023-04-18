import Permission, {
  Permission as PermissionType,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';

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
