import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import {moderateScale, verticalScale} from '@/utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spacing.horizontal.globalHorizontalPadding,
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    backgroundColor: colors.secondary.white,
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: 8,
    backgroundColor: colors.background.main,
  },
  contentContainer: {
    flex: 1,
    marginLeft: spacing.horizontal.size12,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    marginRight: spacing.horizontal.size8,
  },
  brand: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
    marginBottom: verticalScale(2),
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: colors.text.primary,
    lineHeight: moderateScale(20),
  },
  removeButton: {
    padding: spacing.horizontal.size4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: verticalScale(4),
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing.horizontal.size8,
  },
  price: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.primary.blue,
  },
  originalPrice: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    textDecorationLine: 'line-through',
  },
  perUnit: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
    marginLeft: spacing.horizontal.size4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(8),
  },
  subtotalContainer: {
    alignItems: 'flex-end',
  },
  subtotalLabel: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
  },
  subtotalValue: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: colors.text.primary,
  },
  placeholderImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default styles;