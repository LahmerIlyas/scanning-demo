import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import dimensions from '@/styles/dimensions';
import {moderateScale, verticalScale} from '@/utils/styles';

const styles = StyleSheet.create({
  quantitySelector: {
    alignItems: 'flex-end',
  },
  quantityLabel: {
    color: colors.text.secondary,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: moderateScale(8),
    overflow: 'hidden',
  },
  quantityButton: {
    backgroundColor: colors.secondary.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonDisabled: {
    backgroundColor: colors.secondary.gray,
    opacity: 0.5,
  },
  quantityInput: {
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

export const getStylesForSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return {
        label: {
          fontSize: moderateScale(12),
          marginBottom: spacing.vertical.size4,
        },
        container: {height: dimensions.height.size34},
        button: {
          paddingHorizontal: spacing.horizontal.size10,
          paddingVertical: spacing.vertical.size8,
        },
        input: {
          fontSize: moderateScale(14),
          paddingHorizontal: spacing.horizontal.size12,
          minWidth: dimensions.width.size48,
        },
        iconSize: moderateScale(16),
      };
    case 'large':
      return {
        label: {
          fontSize: moderateScale(16),
          marginBottom: spacing.vertical.size10,
        },
        container: {height: dimensions.height.size50},
        button: {
          paddingHorizontal: spacing.horizontal.size20,
          paddingVertical: spacing.vertical.size16,
        },
        input: {
          fontSize: moderateScale(20),
          paddingHorizontal: spacing.horizontal.size24,
          minWidth: dimensions.width.size64,
        },
        iconSize: moderateScale(24),
      };
    case 'medium':
    default:
      return {
        label: {
          fontSize: moderateScale(14),
          marginBottom: spacing.vertical.size8,
        },
        container: {height: dimensions.height.size43},
        button: {
          paddingHorizontal: spacing.horizontal.size16,
          paddingVertical: spacing.vertical.size12,
        },
        input: {
          fontSize: moderateScale(18),
          paddingHorizontal: spacing.horizontal.size20,
          minWidth: dimensions.width.size56,
        },
        iconSize: moderateScale(20),
      };
  }
};

export default styles;

