import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Image,
  Title,
  Author,
  Content,
  StyledButton,
  ButtonText,
} from '../styles/ItemDetailScreen.styles';
import CloseButton from '../components/CloseButton';

type ItemDetailScreenRouteProp = RouteProp<
  { ItemDetailScreen: { itemId: string; title: string; image: string; author: string; content: string } },
  'ItemDetailScreen'
>;

const ItemDetailScreen = () => {
  const route = useRoute<ItemDetailScreenRouteProp>();
  const { title, image, author, content } = route.params;
  const navigation = useNavigation();
  const provisionalImage = 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <Container>
      <CloseButton onPress={() => navigation.goBack()} />
      <Title>{title}</Title>
      <Author>{author}</Author>
      {image && (
        <Image
          source={{ uri: provisionalImage }}
          resizeMode="cover"
        />
      )}
      <Content>{content}</Content>
      <StyledButton
        onPress={() =>
          navigation.navigate('PlayerScreen', { title, author })
        }
      >
        <ButtonText>Abrir Reproductor</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default ItemDetailScreen;
