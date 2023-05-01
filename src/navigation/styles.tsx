import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackNavigatorParamList = {
  MainStack: MainStackNavigatorParamList;
};

export type MainStackNavigatorParamList = {
  HomeScreen: undefined;
  CompressScreen: undefined;
};

export type MainStackNavigationProp = NativeStackNavigationProp<
  MainStackNavigatorParamList,
  'CompressScreen'
>;
