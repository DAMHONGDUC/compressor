export enum CompressMode {
  NONE = 0,
  REDUCE_FILE_SIZE_IMAGE = 1,
  REDUCE_FILE_SIZE_VIDEO = 2,
  COMPRESS_FILES = 3,
}

export interface IModalOption {
  title: string;
  mode: number;
  icon: string;
  iconName: string;
}

export const compressOptions: IModalOption[] = [
  {
    title: 'Reduce Image Quality',
    mode: CompressMode.REDUCE_FILE_SIZE_IMAGE,
    icon: 'Ionicons',
    iconName: 'image',
  },
  {
    title: 'Reduce Video Quality',
    mode: CompressMode.REDUCE_FILE_SIZE_VIDEO,
    icon: 'MaterialIcons',
    iconName: 'video-collection',
  },
  {
    title: 'Compress files (zip, rar)',
    mode: CompressMode.COMPRESS_FILES,
    icon: 'MaterialIcons',
    iconName: 'compress',
  },
];
