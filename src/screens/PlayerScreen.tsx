import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Container, Title, Author, Timeline, TimelineProgress, ControlsContainer, ControlButton, ControlButtonText, PlayButton, PlayButtonText,StyledImage } from '../styles/PlayerScreen.styles';
import TrackPlayer from 'react-native-track-player';
import { Alert } from 'react-native';


type PlayerScreenRouteProp = RouteProp<
  { PlayerScreen: { title: string; author: string } },
  'PlayerScreen'
>;

const PlayerScreen = () => {
  const route = useRoute<PlayerScreenRouteProp>();
  const { title, author } = route.params;


    
  const playMusic = async () => {
    try {
     
      await TrackPlayer.add([
        {
          id: 'track1',
          url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
          title: 'SoundHelix Song 1',
          artist: 'SoundHelix',
          album: 'Free Music',
          genre: 'Instrumental',
          artwork: 'https://www.soundhelix.com/img/logo.png', 
          duration: 300, 
        },
      ]);

     
      await TrackPlayer.play();
    } catch (error) {
      console.log('Error al reproducir música', error);
      Alert.alert('Error', 'Hubo un problema al intentar reproducir la música');
    }
  };

  const provisionalImage = 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


  return (
    <Container>
      <StyledImage source={{ uri: provisionalImage}}
           resizeMode="cover"
         />

      
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Timeline>
        <TimelineProgress />
      </Timeline>
      <ControlsContainer>
        <ControlButton>
          <ControlButtonText></ControlButtonText>
        </ControlButton>
        <PlayButton>
          <PlayButtonText
          onPress={playMusic}>▶</PlayButtonText>
        </PlayButton>
        <ControlButton>
          <ControlButtonText></ControlButtonText>
        </ControlButton>
      </ControlsContainer>
    </Container>
  );
};

export default PlayerScreen;