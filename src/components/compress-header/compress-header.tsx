import {useNavigation} from '@react-navigation/native';
import {getViewBoxIcon} from 'helper';
import {Row, Heading, Text, IconButton, Pressable, Icon} from 'native-base';
import {MainStackNavigationProp} from 'navigation/styles';

interface IProp {
  heading: string;
  onPress: () => void;
  iconName: string;
}

export default function CompressHeader({
  heading,
  onPress,
  iconName,
}: IProp): JSX.Element {
  const navigation = useNavigation<MainStackNavigationProp>();

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
        onPress={onPress}
        justifyContent={'center'}>
        <Icon as={getViewBoxIcon('Ionicons')} name={iconName} size={'4xl'} />
      </Pressable>
      <Heading fontSize={'xl'} marginLeft={3} marginTop={2}>
        <Text color="white">{heading}</Text>
      </Heading>
    </Row>
  );
}
