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
import {StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {compressOptions} from 'constants/common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IModalOption} from 'constants/common';

export default function HomeScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['40%', '35%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const onPressOption = (option: IModalOption) => {
    console.log('onPressOption', option);
    handleCloseModalPress();
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
              {compressOptions.map(option => (
                <Box key={option.mode}>
                  <Pressable
                    onPress={() => onPressOption(option)}
                    marginLeft={5}
                    paddingTop={3}
                    paddingBottom={3}
                    justifyContent={'center'}
                    key={option.mode}>
                    <Row>
                      <Icon
                        marginRight={4}
                        as={option.icon}
                        name={option.iconName}
                        size={7}
                        color={'rose.500'}
                      />
                      <Text color="black" fontSize="16">
                        {option.title}
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

const styles = StyleSheet.create({
  bottomModal: {
    width: '100%',
    marginBottom: 0,
    marginTop: 'auto',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
