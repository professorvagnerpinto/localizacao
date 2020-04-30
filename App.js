/**
 * Vídeo #11 ao #27: Localização - Módulo 18 - Localização, Câmera, React Navite avançado - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com localização e mapas.
 * by: Vagner Pinto
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import SimpleLocation from './screens/SimpleLocation';
import UseMaps from './screens/UseMaps';

const Stack = createStackNavigator();
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home" >
          <Stack.Screen
              name="Home"
              component={Home}
              options={{headerLeft: null, title: 'Home', headerStyle: {backgroundColor: '#a50000'}, headerTintColor: '#fff'}} />
          <Stack.Screen
              name="SimpleLocation"
              component={SimpleLocation}
              options={{headerLeft: null, title: 'Localização', headerStyle: {backgroundColor: '#006400'}, headerTintColor: '#fff'}} />
          <Stack.Screen
              name="UseMaps"
              component={UseMaps}
              options={{headerLeft: null, title: 'Mapas', headerStyle: {backgroundColor: '#006400'}, headerTintColor: '#fff'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
