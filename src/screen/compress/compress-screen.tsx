import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'redux/stores/app-store';
import CompressHeader from 'components/compress-header/compress-header';
import {Box} from 'native-base';
import CompressOptionRow from './compress-option-row';
import {
  compressImageOptions,
  CompressOption,
  CompressType,
} from 'constants/common';
import PrimaryButton from 'components/button/primary-button';
import {CompressorHelper} from 'helper/compressor';
import {setCurrentCompressOption} from 'redux/slices/compress-slice';
import ProgressModal from 'components/progress-modal/progress-modal';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from 'navigation/styles';

export default function CompressScreen(): JSX.Element {
  const {compressType, filesPath} = useAppSelector(state => state.app);
  const [currentOption, setCurrentOption] = useState<number>(
    CompressOption.AUTO_COMPRESS,
  );
  const [showProgressModal, setShowProgressModal] = useState<boolean>(false);
  const dispath = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const onContinue = async () => {
    dispath(setCurrentCompressOption(currentOption));
    setShowProgressModal(compressType?.type! !== CompressType.COMPRESS_IMAGE);

    const result = await CompressorHelper.compressFile(filesPath!);

    if (result) {
      navigation.navigate('CompressResultScreen');
      console.log({result});
    }
  };

  const onCancelProgress = () => {
    setShowProgressModal(false);
  };

  const onBack = () => {
    navigation.pop();
  };

  return (
    <Box
      justifyContent={'space-between'}
      backgroundColor={'primary.50'}
      flex={1}
      padding={3}>
      <CompressHeader
        iconName={'ios-chevron-back-circle'}
        heading={compressType!.title}
        onPress={onBack}
      />
      <Box height={250}></Box>
      <Box>
        {compressImageOptions.map(option => (
          <CompressOptionRow
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
            key={option.type}
            option={option}
          />
        ))}
      </Box>
      <PrimaryButton onPress={onContinue} title={'Continue'} />
      <ProgressModal isOpen={showProgressModal} onCancel={onCancelProgress} />
    </Box>
  );
}
