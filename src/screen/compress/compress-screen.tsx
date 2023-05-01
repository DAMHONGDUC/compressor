import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from 'redux/stores/app-store';
import CompressHeader from 'components/compress-header/compress-header';
import {Box} from 'native-base';

export default function CompressScreen() {
  const {compressOption, filesPath} = useAppSelector(state => state.app);

  return (
    <Box backgroundColor={'primary.50'} flex={1} padding={3}>
      <CompressHeader heading={compressOption!.title} />
    </Box>
  );
}
