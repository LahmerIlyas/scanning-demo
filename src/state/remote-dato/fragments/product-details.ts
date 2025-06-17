import {gql} from '@apollo/client';

export const DATO_PRODUCT_FRAGMENT = gql`
  fragment DatoProduct on ProductRecord {
    id
    title
    showOnUi
    showEvenIfOutOfStock
    gtin
    slug
    ingredients
    description {
      value
      blocks
    }
    productImages {
      url
      width
    }
    brandName {
      title
    }
    itemFamily
    itemVariant
    itemSize
    dimensions
    variants {
      id
      title
      variantsDropdownLabel
      variants {
        id
        title
        gtin
        slug
        itemVariant
        ingredients
        productImages {
          url
          width
        }
        itemFamily
        itemVariant
        itemSize
        brandName {
          title
        }
        dimensions
      }
    }
  }
`;
