import {ProductsByCategorySlugQuery} from '@/state/remote-dato/__generated__/types';
import {ItemsByGtinsQuery} from '@/state/remote-pep-direct/__generated__/types';

type DatoProduct = NonNullable<
  ProductsByCategorySlugQuery['productCategory']
>['productList'][0];
type PepDirectItem = NonNullable<ItemsByGtinsQuery['items']>['items'][0];

/**
 * Merges DatoCMS product data with PepDirect inventory by GTIN.
 * Handles variants and filters based on showOnUi and showEvenIfOutOfStock.
 */
export const mergeProductData = (
  datoProducts: DatoProduct[] = [],
  pepItems: PepDirectItem[] = [],
) => {
  // Index PepDirect items by GTIN for O(1) look-ups
  const pepIdx = new Map(pepItems.map(p => [p.gtin, p]));

  // Combine Dato + Pep, filtering out anything the user can't see
  return datoProducts.flatMap(prod => {
    const main = pepIdx.get(prod.gtin!);
    if (!main) {
      return [];
    }

    // Attach Pep fields to the Dato record
    const merged = {...prod, ...main};

    // Do the same for any variants
    const variantObjs = (prod.variants?.variants ?? []).map(v => {
      const pd = pepIdx.get(v.gtin!);
      return pd ? {...v, ...pd} : v;
    });

    return [{...merged, variants: {...prod.variants, variants: variantObjs}}];
  });
};
