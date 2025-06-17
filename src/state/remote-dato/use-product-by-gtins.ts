import { gql, useQuery } from '@apollo/client';
import { DATO_PRODUCT_FRAGMENT } from './fragments/product-details';

const PRODUCT_BY_GTINS = gql`
  query ProductByGtins($gtins: [String]!) {
    allProducts(filter: {gtin: {in: $gtins}}) {
      ...DatoProduct
    }
  }
  ${DATO_PRODUCT_FRAGMENT}
`;

export const useProductByGtins = (gtins: string[]) => {
  return useQuery(PRODUCT_BY_GTINS, {
    variables: { gtins },
    context: { clientName: 'dato' },
    skip: !gtins,
  });
};

