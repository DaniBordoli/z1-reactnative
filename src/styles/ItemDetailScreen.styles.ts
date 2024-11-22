import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex-grow: 1;
  padding: 20px;
  background-color: #320e50;
`;

export const Title = styled.Text`
 margin-top: 90px;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
  color: white;
`;

export const Author = styled.Text`
  font-size: 16px;
  font-style: italic;
  margin-bottom: 20px;
  color: #d1b3e0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 220px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Content = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin-bottom: 30px;
  
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #4c1c78; 
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px; 
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
