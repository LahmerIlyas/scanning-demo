import {gql} from '@apollo/client';

export const ITEM_DETAILS_FRAGMENT = gql`
  fragment ItemDetails on Item {
    id
    gtin
    price
    isOutOfStock
    inventoryQty
    compareAtPrice
  }
`;
