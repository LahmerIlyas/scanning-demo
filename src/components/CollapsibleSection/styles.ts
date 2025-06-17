import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import {moderateScale} from '@/utils/styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.vertical.size16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.vertical.size12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.text.primary,
    flex: 1,
  },
  content: {
    overflow: 'hidden',
  },
  contentInner: {
    paddingVertical: spacing.vertical.size16,
  },
});

export default styles;

