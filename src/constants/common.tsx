export enum CompressType {
  NONE = 0,
  COMPRESS_IMAGE = 1,
  COMPRESS_VIDEO = 2,
  ARCHIVE_FILES = 3,
}

export enum CompressOption {
  NONE = 0,
  AUTO_COMPRESS = 1,
  CUSTOM_COMPRESS = 2,
}

export interface ICompressOption {
  type: number;
  title: string;
  subTitle: string;
}

export interface ICompressType {
  title: string;
  type: number;
  icon: string;
  iconName: string;
}

export const compressTypes: ICompressType[] = [
  {
    title: 'Compress Image',
    type: CompressType.COMPRESS_IMAGE,
    icon: 'Ionicons',
    iconName: 'image',
  },
  {
    title: 'Compress Video',
    type: CompressType.COMPRESS_VIDEO,
    icon: 'MaterialIcons',
    iconName: 'video-collection',
  },
  {
    title: 'Archive files (zip, rar)',
    type: CompressType.ARCHIVE_FILES,
    icon: 'MaterialIcons',
    iconName: 'compress',
  },
];

export const compressImageOptions: ICompressOption[] = [
  {
    type: CompressOption.AUTO_COMPRESS,
    title: 'Auto compression',
    subTitle: 'Medium file size, medium quality',
  },
  {
    type: CompressOption.CUSTOM_COMPRESS,
    title: 'Custom',
    subTitle: 'Chosse your own settings',
  },
];

export const TOTAL_PROGRESS = 100;
