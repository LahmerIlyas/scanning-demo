import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';
import spacing from '@/styles/spacing';
import dimensions from '@/styles/dimensions';
import { moderateScale } from '@/utils/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.card,
    borderRadius: moderateScale(12),
    marginHorizontal: spacing.horizontal.globalHorizontalPadding,
    marginVertical: spacing.vertical.size8,
    padding: spacing.horizontal.size16,
    shadowColor: colors.secondary.black,
    shadowOffset: {
      width: 0,
      height: dimensions.height.size2,
    },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: spacing.vertical.size12,
  },
  productImage: {
    width: dimensions.width.size124,
    height: dimensions.height.size128,
    borderRadius: moderateScale(8),
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: dimensions.width.size124,
    height: dimensions.height.size128,
    borderRadius: moderateScale(8),
    backgroundColor: colors.background.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outOfStockBadge: {
    position: 'absolute',
    top: spacing.vertical.size8,
    right: spacing.horizontal.size8,
    backgroundColor: colors.status.error,
    paddingHorizontal: spacing.horizontal.size8,
    paddingVertical: spacing.vertical.size4,
    borderRadius: moderateScale(4),
  },
  outOfStockText: {
    color: colors.secondary.white,
    fontSize: moderateScale(10),
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
  },
  brandName: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
    fontWeight: '500',
    marginBottom: spacing.vertical.size4,
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: spacing.vertical.size4,
  },
  description: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    marginBottom: spacing.vertical.size8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.vertical.size12,
  },
  price: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.primary.blue,
    marginRight: spacing.horizontal.size8,
  },
  comparePrice: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    textDecorationLine: 'line-through',
  },
  metaContainer: {
    marginBottom: spacing.vertical.size12,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.vertical.size8,
  },
  categoryTag: {
    fontSize: moderateScale(10),
    color: colors.secondary.white,
    backgroundColor: colors.primary.blue,
    paddingHorizontal: spacing.horizontal.size6,
    paddingVertical: spacing.vertical.size2,
    borderRadius: moderateScale(8),
    marginRight: spacing.horizontal.size4,
    marginBottom: spacing.vertical.size4,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: moderateScale(10),
    color: colors.text.secondary,
    backgroundColor: colors.background.main,
    paddingHorizontal: spacing.horizontal.size6,
    paddingVertical: spacing.vertical.size2,
    borderRadius: moderateScale(8),
    marginRight: spacing.horizontal.size4,
    marginBottom: spacing.vertical.size4,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addToCartButton: {
    flex: 1,
    marginLeft: spacing.horizontal.size12,
  },
});

export default styles;

