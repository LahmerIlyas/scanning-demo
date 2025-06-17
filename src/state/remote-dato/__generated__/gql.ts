/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment DatoProduct on ProductRecord {\n    id\n    title\n    showOnUi\n    showEvenIfOutOfStock\n    gtin\n    slug\n    ingredients\n    description {\n      value\n      blocks\n    }\n    productImages {\n      url\n      width\n    }\n    brandName {\n      title\n    }\n    itemFamily\n    itemVariant\n    itemSize\n    dimensions\n    variants {\n      id\n      title\n      variantsDropdownLabel\n      variants {\n        id\n        title\n        gtin\n        slug\n        itemVariant\n        ingredients\n        productImages {\n          url\n          width\n        }\n        itemFamily\n        itemVariant\n        itemSize\n        brandName {\n          title\n        }\n        dimensions\n      }\n    }\n  }\n": typeof types.DatoProductFragmentDoc,
    "\n  query ProductByGtin($gtin: String!) {\n    product(filter: {gtin: {eq: $gtin}}) {\n      ...DatoProduct\n    }\n  }\n  \n": typeof types.ProductByGtinDocument,
    "\n  query ProductByGtins($gtins: [String]!) {\n    allProducts(filter: {gtin: {in: $gtins}}) {\n      ...DatoProduct\n    }\n  }\n  \n": typeof types.ProductByGtinsDocument,
    "\n  query AllProductCategories {\n    allProductCategories {\n      id\n      title\n      slug\n    }\n  }\n": typeof types.AllProductCategoriesDocument,
    "\n  query ProductsByCategorySlug($slug: String!) {\n    productCategory(filter: {slug: {eq: $slug}}) {\n      id\n      title\n      slug\n      productList {\n        ...DatoProduct\n      }\n    }\n  }\n  \n": typeof types.ProductsByCategorySlugDocument,
};
const documents: Documents = {
    "\n  fragment DatoProduct on ProductRecord {\n    id\n    title\n    showOnUi\n    showEvenIfOutOfStock\n    gtin\n    slug\n    ingredients\n    description {\n      value\n      blocks\n    }\n    productImages {\n      url\n      width\n    }\n    brandName {\n      title\n    }\n    itemFamily\n    itemVariant\n    itemSize\n    dimensions\n    variants {\n      id\n      title\n      variantsDropdownLabel\n      variants {\n        id\n        title\n        gtin\n        slug\n        itemVariant\n        ingredients\n        productImages {\n          url\n          width\n        }\n        itemFamily\n        itemVariant\n        itemSize\n        brandName {\n          title\n        }\n        dimensions\n      }\n    }\n  }\n": types.DatoProductFragmentDoc,
    "\n  query ProductByGtin($gtin: String!) {\n    product(filter: {gtin: {eq: $gtin}}) {\n      ...DatoProduct\n    }\n  }\n  \n": types.ProductByGtinDocument,
    "\n  query ProductByGtins($gtins: [String]!) {\n    allProducts(filter: {gtin: {in: $gtins}}) {\n      ...DatoProduct\n    }\n  }\n  \n": types.ProductByGtinsDocument,
    "\n  query AllProductCategories {\n    allProductCategories {\n      id\n      title\n      slug\n    }\n  }\n": types.AllProductCategoriesDocument,
    "\n  query ProductsByCategorySlug($slug: String!) {\n    productCategory(filter: {slug: {eq: $slug}}) {\n      id\n      title\n      slug\n      productList {\n        ...DatoProduct\n      }\n    }\n  }\n  \n": types.ProductsByCategorySlugDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment DatoProduct on ProductRecord {\n    id\n    title\n    showOnUi\n    showEvenIfOutOfStock\n    gtin\n    slug\n    ingredients\n    description {\n      value\n      blocks\n    }\n    productImages {\n      url\n      width\n    }\n    brandName {\n      title\n    }\n    itemFamily\n    itemVariant\n    itemSize\n    dimensions\n    variants {\n      id\n      title\n      variantsDropdownLabel\n      variants {\n        id\n        title\n        gtin\n        slug\n        itemVariant\n        ingredients\n        productImages {\n          url\n          width\n        }\n        itemFamily\n        itemVariant\n        itemSize\n        brandName {\n          title\n        }\n        dimensions\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment DatoProduct on ProductRecord {\n    id\n    title\n    showOnUi\n    showEvenIfOutOfStock\n    gtin\n    slug\n    ingredients\n    description {\n      value\n      blocks\n    }\n    productImages {\n      url\n      width\n    }\n    brandName {\n      title\n    }\n    itemFamily\n    itemVariant\n    itemSize\n    dimensions\n    variants {\n      id\n      title\n      variantsDropdownLabel\n      variants {\n        id\n        title\n        gtin\n        slug\n        itemVariant\n        ingredients\n        productImages {\n          url\n          width\n        }\n        itemFamily\n        itemVariant\n        itemSize\n        brandName {\n          title\n        }\n        dimensions\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ProductByGtin($gtin: String!) {\n    product(filter: {gtin: {eq: $gtin}}) {\n      ...DatoProduct\n    }\n  }\n  \n"): (typeof documents)["\n  query ProductByGtin($gtin: String!) {\n    product(filter: {gtin: {eq: $gtin}}) {\n      ...DatoProduct\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ProductByGtins($gtins: [String]!) {\n    allProducts(filter: {gtin: {in: $gtins}}) {\n      ...DatoProduct\n    }\n  }\n  \n"): (typeof documents)["\n  query ProductByGtins($gtins: [String]!) {\n    allProducts(filter: {gtin: {in: $gtins}}) {\n      ...DatoProduct\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllProductCategories {\n    allProductCategories {\n      id\n      title\n      slug\n    }\n  }\n"): (typeof documents)["\n  query AllProductCategories {\n    allProductCategories {\n      id\n      title\n      slug\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ProductsByCategorySlug($slug: String!) {\n    productCategory(filter: {slug: {eq: $slug}}) {\n      id\n      title\n      slug\n      productList {\n        ...DatoProduct\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query ProductsByCategorySlug($slug: String!) {\n    productCategory(filter: {slug: {eq: $slug}}) {\n      id\n      title\n      slug\n      productList {\n        ...DatoProduct\n      }\n    }\n  }\n  \n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;