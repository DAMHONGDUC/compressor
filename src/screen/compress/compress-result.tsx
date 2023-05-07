import {useState} from 'react';
import {useAppDispatch, useAppSelector} from 'redux/stores/app-store';
import CompressHeader from 'components/compress-header/compress-header';
import {Box, Text, Heading, Icon, Row} from 'native-base';
import CompressOptionRow from './compress-option-row';
import {compressImageOptions, CompressOption} from 'constants/common';
import PrimaryButton from 'components/button/primary-button';
import {CompressorHelper} from 'helper/compressor';
import {setCurrentCompressOption} from 'redux/slices/compress-slice';
import {getViewBoxIcon} from 'helper';
import {MainStackNavigationProp} from 'navigation/styles';
import {useNavigation} from '@react-navigation/native';

export default function CompressResultScreen(): JSX.Element {
  const navigation = useNavigation<MainStackNavigationProp>();

  const onPress = () => {
    backToHome();
  };

  const backToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <Box
      justifyContent={'space-between'}
      backgroundColor={'primary.50'}
      flex={1}
      padding={3}>
      <CompressHeader
        iconName={'ios-chevron-back-circle'}
        heading={''}
        onPress={backToHome}
      />
      <Box alignSelf={'center'}>
        <Row justifyContent={'center'} alignItems={'center'}>
          <Text color={'success.500'} fontWeight={'bold'} fontSize={'3xl'}>
            Compressed
          </Text>

          <Icon
            marginLeft={3}
            as={getViewBoxIcon('Ionicons')}
            name="checkmark-done-circle"
            color="success.500"
            size={'2xl'}
          />
        </Row>
        <Text fontSize="md" color="grey">
          Your file has been saved in Photos
        </Text>
      </Box>
      <PrimaryButton onPress={onPress} title={'Compress New Image'} />
    </Box>
  );
}
