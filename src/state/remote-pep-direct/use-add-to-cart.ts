import {gql, useMutation} from '@apollo/client';
import Logging from '@/logging';
import {CurrentUserQuery} from './use-current-user';
const ADD_CART_ITEM = gql`
  mutation AddCartItem($input: CartItemInput!) {
    addCartItem(input: $input) {
      id
      items {
        id
        quantity
        item {
          id
          title
          price
          imgUrl
        }
      }
      total
      subtotal
    }
  }
`;

interface AddToCartInput {
  itemId: string;
  quantity: number;
  customizations?: any;
}

export const useAddToCart = () => {
  const [addCartItemMutation, {loading, error}] = useMutation(ADD_CART_ITEM, {
    refetchQueries: [CurrentUserQuery],
  });

  const addToCart = async ({itemId, quantity}: AddToCartInput) => {
    try {
      const result = await addCartItemMutation({
        variables: {
          input: {
            itemId,
            quantity,
          },
        },
      });

      console.log('Item added to cart successfully:', result.data);
      return result.data;
    } catch (err) {
      console.error('Failed to add item to cart:', err);
      Logging.logError(err as Error);
      throw err;
    }
  };

  return {
    addToCart,
    loading,
    error,
  };
};
