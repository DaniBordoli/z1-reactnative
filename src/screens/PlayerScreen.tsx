import React, { useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import {
  Container,
  Title,
  ControlsContainer,
  ControlButton,
  PlayButton,
  SpeedControl,
} from '../styles/PlayerScreen.styles';
import CloseButton from '../components/CloseButton';
import { useNavigation } from '@react-navigation/native';

type PlayerScreenRouteProp = RouteProp<{ PlayerScreen: { title: string } }, 'PlayerScreen'>;

const PlayerScreen = () => {
  const route = useRoute<PlayerScreenRouteProp>();
  const navigation = useNavigation();
  const { title } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const { position, duration } = useProgress();

  const playMusic = async () => {
    try {
      if (isPlaying) {
        await TrackPlayer.pause();
      } else {
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
      }

      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error(error);
    }
  };

  const onSliderValueChange = async (value: number) => {
    await TrackPlayer.seekTo(value);
  };

  const skipTime = async (seconds: number) => {
    const newPosition = position + seconds;
    await TrackPlayer.seekTo(newPosition < 0 ? 0 : newPosition > duration ? duration : newPosition);
  };

  return (
    <View style={{ flex: 1 }}>
      <CloseButton onPress={() => navigation.goBack()} />
      <Container>
        <Title>{title}</Title>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onValueChange={onSliderValueChange}
          thumbTintColor="#fff"
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#ccc"
        />
        <ControlsContainer>
          <ControlButton onPress={() => skipTime(-10)}>
            <Icon name="backward" size={30} color="#fff" />
          </ControlButton>
          <PlayButton onPress={playMusic}>
            <Icon name={isPlaying ? 'pause' : 'play'} size={30} color="#fff" />
          </PlayButton>
          <ControlButton onPress={() => skipTime(10)}>
            <Icon name="forward" size={30} color="#fff" />
          </ControlButton>
        </ControlsContainer>
        <SpeedControl>1x</SpeedControl>
      </Container>
    </View>
  );
};

export default PlayerScreen;
