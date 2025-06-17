import {useQuery} from '@apollo/client';
import {gql} from '@/state/remote-pep-direct/__generated__/gql';

export const CurrentUserQuery = gql(`
  query CurrentUser {
    currentUser {
      id
      appId
      acceptedTermsAt
      dateOfBirth
      email
      firstName
      lastName
      cart {
        id
        items {
          id
          perUnitPrice
          quantity
          strikethroughUnitPrice
          subtotal
          item {
            id
            imgUrl
            price
            brandName
            title  
          }
        }
        shipping
        subtotal
        total
      }
    }
  }
`);

export const useCurrentUser = () => useQuery(CurrentUserQuery);
