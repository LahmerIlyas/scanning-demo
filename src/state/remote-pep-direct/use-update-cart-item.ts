import {useMutation} from '@apollo/client';
import {CurrentUserQuery} from './use-current-user';
import {gql} from './__generated__';

export const updateCartItemMutation = gql(`
  mutation UpdateCartItemMutation($input: CartItemInput!) {
    updateCartItem(input: $input) {
      id 
    }
  }
`);

export const useUpdateCartItem = () => {
  return useMutation(updateCartItemMutation, {
    refetchQueries: [CurrentUserQuery],
  });
};
