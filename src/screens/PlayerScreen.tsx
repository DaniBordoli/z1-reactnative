import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Title,
  Timeline,
  TimelineProgress,
  ControlsContainer,
  ControlButton,
  SpeedControl,
} from '../styles/PlayerScreen.styles';
import TrackPlayer from 'react-native-track-player';
import CloseButton from '../components/CloseButton';
import { useNavigation } from '@react-navigation/native';

type PlayerScreenRouteProp = RouteProp<{ PlayerScreen: { title: string } }, 'PlayerScreen'>;

const PlayerScreen = () => {
  const route = useRoute<PlayerScreenRouteProp>();
  const navigation = useNavigation();
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
      console.error(error);
    }
  };

  const stopMusic = async () => {
    try {
      await TrackPlayer.stop();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CloseButton onPress={() => navigation.goBack()} />
      <Container>
        <Title>{title}</Title>
        <Timeline>
          <TimelineProgress />
        </Timeline>
        <ControlsContainer>
          <ControlButton onPress={playMusic}>
            <Icon name="play" size={30} color="#fff" />
          </ControlButton>
          <ControlButton onPress={stopMusic}>
            <Icon name="stop" size={30} color="#fff" />
          </ControlButton>
        </ControlsContainer>
        <SpeedControl>1x</SpeedControl>
      </Container>
    </View>
  );
};

export default PlayerScreen;
