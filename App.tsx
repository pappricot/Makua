import React from 'react';
import {Feed, Redirect} from './src/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
          initialRouteName={'Feed'}>
          <Stack.Screen 
            name="Feed" 
            component={Feed} 
          />
          <Stack.Screen 
            name="Redirect" 
            component={Redirect} 
            options={({navigation}) => ({
              title: '',
              headerLeft: () => (
                <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                  <Text>Back</Text>
                </TouchableOpacity>
              )
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  leftHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
});