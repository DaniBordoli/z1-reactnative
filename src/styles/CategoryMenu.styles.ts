import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

export const StyledScrollView = styled(ScrollView)`
  margin-bottom: 20px;
`;

export const StyledCategoryButton = styled(TouchableOpacity)<{ isSelected: boolean }>`
  padding-horizontal: 15px;
  background-color: ${({ isSelected }) => (isSelected ? '#b77ac4' : '#320e40')};
  border-radius: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin-bottom: 10px;
`;

export const StyledCategoryText = styled(Text)<{ isSelected: boolean }>`
  color: white;
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
`;



export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #4c1c78;
  border-radius: 12px;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 20px;
`;

export const TextContainer = styled.View`
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const ItemAuthor = styled.Text`
  font-size: 16px;
  color: #d1b3e0;
`;
