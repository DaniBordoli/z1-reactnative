import React, { useState } from 'react';
import { Container, Title } from '../styles/ItemListScreen.styles';
const ItemListScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
    const handleCategorySelect = (categoryId: string) => {
      setSelectedCategory(categoryId);
    };
  
    return (
      <Container>
        <Title>Learn</Title>
      </Container>
    );
  };
  
  export default ItemListScreen;