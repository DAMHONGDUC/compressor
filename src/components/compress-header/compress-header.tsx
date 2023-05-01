import {useNavigation} from '@react-navigation/native';
import {getViewBoxIcon} from 'helper';
import {Row, Heading, Text, IconButton, Pressable, Icon} from 'native-base';
import {MainStackNavigationProp} from 'navigation/styles';

interface IProp {
  heading: string;
}

export default function CompressHeader({heading}: IProp): JSX.Element {
  const navigation = useNavigation<MainStackNavigationProp>();
  const onBack = () => {
    navigation.pop();
  };

  return (
    <Row
      justifyContent={'center'}
      alignItems={'center'}
      paddingBottom={3}
      paddingX={3}
      backgroundColor={'primary.50'}>
      <Pressable
        position={'absolute'}
        left={3}
        top={0}
        onPress={onBack}
        justifyContent={'center'}>
        <Icon
          as={getViewBoxIcon('Ionicons')}
          name="ios-chevron-back-circle"
          size={'4xl'}
        />
      </Pressable>
      <Heading fontSize={'xl'} marginLeft={3} marginTop={2}>
        <Text color="white">{heading}</Text>
      </Heading>
    </Row>
  );
}
