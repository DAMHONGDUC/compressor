import {Text, Pressable, Modal, Divider} from 'native-base';
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {CompressMode} from 'constants/common';

type Props = {
  showModal: boolean;
  setShowModal: (arg: boolean) => void;
};

interface IModalOption {
  title: string;
  mode: number;
}

const listOptions: IModalOption[] = [
  {
    title: 'REDUCE_FILE_SIZE_IMAGE',
    mode: CompressMode.REDUCE_FILE_SIZE_IMAGE,
  },
  {
    title: 'REDUCE_FILE_SIZE_VIDEO',
    mode: CompressMode.REDUCE_FILE_SIZE_VIDEO,
  },
  {
    title: 'COMPRESS_FILES',
    mode: CompressMode.COMPRESS_FILES,
  },
];

export default function CompressOptionsModal({
  showModal,
  setShowModal,
}: Props): JSX.Element {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content style={styles.bottomModal}>
        <Modal.CloseButton />
        <Modal.Header>Choose an option</Modal.Header>
        <Modal.Body padding={0}>
          {listOptions.map(option => (
            <Pressable key={option.mode}>
              <Text fontSize="md">{option.title}</Text>
              <Divider my="1" />
            </Pressable>
          ))}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bottomModal: {
    width: '100%',
    marginBottom: 0,
    marginTop: 'auto',
  },
});
