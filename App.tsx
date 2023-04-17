import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useScreenDimensions} from './useScreenDimensions';

export default function App() {
  const {width, height} = useScreenDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>height: {height}</Text>
      <Text style={[styles.text, {color: '#6DA9E4'}]}>width: {width}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#f00',
    fontSize: 30,
  },
});
