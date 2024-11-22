import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import {
  Container,
  Title,
  Timeline,
  TimelineProgress,
  ControlsContainer,
  ControlButton,
  PlayButton,
  SpeedControl,
  DurationText,
} from '../styles/PlayerScreen.styles';
import TrackPlayer from 'react-native-track-player';

type PlayerScreenRouteProp = RouteProp<
  { PlayerScreen: { title: string } },
  'PlayerScreen'
>;

const PlayerScreen = () => {
  const route = useRoute<PlayerScreenRouteProp>();
  const { title } = route.params;

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
          duration: 329,
        },
      ]);
      await TrackPlayer.play();
    } catch (error) {
      console.log('Error:', error);
      
    }
  };

  const provisionalImage =
    'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <Container>
      
      <Title>{title}</Title>
      <Timeline>
        <TimelineProgress />
      </Timeline>
      <ControlsContainer>
        <ControlButton>
          
        </ControlButton>
        <PlayButton onPress={playMusic}>
          <DurationText>▶</DurationText>
        </PlayButton>
        <ControlButton>
          
        </ControlButton>
      </ControlsContainer>
      <SpeedControl>1x</SpeedControl>
    </Container>
  );
};

export default PlayerScreen;
