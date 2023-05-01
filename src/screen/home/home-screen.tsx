import React, {useState, useRef, useMemo, useCallback} from 'react';
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
import DocumentPicker from 'react-native-document-picker';
import {Image as ImageCompress} from 'react-native-compressor';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {compressOptions} from 'constants/common';
import {View as RNView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HomeScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const pickDocument = async () => {
    try {
      const document = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images, DocumentPicker.types.video],
      });

      console.log(document[0].uri);

      const result = await ImageCompress.compress(document[0].uri, {
        maxWidth: 1000,
        quality: 0.8,
      });

      console.log({result});
    } catch (err) {
      console.log({err});
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
              Choose one or multiple files
            </Text>
            <Button
              leftIcon={<Icon as={Feather} name="upload-cloud" size="lg" />}
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
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
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
                  Choose one option
                </Text>
                <IconButton
                  _pressed={{
                    bg: 'white',
                  }}
                  onPress={handleCloseModalPress}
                  icon={
                    <Icon
                      as={AntDesign}
                      name="closecircleo"
                      color={'rose.500'}
                    />
                  }></IconButton>
              </Row>
              {compressOptions.map(option => (
                <Box key={option.index}>
                  <Pressable
                    marginLeft={5}
                    paddingTop={3}
                    paddingBottom={3}
                    justifyContent={'center'}
                    key={option.mode}>
                    <Row>
                      <Icon
                        marginRight={2}
                        as={option.icon}
                        name={option.iconName}
                        size={option.iconSize}
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
