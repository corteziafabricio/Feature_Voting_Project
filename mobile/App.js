import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeatureList from './components/FeatureList';
import FeatureForm from './components/FeatureForm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FeatureList">
        <Stack.Screen name="FeatureList" component={FeatureList} />
        <Stack.Screen name="FeatureForm" component={FeatureForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;