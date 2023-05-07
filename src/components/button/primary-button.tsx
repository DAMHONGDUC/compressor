import {Button, Box} from 'native-base';

interface IProps {
  onPress: () => void;
  title: string;
}

export default function PrimaryButton({onPress, title}: IProps) {
  return (
    <Button
      _text={{
        color: 'white',
        fontSize: 'lg',
      }}
      size={'lg'}
      borderRadius={20}
      width={'100%'}
      colorScheme="secondary"
      onPress={onPress}>
      {title}
    </Button>
  );
}
