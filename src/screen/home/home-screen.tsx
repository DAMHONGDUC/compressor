import React from 'react';
import {Box, Column, VStack, Button} from 'native-base';
import DocumentPicker from 'react-native-document-picker';
import {Image as ImageCompress} from 'react-native-compressor';

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
        {/* <Row justifyContent={'space-between'}>
          <Heading>
            <Text color="rose.500"> Compressor</Text>
          </Heading>

          <IconButton
            _icon={{
              as: Feather,
              name: 'settings',
            }}
            _pressed={{}}
          />
        </Row> */}
        <VStack space={4} alignItems="center">
          <Button
            colorScheme="secondary"
            size={'md'}
            onPress={() => pickDocument()}>
            Document Picker
          </Button>
        </VStack>
      </Column>
    </Box>
  );
}
