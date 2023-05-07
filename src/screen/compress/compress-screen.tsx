import {useEffect, useState} from 'react';
import {useAppSelector} from 'redux/stores/app-store';
import CompressHeader from 'components/compress-header/compress-header';
import {
  Box,
  Pressable,
  HStack,
  Badge,
  Spacer,
  Text,
  Flex,
  Heading,
  Column,
  Checkbox,
  Row,
  Button,
} from 'native-base';
import CompressOptionRow from './compress-option-row';
import {compressImageOptions} from 'constants/common';
import PrimaryButton from 'components/button/primary-button';

export default function CompressScreen() {
  const {compressType, filesPath} = useAppSelector(state => state.app);
  const [currentOption, setCurrentOption] = useState<number>(1);

  return (
    <Box
      justifyContent={'space-between'}
      backgroundColor={'primary.50'}
      flex={1}
      padding={3}>
      <CompressHeader heading={compressType!.title} />
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
      <PrimaryButton
        onPress={() => {
          console.log('continue');
        }}
        title={'Continue'}
      />
    </Box>
  );
}
