import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dataCaptureView: {
    flex: 1,
  },
  toggleContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 12,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  arBubbleContainer: {
    width: 200,
    height: 50,
    backgroundColor: '#FFFE',
    borderRadius: 25,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: 'row',
  },
  arBubbleContent: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  lookingForBetterValueBubbleContentContainer: {
    width: 160,
    height: 60,
    backgroundColor: '#FFFE',
    borderRadius: 8,

    flexDirection: 'row',
  },
  lookingForBetterValueBubbleContent: {
    width: 150,
    height: 54,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  viewAlternativesButtonText: {
    fontSize: 12,
    color: 'white'
  },
  viewAlternativesButton: {
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(40, 69, 142)',
    marginTop: 4
  },
  arBubbleHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
    flexShrink: 1
  },
  arBubbleInfo: {
    fontSize: 12,
  },
  arBubbleImageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(40, 69, 142)',
    borderRadius: 8,
  },
  arBubbleImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  addToCartImageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(40, 69, 142)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartImage: {
    width: 25,
    height: 25,
  },
  productCardContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productInfoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
