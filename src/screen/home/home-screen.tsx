import React, {useState} from 'react';
import {Box, Column, Button, Text, Icon} from 'native-base';
import DocumentPicker from 'react-native-document-picker';
import {Image as ImageCompress} from 'react-native-compressor';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';
import CompressOptionsModal from 'components/compress-options-modal/compress-options-modal';

export default function HomeScreen() {
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

  const [showModal, setShowModal] = useState<boolean>(false);

  const onChoose = () => {
    setShowModal(true);
    console.log('onChoose');
  };

  return (
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
            onPress={onChoose}>
            Choose
          </Button>
        </Column>
      </Column>
      <CompressOptionsModal
        showModal={showModal}
        setShowModal={setShowModal}></CompressOptionsModal>
    </Box>
  );
}

const styles = StyleSheet.create({
  bottomModal: {
    width: '100%',
    marginBottom: 0,
    marginTop: 'auto',
  },
});
