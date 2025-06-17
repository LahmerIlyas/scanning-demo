import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import {moderateScale, verticalScale} from '@/utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.horizontal.globalHorizontalPadding,
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    backgroundColor: colors.secondary.white,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  closeButton: {
    padding: spacing.horizontal.size8,
  },
  minimumOrderMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.main,
    marginHorizontal: spacing.horizontal.globalHorizontalPadding,
    marginVertical: verticalScale(12),
    paddingHorizontal: spacing.horizontal.size12,
    paddingVertical: verticalScale(10),
    borderRadius: 8,
    gap: spacing.horizontal.size8,
  },
  minimumOrderText: {
    flex: 1,
    fontSize: moderateScale(13),
    color: colors.text.secondary,
    lineHeight: moderateScale(18),
    fontWeight: '400',
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: verticalScale(12),
    fontSize: moderateScale(16),
    color: colors.text.secondary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.horizontal.globalHorizontalPadding,
  },
  emptyTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginTop: verticalScale(16),
  },
  emptySubtitle: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    marginTop: verticalScale(8),
    marginBottom: verticalScale(24),
    textAlign: 'center',
  },
  footer: {
    backgroundColor: colors.secondary.white,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  footerContent: {
    paddingHorizontal: spacing.horizontal.globalHorizontalPadding,
    paddingTop: verticalScale(16),
  },
  orderSummary: {
    marginBottom: verticalScale(12),
  },
  summaryTitle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: verticalScale(8),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(4),
  },
  summaryLabel: {
    fontSize: moderateScale(15),
    color: colors.text.secondary,
    lineHeight: moderateScale(20),
  },
  summaryValue: {
    fontSize: moderateScale(15),
    color: colors.text.primary,
    fontWeight: '600',
    lineHeight: moderateScale(20),
  },
  divider: {
    height: 1,
    backgroundColor: colors.border.light,
    marginVertical: verticalScale(6),
  },
  totalLabel: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.text.primary,
    lineHeight: moderateScale(22),
  },
  totalSection: {
    alignItems: 'flex-end',
  },
  totalValue: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: colors.primary.blue,
    lineHeight: moderateScale(22),
  },
  youSaveText: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: colors.status.success,
    marginTop: verticalScale(2),
  },
  minimumNotMet: {
    fontSize: moderateScale(11),
    color: colors.status.error,
    textAlign: 'center',
    marginTop: verticalScale(6),
    fontWeight: '600',
  },
  cartItemWrapper: {
    position: 'relative',
  },
  itemLoadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeShipping: {
    color: colors.status.success,
    fontWeight: 'bold',
  },
  discountValue: {
    fontSize: moderateScale(15),
    color: colors.status.success,
    fontWeight: '600',
    lineHeight: moderateScale(20),
  },
});

export default styles;