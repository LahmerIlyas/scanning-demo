import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import dimensions from '@/styles/dimensions';
import {moderateScale} from '@/utils/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.blue,
    paddingHorizontal: spacing.horizontal.globalHorizontalPadding,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: spacing.vertical.size8,
  },
  backButton: {
    padding: spacing.horizontal.size8,
  },
  title: {
    flex: 1,
    fontSize: moderateScale(18),
    fontWeight: '600',
    textAlign: 'center',
    marginHorizontal: spacing.horizontal.size16,
  },
  placeholder: {
    width: 40,
  },
  deliverToRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliverToText: {
    color: colors.secondary.white,
    fontSize: moderateScale(14),
    marginLeft: spacing.horizontal.size4,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.horizontal.size6,
  },
  cartButton: {
    paddingVertical: spacing.horizontal.size8,
    paddingRight: 0,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -spacing.vertical.size2,
    right: -spacing.horizontal.size8,
    backgroundColor: colors.status.error,
    borderRadius: dimensions.height.size20 / 2,
    minWidth: dimensions.height.size20,
    height: dimensions.height.size20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.horizontal.size4,
  },
  cartBadgeText: {
    color: colors.secondary.white,
    fontSize: moderateScale(9),
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default styles;
