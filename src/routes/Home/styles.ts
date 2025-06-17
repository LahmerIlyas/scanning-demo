import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import {moderateScale} from '@/utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.main,
  },
  content: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: spacing.vertical.size16,
    marginHorizontal: spacing.horizontal.globalHorizontalPadding,
    marginTop: spacing.vertical.size16,
  },
  placeholder: {
    fontSize: moderateScale(16),
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: spacing.vertical.size32,
    marginHorizontal: spacing.horizontal.globalHorizontalPadding,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: spacing.vertical.size16,
    fontSize: moderateScale(16),
    color: colors.text.secondary,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.horizontal.size38,
  },
  errorText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.status.error,
    textAlign: 'center',
    marginBottom: spacing.vertical.size8,
  },
  errorSubtext: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    textAlign: 'center',
  },
  loadingFooter: {
    padding: spacing.horizontal.globalHorizontalPadding,
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.horizontal.globalHorizontalPadding,
    paddingTop: spacing.vertical.size64,
  },
  emptyTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: spacing.vertical.size24,
    marginBottom: spacing.vertical.size8,
  },
  emptySubtitle: {
    fontSize: moderateScale(16),
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.vertical.size32,
  },
});

export default styles;
