import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import client from './src/client'
import { ApolloProvider } from '@apollo/client';
import ItemListScreen from './src/screens/ItemListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import PlayerScreen from './src/screens/PlayerScreen';

const Stack = createStackNavigator();


const App = () => {
  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      console.log("track player funcionando");
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator>
          <Stack.Screen
            name="ItemListScreen"
            component={ItemListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ItemDetailScreen"
            component={ItemDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlayerScreen"
            component={PlayerScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
