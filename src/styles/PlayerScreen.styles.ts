import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: #320e50;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

export const StyledImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 20px;
`;


export const ControlsContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const ControlButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  background-color: #4c1c78;
  border-radius: 25px;
`;

export const PlayButton = styled(TouchableOpacity)`
  background-color: #4c1c78;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;


export const DurationText = styled(Text)`
  font-size: 16px;
  color: white;
`;

export const SpeedControl = styled(Text)`
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
`;


