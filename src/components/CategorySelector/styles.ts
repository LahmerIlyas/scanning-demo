import {colors} from '@/styles/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.blue,
    paddingBottom: 18,
    paddingTop: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.secondary.white,
  },
  selectedCategory: {
    backgroundColor: colors.secondary.white,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.secondary.white,
  },
  selectedCategoryText: {
    color: colors.primary.blue,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  loadingText: {
    color: colors.secondary.white,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  errorContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  errorText: {
    color: colors.secondary.white,
    fontSize: 14,
    fontWeight: '500',
  },
});
