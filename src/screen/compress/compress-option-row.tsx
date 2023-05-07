import {
  Box,
  Pressable,
  HStack,
  Badge,
  Spacer,
  Text,
  Flex,
  Heading,
  Column,
  Checkbox,
  Row,
} from 'native-base';

import {ICompressOption} from 'constants/common';

interface IProps {
  option: ICompressOption;
  currentOption: number;
  setCurrentOption: (arg1: number) => void;
}

export default function CompressOptionRow({
  option,
  currentOption,
  setCurrentOption,
}: IProps) {
  const isChoose = currentOption === option.type;

  const onChangeOption = () => {
    setCurrentOption(option.type);
  };

  return (
    <Pressable maxW="96" onPress={onChangeOption} marginBottom={3}>
      {({isPressed}) => {
        return (
          <Box
            bg={isChoose || isPressed ? 'success.400' : 'primary.200'}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            p="5"
            rounded="8"
            shadow={3}
            borderWidth="1"
            borderColor="primary.200">
            <Row justifyContent={'space-between'} alignItems={'center'}>
              <Column space={2}>
                <Heading fontSize={'lg'}>
                  <Text color={isChoose ? 'black' : 'white'}>
                    Auto compression
                  </Text>
                </Heading>
                <Text color={isChoose ? 'black' : 'gray.400'}>
                  Medium file size, medium quality
                </Text>
              </Column>
              <Checkbox
                isChecked={isChoose}
                onChange={onChangeOption}
                accessibilityLabel="This is a dummy checkbox"
              />
            </Row>
          </Box>
        );
      }}
    </Pressable>
  );
}
