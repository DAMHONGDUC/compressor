import {Row, Heading, Text, IconButton} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

export default function MainHeader(): JSX.Element {
  return (
    <Row
      padding={3}
      backgroundColor={'primary.50'}
      justifyContent={'space-between'}>
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
    </Row>
  );
}
