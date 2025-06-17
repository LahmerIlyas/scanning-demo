import {useMemo} from 'react';
import {gql, useQuery} from '@apollo/client';
import {DATO_PRODUCT_FRAGMENT} from './fragments/product-details';

const PRODUCTS_BY_CATEGORY_SLUG = gql`
  query ProductsByCategorySlug($slug: String!) {
    productCategory(filter: {slug: {eq: $slug}}) {
      id
      title
      slug
      productList {
        ...DatoProduct
      }
    }
  }
  ${DATO_PRODUCT_FRAGMENT}
`;

export const useProductsByCategory = (slug: string) => {
  const {
    data: datoData,
    loading: loadingDato,
    error: errorDato,
  } = useQuery(PRODUCTS_BY_CATEGORY_SLUG, {
    variables: {slug},
    context: {clientName: 'dato'},
    skip: !slug || slug === 'All',
  });

  const datoProducts = useMemo(
    () => datoData?.productCategory?.productList ?? [],
    [datoData?.productCategory?.productList],
  );

  const gtins = useMemo(
    () =>
      datoProducts
        .flatMap((prod: any) => [
          prod.gtin,
          ...(prod.variants?.variants?.map((v: any) => v.gtin) ?? []),
        ])
        .filter(Boolean) as string[],
    [datoProducts],
  );

  const categoryInfo = datoData?.productCategory
    ? {
        id: datoData.productCategory.id,
        title: datoData.productCategory.title,
        slug: datoData.productCategory.slug,
      }
    : null;

  return {
    datoProducts,
    gtins,
    loading: loadingDato,
    error: errorDato,
    categoryInfo,
  };
};
