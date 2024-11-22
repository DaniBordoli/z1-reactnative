import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Container, Title, Author, Timeline, TimelineProgress, ControlsContainer, ControlButton, ControlButtonText, PlayButton, PlayButtonText,StyledImage } from '../styles/PlayerScreen.styles';

type PlayerScreenRouteProp = RouteProp<
  { PlayerScreen: { title: string; author: string } },
  'PlayerScreen'
>;

const PlayerScreen = () => {
  const route = useRoute<PlayerScreenRouteProp>();
  const { title, author } = route.params;
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
          <PlayButtonText>▶</PlayButtonText>
        </PlayButton>
        <ControlButton>
          <ControlButtonText></ControlButtonText>
        </ControlButton>
      </ControlsContainer>
    </Container>
  );
};

export default PlayerScreen;