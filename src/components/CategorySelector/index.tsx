import React, {useMemo, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colors} from '@/styles/colors';
import {Category} from '@/state/remote-dato/use-product-categories';
import {styles} from './styles';

interface CategorySelectorProps {
  categories: Category[];
  loading?: boolean;
  error?: any;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const CategorySelector = ({
  categories,
  loading = false,
  error,
  selectedCategory,
  onCategoryChange,
}: CategorySelectorProps) => {
  const categoryOptions = useMemo(() => {
    const categoryList = categories.map(c => ({
      label: c.title,
      value: c.slug,
    }));
    return categoryList.sort((a, b) => {
      if (a.value === 'shop-all') {
        return -1;
      }
      if (b.value === 'shop-all') {
        return 1;
      }
      return 0;
    });
  }, [categories]);

  useEffect(() => {
    if (!selectedCategory && categoryOptions.length) {
      onCategoryChange?.(categoryOptions[0].value);
    }
  }, [categoryOptions, onCategoryChange, selectedCategory]);

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      return;
    }
    onCategoryChange?.(category);
  };

  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error loading categories</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color={colors.secondary.white} />
            <Text style={styles.loadingText}>Loading categories...</Text>
          </View>
        ) : (
          categoryOptions.map(opt => (
            <TouchableOpacity
              key={opt.value}
              style={[
                styles.categoryButton,
                selectedCategory === opt.value && styles.selectedCategory,
              ]}
              onPress={() => handleCategoryPress(opt.value)}
              activeOpacity={0.7}>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === opt.value && styles.selectedCategoryText,
                ]}>
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};
