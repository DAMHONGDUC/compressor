import {
  AspectRatio,
  Heading,
  Text,
  Box,
  Image,
  Center,
  Stack,
  HStack,
  Container,
  IconButton,
  Icon,
  VStack,
  Row,
  Column,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

export default function HomeScreen() {
  return (
    <Box backgroundColor={'primary.50'} flex={1} padding={3}>
      <Column>
        <Row justifyContent={'space-between'}>
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
      </Column>
    </Box>
  );
}
