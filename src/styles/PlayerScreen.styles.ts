import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from './ItemDetailScreen.styles';

export const Container = styled(View)`
  flex: 1;
  background-color: #320e50;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const Author = styled(Text)`
  font-size: 18px;
  font-style: italic;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const Timeline = styled(View)`
  width: 80%;
  height: 5px;
  background-color: #555;
  border-radius: 5px;
  margin: 20px 0;
  position: relative;
`;

export const StyledImage = styled(Image)`
  width: 90%;
  height: 220px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const TimelineProgress = styled(View)`
  width: 30%; 
  height: 100%;
  background-color: #ff5722;
  border-radius: 5px;
`;

export const ControlsContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ControlButton = styled(TouchableOpacity)`
  background-color: #ff5722;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

`;

export const ControlButtonText = styled(Text)`
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const PlayButton = styled(TouchableOpacity)`
  background-color: #ff5722;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`;

export const PlayButtonText = styled(Text)`
  font-size: 30px;
  color: white;
  font-weight: bold;
  text-align: center;
`;
