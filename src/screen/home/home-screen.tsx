import React, {useRef, useMemo, useCallback} from 'react';
import {
  Box,
  Column,
  Button,
  Text,
  Icon,
  Divider,
  Pressable,
  Row,
  IconButton,
} from 'native-base';

import Feather from 'react-native-vector-icons/Feather';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {compressTypes} from 'constants/common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ICompressType} from 'constants/common';
import {getViewBoxIcon, pickDocument} from 'helper';
import {useAppDispatch} from 'redux/stores/app-store';
import {setCompressType} from 'redux/slices/app-slice';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from 'navigation/styles';

export default function HomeScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['35%', '35%'], []);
  const dispath = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const onPressOption = async (compressType: ICompressType) => {
    const isSuccess = await pickDocument(compressType.type);

    handleCloseModalPress();

    if (isSuccess) {
      dispath(setCompressType(compressType));
      navigation.navigate('CompressScreen');
    }
  };

  return (
    <BottomSheetModalProvider>
      <Box backgroundColor={'primary.50'} flex={1} padding={3}>
        <Column>
          <Column marginTop={5} space={3} alignItems="center">
            <Text fontWeight={'bold'} fontSize="4xl" color="white">
              Choose Your Files
            </Text>
            <Text fontSize="md" color="grey">
              Accept one or multiple files
            </Text>
            <Button
              leftIcon={
                <Icon
                  marginRight={1}
                  as={Feather}
                  name="upload-cloud"
                  size="lg"
                />
              }
              width={150}
              borderRadius={20}
              colorScheme="secondary"
              size={'lg'}
              _text={{
                color: 'white',
                fontSize: 'lg',
              }}
              onPress={handlePresentModalPress}>
              Choose
            </Button>
          </Column>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}>
            <Box>
              <Row
                paddingLeft={5}
                paddingRight={2}
                justifyContent={'space-between'}>
                <Text
                  marginTop={3}
                  marginBottom={5}
                  fontWeight={'bold'}
                  fontSize="xl"
                  color="black">
                  Choose an option
                </Text>
                <IconButton
                  _pressed={{
                    bg: 'white',
                  }}
                  onPress={handleCloseModalPress}
                  icon={
                    <Icon as={AntDesign} name="closecircleo" color={'black'} />
                  }></IconButton>
              </Row>
              {compressTypes.map(compressType => (
                <Box key={compressType.type}>
                  <Pressable
                    onPress={() => onPressOption(compressType)}
                    marginLeft={5}
                    paddingTop={3}
                    paddingBottom={3}
                    justifyContent={'center'}>
                    <Row>
                      <Icon
                        marginRight={4}
                        as={getViewBoxIcon(compressType.icon)}
                        name={compressType.iconName}
                        size={7}
                        color={'rose.500'}
                      />
                      <Text color="black" fontSize="16">
                        {compressType.title}
                      </Text>
                    </Row>
                  </Pressable>
                  <Divider my="1" />
                </Box>
              ))}
            </Box>
          </BottomSheetModal>
        </Column>
      </Box>
    </BottomSheetModalProvider>
  );
}
