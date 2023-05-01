import Ionicons from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export enum CompressMode {
  NONE = 0,
  REDUCE_FILE_SIZE_IMAGE = 1,
  REDUCE_FILE_SIZE_VIDEO = 2,
  COMPRESS_FILES = 3,
}

export interface IModalOption {
  title: string;
  mode: number;
  icon: any;
  iconName: string;
}

export const compressOptions: IModalOption[] = [
  {
    title: 'Reduce Image Quality',
    mode: CompressMode.REDUCE_FILE_SIZE_IMAGE,
    icon: Ionicons,
    iconName: 'image',
  },
  {
    title: 'Reduce Video Quality',
    mode: CompressMode.REDUCE_FILE_SIZE_VIDEO,
    icon: MaterialIcons,
    iconName: 'video-collection',
  },
  {
    title: 'Compress files (zip, rar)',
    mode: CompressMode.COMPRESS_FILES,
    icon: MaterialIcons,
    iconName: 'compress',
  },
];
