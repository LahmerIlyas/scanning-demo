import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/styles/colors';
import {ProductRecord} from '@/state/remote-dato/__generated__/types';
import {formatPrice} from '@/utils/price';

type VariantType = Partial<ProductRecord> & {
  price?: number;
  isOutOfStock?: boolean;
};

interface VariantSelectorProps {
  variants: VariantType[];
  selectedVariant?: VariantType;
  onVariantChange: (variant: VariantType) => void;
  variantLabel?: string;
  disabled?: boolean;
}

export const VariantSelector = ({
  variants,
  selectedVariant,
  onVariantChange,
  variantLabel,
  disabled = false,
}: VariantSelectorProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!variants || variants.length === 0) {
    return null;
  }

  const selectVariant = (variant: VariantType) => {
    if (disabled) return;

    onVariantChange(variant);
    setIsExpanded(false);
  };

  const getVariantDisplayText = (variant: VariantType) => {
    const variantName =
      variant.itemVariant || variant.itemSize || variant.title || 'Default';
    return variantLabel ? `${variantLabel}: ${variantName}` : variantName;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.header, disabled && styles.headerDisabled]}
        onPress={() => !disabled && setIsExpanded(!isExpanded)}
        disabled={disabled}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>
            {selectedVariant
              ? getVariantDisplayText(selectedVariant)
              : 'Select Variant (optional)'}
          </Text>
          {selectedVariant && selectedVariant.price && (
            <Text style={styles.priceText}>
              {formatPrice(selectedVariant.price)}
            </Text>
          )}
        </View>
        <Icon
          name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={20}
          color={disabled ? colors.secondary.gray : colors.text.primary}
        />
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.optionsContainer}>
          <ScrollView style={styles.optionsList} nestedScrollEnabled>
            {variants.map((variant, index) => {
              const isSelected = selectedVariant?.id === variant.id;
              const isOutOfStock = variant.isOutOfStock;
              const variantImage = variant.productImages?.[0]?.url;

              return (
                <TouchableOpacity
                  key={`${variant.id}-${index}`}
                  style={[
                    styles.option,
                    isSelected && styles.optionSelected,
                    isOutOfStock && styles.optionDisabled,
                  ]}
                  onPress={() => !isOutOfStock && selectVariant(variant)}
                  disabled={disabled || isOutOfStock}>
                  <View style={styles.optionContent}>
                    {variantImage && (
                      <Image
                        source={{uri: variantImage}}
                        style={styles.variantImage}
                      />
                    )}
                    <View style={styles.variantInfo}>
                      <Text
                        style={[
                          styles.variantTitle,
                          isSelected && styles.optionTextSelected,
                          isOutOfStock && styles.optionTextDisabled,
                        ]}>
                        {getVariantDisplayText(variant)}
                      </Text>
                      {variant.price && (
                        <Text
                          style={[
                            styles.variantPrice,
                            isOutOfStock && styles.optionTextDisabled,
                          ]}>
                          {formatPrice(variant.price)}
                        </Text>
                      )}
                      {isOutOfStock && (
                        <Text style={styles.outOfStockText}>Out of Stock</Text>
                      )}
                    </View>
                  </View>
                  {isSelected && !isOutOfStock && (
                    <Icon name="check" size={16} color={colors.primary.blue} />
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: 8,
    backgroundColor: colors.secondary.white,
  },
  headerDisabled: {
    backgroundColor: colors.background.main,
    borderColor: colors.secondary.lightGray,
  },
  headerContent: {
    flex: 1,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
  },
  priceText: {
    fontSize: 12,
    color: colors.primary.blue,
    fontWeight: 'bold',
    marginTop: 2,
  },
  optionsContainer: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: 8,
    backgroundColor: colors.secondary.white,
    maxHeight: 200,
  },
  optionsList: {
    maxHeight: 200,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  optionSelected: {
    backgroundColor: colors.background.main,
  },
  optionDisabled: {
    backgroundColor: colors.secondary.lightGray,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  variantImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 12,
    resizeMode: 'cover',
  },
  variantInfo: {
    flex: 1,
  },
  variantTitle: {
    fontSize: 14,
    color: colors.text.primary,
  },
  variantPrice: {
    fontSize: 12,
    color: colors.primary.blue,
    fontWeight: 'bold',
    marginTop: 2,
  },
  outOfStockText: {
    fontSize: 10,
    color: colors.status.error,
    fontWeight: 'bold',
    marginTop: 2,
  },
  optionTextSelected: {
    fontWeight: '500',
    color: colors.primary.blue,
  },
  optionTextDisabled: {
    color: colors.secondary.gray,
  },
});
