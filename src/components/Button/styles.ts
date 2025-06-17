import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import dimensions from '@/styles/dimensions';
import {moderateScale} from '@/utils/styles';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: 'transparent',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  disabled: {
    opacity: 0.6,
  },
  icon: {
    marginRight: spacing.horizontal.size8,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  primary: {
    backgroundColor: colors.primary.blue,
    borderColor: colors.primary.blue,
  },
  secondary: {
    backgroundColor: colors.secondary.lightGray,
    borderColor: colors.secondary.lightGray,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.primary.blue,
  },

  small: {
    paddingHorizontal: spacing.horizontal.size12,
    paddingVertical: spacing.vertical.size8,
    minHeight: dimensions.height.size34,
  },
  medium: {
    paddingHorizontal: spacing.horizontal.size20,
    paddingVertical: spacing.vertical.size16,
    minHeight: dimensions.height.size50,
  },
  large: {
    paddingHorizontal: spacing.horizontal.size20,
    paddingVertical: spacing.vertical.size16,
    minHeight: dimensions.height.size56,
  },

  primaryText: {
    color: colors.secondary.white,
  },
  secondaryText: {
    color: colors.text.primary,
  },
  outlineText: {
    color: colors.primary.blue,
  },

  smallText: {
    fontSize: moderateScale(14),
  },
  mediumText: {
    fontSize: moderateScale(16),
  },
  largeText: {
    fontSize: moderateScale(18),
  },
});

export default styles;

