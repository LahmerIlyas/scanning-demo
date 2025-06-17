import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CategorySelector } from '@/components/CategorySelector';
import { ProductItem } from '@/components/ProductItem';
import { FloatingBarcodeScanButton } from '@/components/FloatingBarcodeScanButton';
import { Button } from '@/components/Button';
import { colors } from '@/styles/colors';
import { useAddToCart } from '@/state/remote-pep-direct/use-add-to-cart';
import styles from './styles';
import { createLocale } from '@/locales';
import { useProductsByCategory } from '@/state/local/use-products-by-category';
import { useProductCategories } from '@/state/remote-dato/use-product-categories';
import { useNavigation } from '@react-navigation/native';

const localize = createLocale('home');
const globalLocalize = createLocale('global');

export function HomeRoute() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );
  const navigation = useNavigation();

  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useProductCategories();

  const {
    products: categoryProducts,
    loading: loadingCategory,
    error: errorCategory,
    hasMore,
    loadMore,
    isLoadingMore,
  } = useProductsByCategory(selectedCategory ?? '');

  const { addToCart } = useAddToCart();

  const products = categoryProducts;

  const handleAddToCart = async (
    productId: string,
    quantity: number,
    variant?: any,
  ) => {
    try {
      const itemIdToAdd = variant ? variant.id : productId;

      await addToCart({
        itemId: itemIdToAdd,
        quantity,
      });

      Alert.alert(
        globalLocalize('success'),
        `${globalLocalize('success')} ${quantity} ${localize(
          'addedToCartSuccess',
        )}`,
        [{ text: globalLocalize('ok') }],
      );
    } catch (err) {
      Alert.alert(globalLocalize('error'), localize('addToCartError'), [
        { text: globalLocalize('ok') },
      ]);
    }
  };

  const initialLoading =
    loadingCategories || (loadingCategory && products.length === 0);
  const error = errorCategories || errorCategory;

  const renderProduct = ({ item }: { item: any }) => (
    <ProductItem product={item} onAddToCart={handleAddToCart} />
  );

  const renderHeader = () => {
    const selectedCategoryTitle =
      categories.find(c => c.slug === selectedCategory)?.title ||
      selectedCategory;
    return (
      <Text style={styles.categoryTitle}>
        {selectedCategoryTitle} {localize('products')} ({products?.length || 0})
      </Text>
    );
  };

  const handleLoadMore = useCallback(() => {
    if (hasMore && !isLoadingMore) {
      loadMore();
    }
  }, [hasMore, isLoadingMore, loadMore]);

  const renderFooter = () => {
    if (isLoadingMore) {
      return (
        <View style={styles.loadingFooter}>
          <ActivityIndicator size="small" color={colors.primary.blue} />
          <Text style={styles.loadingText}>Loading more products...</Text>
        </View>
      );
    }

    return null;
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Icon name="shopping-cart" size={80} color={colors.secondary.gray} />
      <Text style={styles.emptyTitle}>{localize('noProductsFound')}</Text>
      <Text style={styles.emptySubtitle}>
        {localize('tryBrowsingAllProducts')}
      </Text>
      {selectedCategory !== 'shop-all' && (
        <Button
          title={localize('shopAllProducts')}
          onPress={() => setSelectedCategory('shop-all')}
          variant="secondary"
          size="small"
        />
      )}
    </View>
  );

  if (initialLoading) {
    return (
      <View style={styles.container}>
        <CategorySelector
          categories={categories}
          loading={loadingCategories}
          error={errorCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary.blue} />
          <Text style={styles.loadingText}>{localize('loadingProducts')}</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <CategorySelector
          categories={categories}
          loading={loadingCategories}
          error={errorCategories}
          onCategoryChange={setSelectedCategory}
        />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {localize('errorLoadingProducts')}
          </Text>
          <Text style={styles.errorSubtext}>{error.message}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CategorySelector
        categories={categories}
        loading={loadingCategories}
        error={errorCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <FlatList
        style={styles.content}
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
      <FloatingBarcodeScanButton onPress={() => {
        navigation.navigate('BarCodeScanner');
      }} />
    </View>
  );
}
