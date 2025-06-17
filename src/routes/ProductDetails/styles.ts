import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import dimensions from '@/styles/dimensions';
import {moderateScale, verticalScale} from '@/utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.main,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: dimensions.height.size100,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: colors.background.card,
    paddingVertical: spacing.vertical.size32,
    position: 'relative',
  },
  productImage: {
    width: dimensions.width.size343 * 0.73,
    height: dimensions.height.size225,
    borderRadius: moderateScale(16),
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: dimensions.width.size343 * 0.73,
    height: dimensions.height.size225,
    borderRadius: moderateScale(16),
    backgroundColor: colors.background.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outOfStockBadge: {
    position: 'absolute',
    top: spacing.vertical.size40,
    right: spacing.horizontal.size38,
    backgroundColor: colors.status.error,
    paddingHorizontal: spacing.horizontal.size12,
    paddingVertical: spacing.vertical.size6,
    borderRadius: moderateScale(6),
  },
  outOfStockText: {
    color: colors.secondary.white,
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  productInfo: {
    padding: spacing.horizontal.size20,
  },
  productId: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
    marginBottom: spacing.vertical.size8,
    lineHeight: verticalScale(16),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: spacing.vertical.size16,
    lineHeight: verticalScale(32),
  },
  priceQuantitySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.vertical.size24,
    paddingTop: spacing.vertical.size8,
  },
  priceInfo: {
    flex: 1,
  },
  price: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: colors.primary.blue,
    marginRight: spacing.horizontal.size12,
  },
  comparePrice: {
    fontSize: moderateScale(18),
    color: colors.text.secondary,
    textDecorationLine: 'line-through',
  },
  section: {
    marginBottom: spacing.vertical.size24,
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: spacing.vertical.size12,
  },
  description: {
    fontSize: moderateScale(16),
    color: colors.text.secondary,
    lineHeight: verticalScale(24),
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  outOfStockSection: {
    marginBottom: spacing.vertical.size16,
  },
  outOfStockLabel: {
    fontSize: moderateScale(16),
    color: colors.status.error,
    fontWeight: 'bold',
  },
  overviewDetails: {
    marginTop: spacing.vertical.size16,
    backgroundColor: colors.background.main,
    borderRadius: moderateScale(8),
    padding: spacing.horizontal.size12,
  },
  overviewDetail: {
    fontSize: moderateScale(14),
    color: colors.text.primary,
    marginBottom: spacing.vertical.size4,
    fontWeight: '500',
  },
  flavorSection: {
    marginBottom: spacing.vertical.size24,
  },
  flavorTitle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: spacing.vertical.size8,
  },
  flavorSelected: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    marginBottom: spacing.vertical.size12,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: spacing.vertical.size8,
  },
  detailLabel: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: colors.text.primary,
    width: dimensions.width.size80,
  },
  detailValue: {
    fontSize: moderateScale(16),
    color: colors.text.secondary,
    flex: 1,
  },
  ingredients: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    lineHeight: verticalScale(20),
    fontStyle: 'italic',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.vertical.size12,
  },
  categoryTag: {
    fontSize: moderateScale(12),
    color: colors.secondary.white,
    backgroundColor: colors.primary.blue,
    paddingHorizontal: spacing.horizontal.size8,
    paddingVertical: spacing.vertical.size4,
    borderRadius: moderateScale(12),
    marginRight: spacing.horizontal.size8,
    marginBottom: spacing.vertical.size8,
    fontWeight: '600',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
    backgroundColor: colors.background.main,
    paddingHorizontal: spacing.horizontal.size8,
    paddingVertical: spacing.vertical.size4,
    borderRadius: moderateScale(12),
    marginRight: spacing.horizontal.size8,
    marginBottom: spacing.vertical.size8,
  },
  bottomSpacing: {
    height: spacing.vertical.size20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background.card,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
    paddingHorizontal: spacing.horizontal.size20,
    paddingTop: spacing.vertical.size16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.secondary.black,
    shadowOffset: {
      width: 0,
      height: -dimensions.height.size2,
    },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: 8,
  },
  specsContainer: {
    backgroundColor: colors.background.main,
    borderRadius: moderateScale(8),
    paddingVertical: spacing.horizontal.size12,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.vertical.size6,
  },
  specLabel: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    flex: 1,
  },
  specValue: {
    fontSize: moderateScale(14),
    color: colors.text.primary,
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  dietaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.vertical.size8,
  },
  dietaryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.main,
    borderRadius: moderateScale(16),
    paddingHorizontal: spacing.horizontal.size12,
    paddingVertical: spacing.vertical.size6,
    marginRight: spacing.horizontal.size8,
    marginBottom: spacing.vertical.size8,
  },
  dietaryText: {
    fontSize: moderateScale(12),
    color: colors.text.primary,
    marginLeft: spacing.horizontal.size4,
    fontWeight: '500',
  },
  subsection: {
    marginTop: spacing.vertical.size16,
  },
  subsectionTitle: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: spacing.vertical.size8,
  },
  nutrientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.vertical.size4,
  },
  nutrientName: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
  },
  nutrientValue: {
    fontSize: moderateScale(14),
    color: colors.text.primary,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.horizontal.size38,
  },
  errorText: {
    fontSize: moderateScale(18),
    color: colors.text.primary,
    marginBottom: spacing.vertical.size16,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: colors.primary.blue,
    paddingHorizontal: spacing.horizontal.size24,
    paddingVertical: spacing.vertical.size12,
    borderRadius: moderateScale(8),
  },
  retryText: {
    color: colors.secondary.white,
    fontWeight: '600',
  },
  footerPriceContainer: {
    flex: 1,
  },
  footerPriceLabel: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
    marginBottom: spacing.vertical.size2,
  },
  footerPrice: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: colors.text.primary,
  },
});

export default styles;

