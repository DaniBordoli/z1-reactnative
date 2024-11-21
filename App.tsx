import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import client from './src/client'
import { ApolloProvider } from '@apollo/client';
import ItemListScreen from './src/screens/ItemListScreen';


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
    <SafeAreaView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
      <Text>asd</Text>
      <ItemListScreen />  
    </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
