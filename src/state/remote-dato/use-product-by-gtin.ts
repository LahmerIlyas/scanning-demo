import {gql, useQuery} from '@apollo/client';
import {DATO_PRODUCT_FRAGMENT} from './fragments/product-details';

const PRODUCT_BY_GTIN = gql`
  query ProductByGtin($gtin: String!) {
    product(filter: {gtin: {eq: $gtin}}) {
      ...DatoProduct
    }
  }
  ${DATO_PRODUCT_FRAGMENT}
`;

export const useProductByGtin = (gtin: string) => {
  return useQuery(PRODUCT_BY_GTIN, {
    variables: {gtin},
    context: {clientName: 'dato'},
    skip: !gtin,
  });
};

