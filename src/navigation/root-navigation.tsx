import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigatorParamList} from './styles';
import MainStack from './main-stack';
import MainHeader from 'components/main-header/main-header';

const RootStack = createNativeStackNavigator<RootStackNavigatorParamList>();

export default function RootNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          header: () => <MainHeader />,
        }}>
        <RootStack.Screen name="MainStack" component={MainStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
