import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import ReviewsScreen from './src/screens/ReviewsScreen';


const navigation = createStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <navigation.Navigator >
        <navigation.Screen name="Business" component={SearchScreen}  /> 
        <navigation.Screen name="Business details" component={ResultsShowScreen}  /> 
        <navigation.Screen name="Business reviews" component={ReviewsScreen}  /> 
      </navigation.Navigator>
    </NavigationContainer>
  );
}

export default App;