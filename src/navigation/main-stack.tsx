import React from 'react';
import HomeScreen from 'screen/home/home-screen';
import {MainStackNavigatorParamList} from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CompressScreen from 'screen/compress/compress-screen';
import MainHeader from 'components/main-header/main-header';
import CompressResultScreen from 'screen/compress/compress-result';

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{header: () => <MainHeader />}}
      />
      <Stack.Screen
        name="CompressScreen"
        component={CompressScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompressResultScreen"
        component={CompressResultScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
