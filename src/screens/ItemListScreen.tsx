import React, { useState } from 'react';
import { Container, Title } from '../styles/ItemListScreen.styles';
import CategoryMenu from '../components/CategoryMenu';
const ItemListScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
    const handleCategorySelect = (categoryId: string) => {
      setSelectedCategory(categoryId);
    };
  
    return (
      <Container>
        <Title>Learn</Title>
        <CategoryMenu
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
      </Container>
    );
  };
  
  export default ItemListScreen;