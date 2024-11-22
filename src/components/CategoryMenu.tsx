import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import {
  StyledScrollView,
  StyledCategoryButton,
  StyledCategoryText,
  ItemContainer,
  ItemImage,
  ItemTitle,
  ItemAuthor,
  TextContainer,
} from '../styles/CategoryMenu.styles';
import { GET_ITEMS } from '../api/item'; 

type CategoryMenuProps = {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
};

const CategoryMenu = ({ selectedCategory, onCategorySelect }: CategoryMenuProps) => {
  const { data } = useQuery(GET_ITEMS);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const navigation = useNavigation();
  const provisionalImage = 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  useEffect(() => {
    if (data?.items) {
      const filtered =
        selectedCategory && selectedCategory !== 'all'
          ? data.items.filter((item: any) => item.category.id === selectedCategory)
          : data.items;
      setFilteredItems(filtered.slice(0, 5));
    }
  }, [data, selectedCategory]);

  const categories = data?.items
    ? [
        { id: 'all', title: 'Todos' },
        ...Array.from(new Set(data.items.map((item: any) => item.category.id)))
          .map((id) => data.items.find((item: any) => item.category.id === id)?.category)
          .filter(Boolean),
      ]
    : [];

  return (
    <View style={{ flex: 1 }}>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category: any) => (
          <StyledCategoryButton
            key={category.id}
            isSelected={selectedCategory === category.id}
            onPress={() => onCategorySelect(category.id)}
          >
            <StyledCategoryText isSelected={selectedCategory === category.id}>
              {category.title}
            </StyledCategoryText>
          </StyledCategoryButton>
        ))}
      </StyledScrollView>

      {filteredItems.length > 0 ? (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ItemDetailScreen', {
                  itemId: item.id,
                  title: item.title,
                  image: item.image,
                  author: item.author,
                  content: item.content,
                });
              }}
            >
              <ItemContainer>
                {item.image && (
                  <ItemImage
                    source={{ uri: provisionalImage }}
                    resizeMode="cover"
                  />
                )}
                <TextContainer>
                  <ItemTitle numberOfLines={2}>{item.title}</ItemTitle>
                  <ItemAuthor>By {item.author}</ItemAuthor>
                </TextContainer>
              </ItemContainer>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No hay elementos en esta categoría</Text>
      )}
    </View>
  );
};

export default CategoryMenu;
