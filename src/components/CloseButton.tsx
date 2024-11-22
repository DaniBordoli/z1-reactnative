import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

type CloseButtonProps = TouchableOpacityProps & {
  onPress: () => void;
};

const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  top: 20px;
  background-color: #320e50;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const CloseButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const CloseButton: React.FC<CloseButtonProps> = ({ onPress, ...props }) => {
  return (
    <CloseButtonContainer onPress={onPress} {...props}>
      <CloseButtonText>X</CloseButtonText>
    </CloseButtonContainer>
  );
};

export default CloseButton;
