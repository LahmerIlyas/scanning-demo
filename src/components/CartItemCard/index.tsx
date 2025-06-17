import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {QuantitySelector} from '@/components/QuantitySelector';
import {createLocale} from '@/locales';
import {colors} from '@/styles/colors';
import styles from './styles';

const localize = createLocale('cart');

type CartItemCardProps = {
  title: string;
  description: string;
  quantity: number;
  imageUrl: string;
  formattedPrice: string;
  originalPrice?: string;
  subtotal?: string;
  onIncreaseQuantityPressed?: () => void;
  onDecreaseQuantityPressed?: () => void;
  onQuantityChange?: (quantity: number) => void;
  onRemoveItemFromCartPressed?: () => void;
  disabled?: boolean;
};

export const CartItemCard = (props: CartItemCardProps) => {
  return (
    <View style={[styles.container, props.disabled && styles.disabled]}>
      {props.imageUrl ? (
        <Image style={styles.image} source={{uri: props.imageUrl}} />
      ) : (
        <View style={[styles.image, styles.placeholderImage]}>
          <Icon name="image" size={40} color={colors.secondary.gray} />
        </View>
      )}

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <View style={styles.textContainer}>
            {props.description && (
              <Text style={styles.brand}>{props.description}</Text>
            )}
            <Text style={styles.title} numberOfLines={2}>
              {props.title}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.removeButton}
            onPress={props.onRemoveItemFromCartPressed}
            disabled={props.disabled}>
            <Icon
              name="close"
              size={20}
              color={props.disabled ? '#ccc' : '#666'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.priceRow}>
          <View style={styles.priceInfo}>
            <Text style={styles.price}>{props.formattedPrice}</Text>
            {props.originalPrice && (
              <Text style={styles.originalPrice}>{props.originalPrice}</Text>
            )}
          </View>
          <Text style={styles.perUnit}>{localize('perUnit')}</Text>
        </View>

        <View style={styles.footerRow}>
          <QuantitySelector
            quantity={props.quantity}
            onQuantityChange={qty => {
              if (props.onQuantityChange) {
                props.onQuantityChange(qty);
              } else {
                if (qty > props.quantity) {
                  props.onIncreaseQuantityPressed?.();
                } else if (qty < props.quantity) {
                  props.onDecreaseQuantityPressed?.();
                }
              }
            }}
            size="small"
            showLabel={false}
            disabled={props.disabled}
          />

          {props.subtotal && (
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalLabel}>{localize('subtotal')}</Text>
              <Text style={styles.subtotalValue}>{props.subtotal}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
