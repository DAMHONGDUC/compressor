import React from 'react';
import {
  Box,
  Column,
  VStack,
  Button,
  Row,
  Heading,
  Text,
  IconButton,
  Icon,
  Pressable,
} from 'native-base';
import DocumentPicker from 'react-native-document-picker';
import {Image as ImageCompress} from 'react-native-compressor';
import Feather from 'react-native-vector-icons/Feather';

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
            onPress={() => pickDocument()}>
            Choose
          </Button>
        </Column>
      </Column>
    </Box>
  );
}
