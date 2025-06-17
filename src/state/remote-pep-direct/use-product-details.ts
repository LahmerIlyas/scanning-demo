import {useMemo} from 'react';
import {gql, useQuery} from '@apollo/client';
import {ITEM_DETAILS_FRAGMENT} from './fragments/item-details';
import {useProductByGtin} from '@/state/remote-dato/use-product-by-gtin';
import {mergeProductData} from '@/utils/merge-product-data';

const GET_PRODUCT_BY_GTIN = gql`
  query GetProductByGtin($gtin: String!) {
    itemByGtin(gtin: $gtin) {
      ...ItemDetails
    }
  }
  ${ITEM_DETAILS_FRAGMENT}
`;

export const useProductDetails = (gtin: string) => {
  // DatoCMS
  const {
    data: datoData,
    loading: loadingDato,
    error: errorDato,
  } = useProductByGtin(gtin);

  // PepDirect
  const {
    data: pepData,
    loading: loadingPep,
    error: errorPep,
  } = useQuery(GET_PRODUCT_BY_GTIN, {
    variables: {gtin},
    skip: !gtin,
  });

  const mergedProduct = useMemo(() => {
    if (!datoData?.product || !pepData?.itemByGtin) {
      return null;
    }

    const datoProduct = datoData.product;
    const pepProduct = pepData.itemByGtin;

    const pepItems = [pepProduct];

    if (pepProduct.variants?.length) {
      pepItems.push(...pepProduct.variants);
    }

    const merged = mergeProductData([datoProduct], pepItems);
    return merged[0] || null;
  }, [datoData, pepData]);

  return {
    data: mergedProduct ? {itemByGtin: mergedProduct} : null,
    loading: loadingDato || loadingPep,
    error: errorDato || errorPep,
  };
};

export const getProductSpecs = (product: any) => {
  const specs = [];

  if (product?.containerType) {
    specs.push({label: 'Container Type', value: product.containerType});
  }
  if (product?.fluidOzPerPack) {
    specs.push({label: 'Fluid Oz', value: `${product.fluidOzPerPack} oz`});
  }
  if (product?.productsPerPack) {
    specs.push({
      label: 'Products per Pack',
      value: product.productsPerPack.toString(),
    });
  }
  if (product?.productPacks) {
    specs.push({
      label: 'Product Packs',
      value: product.productPacks.toString(),
    });
  }
  if (product?.weightOz) {
    specs.push({label: 'Weight', value: `${product.weightOz} oz`});
  }
  if (product?.dimensions) {
    specs.push({label: 'Dimensions', value: product.dimensions});
  }
  if (product?.minOrderQty) {
    specs.push({label: 'Min Order Qty', value: product.minOrderQty.toString()});
  }
  if (product?.inventoryQty !== null && product?.inventoryQty !== undefined) {
    specs.push({label: 'In Stock', value: product.inventoryQty.toString()});
  }

  return specs;
};

export const getDietaryInfo = (product: any) => {
  const dietary = [];

  if (product?.isDairyFree) {
    dietary.push('Dairy Free');
  }
  if (product?.isGlutenFree) {
    dietary.push('Gluten Free');
  }
  if (product?.isOrganic) {
    dietary.push('Organic');
  }
  if (product?.isVegan) {
    dietary.push('Vegan');
  }

  return dietary;
};
