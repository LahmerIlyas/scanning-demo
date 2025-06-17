import {StyleSheet} from 'react-native';
import {colors} from '@/styles/colors';
import spacing from '@/styles/spacing';
import {moderateScale, verticalScale} from '@/utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.black || '#000000',
  },
  bottomTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(14),
    backgroundColor: colors.primary.blue,
  },
  topTabContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(14),
  },
  leftButton: {
    paddingRight: spacing.horizontal.size12,
  },
  leftButtonsContainer: {
    flexDirection: 'row',
  },
  closeButton: {
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  webview: {
    flex: 1,
  },
});

export default styles;

