import { useMemo } from 'react';
import { useProductsByCategory as useDatoProductsByCategory } from '@/state/remote-dato/use-products-by-category';
import { useItemsByGtins } from '@/state/remote-pep-direct/use-items-by-gtins';
import { mergeProductData } from '@/utils/merge-product-data';

export const useProductsByCategory = (slug: string) => {
  const {
    datoProducts,
    gtins,
    loading: loadingDato,
    error: errorDato,
    categoryInfo,
  } = useDatoProductsByCategory(slug);

  const {
    pepItems,
    loading: loadingPep,
    error: errorPep,
    hasMore,
    loadMore,
    isLoadingMore,
    totalPepItems,
  } = useItemsByGtins(gtins);

  const products = useMemo(
    () => mergeProductData(datoProducts, pepItems) || [],
    [datoProducts, pepItems],
  );

  return {
    products,
    loading: loadingDato || loadingPep,
    loadingDato,
    loadingPep,
    error: errorDato ?? errorPep ?? null,
    categoryInfo,
    hasMore,
    loadMore,
    isLoadingMore,
    totalProducts: datoProducts.length,
    totalPepItems,
  };
};
