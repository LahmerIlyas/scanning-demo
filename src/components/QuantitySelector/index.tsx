import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/styles/colors';
import styles, {getStylesForSize} from './styles';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  disabled = false,
  size = 'medium',
  showLabel = true,
}: QuantitySelectorProps) {
  const [inputValue, setInputValue] = React.useState(quantity.toString());

  React.useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const incrementQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  const decrementQuantity = () => {
    onQuantityChange(Math.max(1, quantity - 1));
  };

  const handleTextChange = (text: string) => {
    setInputValue(text);
  };

  const handleEndEditing = (text: string) => {
    const numericValue = parseInt(text, 10);
    if (!isNaN(numericValue) && numericValue >= 1) {
      onQuantityChange(numericValue);
    } else {
      setInputValue(quantity.toString());
      onQuantityChange(quantity);
    }
  };

  const sizeStyles = getStylesForSize(size);

  return (
    <View style={styles.quantitySelector}>
      {showLabel && (
        <Text style={[styles.quantityLabel, sizeStyles.label]}>Quantity:</Text>
      )}
      <View style={[styles.quantityContainer, sizeStyles.container]}>
        <TouchableOpacity
          style={[
            styles.quantityButton,
            sizeStyles.button,
            disabled && styles.quantityButtonDisabled,
          ]}
          onPress={decrementQuantity}
          disabled={disabled || quantity <= 1}>
          <Icon
            name="remove"
            size={sizeStyles.iconSize}
            color={colors.secondary.darkGray}
          />
        </TouchableOpacity>
        <TextInput
          style={[styles.quantityInput, sizeStyles.input]}
          value={inputValue}
          onChangeText={handleTextChange}
          onEndEditing={e => handleEndEditing(e.nativeEvent.text)}
          keyboardType="numeric"
          textAlign="center"
          maxLength={3}
          editable={!disabled}
          selectTextOnFocus={true}
        />
        <TouchableOpacity
          style={[
            styles.quantityButton,
            sizeStyles.button,
            disabled && styles.quantityButtonDisabled,
          ]}
          onPress={incrementQuantity}
          disabled={disabled}>
          <Icon
            name="add"
            size={sizeStyles.iconSize}
            color={colors.secondary.darkGray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
