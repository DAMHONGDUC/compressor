import {CompressType} from 'constants/common';
import {Box, Text, Modal, Button, Progress, Column} from 'native-base';
import {useState, useRef} from 'react';
import {useAppSelector} from 'redux/stores/app-store';
import {useCompressProgress} from 'hooks/useCompressProgress';

interface IProps {
  isOpen: boolean;
  onCancel: () => void;
}

export default function ProgressModal({isOpen, onCancel}: IProps): JSX.Element {
  const {compressType} = useAppSelector(state => state.app);
  const progress = useCompressProgress(compressType?.type!);

  return (
    <Modal isOpen={isOpen} onClose={() => {}}>
      <Modal.Content backgroundColor={'light.200'} maxWidth="400px">
        <Modal.Body>
          <Column space={6} justifyContent={'center'} alignItems={'center'}>
            <Text color={'black'} fontSize={'lg'}>
              Compressing {progress}%
            </Text>

            <Box w="90%" maxW="400">
              <Progress
                _filledTrack={{
                  bg: 'success.600',
                }}
                bg="grey"
                size="lg"
                value={progress}
                mx="4"
              />
            </Box>
            <Button
              alignSelf={'flex-end'}
              variant="ghost"
              colorScheme="blueGray"
              onPress={onCancel}>
              Cancel
            </Button>
          </Column>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
