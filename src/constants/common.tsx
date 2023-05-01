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
  index: number;
  title: string;
  mode: number;
  icon: any;
  iconName: string;
  iconSize: string;
}

export const compressOptions: IModalOption[] = [
  {
    index: 1,
    title: 'Image',
    mode: CompressMode.REDUCE_FILE_SIZE_IMAGE,
    icon: Ionicons,
    iconName: 'image',
    iconSize: '7',
  },
  {
    index: 2,
    title: 'Video',
    mode: CompressMode.REDUCE_FILE_SIZE_VIDEO,
    icon: MaterialIcons,
    iconName: 'video-collection',
    iconSize: '7',
  },
  {
    index: 3,
    title: 'Compress files',
    mode: CompressMode.COMPRESS_FILES,
    icon: MaterialIcons,
    iconName: 'compress',
    iconSize: '7',
  },
];
