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
    "\n  fragment ItemDetails on Item {\n    id\n    gtin\n    price\n    isOutOfStock\n    inventoryQty\n    compareAtPrice\n  }\n": typeof types.ItemDetailsFragmentDoc,
    "\n  mutation AcceptTermsAndConditions {\n    acceptTermsAndConditions {\n      id\n      acceptedTermsAt\n    }\n  }\n": typeof types.AcceptTermsAndConditionsDocument,
    "\n  mutation AddCartItem($input: CartItemInput!) {\n    addCartItem(input: $input) {\n      id\n      items {\n        id\n        quantity\n        item {\n          id\n          title\n          price\n          imgUrl\n        }\n      }\n      total\n      subtotal\n    }\n  }\n": typeof types.AddCartItemDocument,
    "\n  query CurrentUser {\n    currentUser {\n      id\n      appId\n      acceptedTermsAt\n      dateOfBirth\n      email\n      firstName\n      lastName\n      cart {\n        id\n        items {\n          id\n          perUnitPrice\n          quantity\n          strikethroughUnitPrice\n          subtotal\n          item {\n            id\n            imgUrl\n            price\n            brandName\n            title  \n          }\n        }\n        shipping\n        subtotal\n        total\n      }\n    }\n  }\n": typeof types.CurrentUserDocument,
    "\n  query ItemsByGtins($gtins: [String!]!, $pagination: PaginationInput) {\n    items(gtins: $gtins, pagination: $pagination) {\n      items {\n        id\n        gtin\n        price\n        isOutOfStock\n        inventoryQty\n        compareAtPrice\n      }\n      pagination {\n        total\n        count\n        page\n        totalPages\n      }\n    }\n  }\n": typeof types.ItemsByGtinsDocument,
    "\n  mutation LoginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      id\n      email\n    }\n  }\n": typeof types.LoginUserDocument,
    "\n  query GetProductByGtin($gtin: String!) {\n    itemByGtin(gtin: $gtin) {\n      ...ItemDetails\n    }\n  }\n  \n": typeof types.GetProductByGtinDocument,
    "\n  mutation SignupUser($input: SignupUserInput!) {\n    signupUser(input: $input) {\n      appId\n      dateOfBirth\n      email\n      firstName\n      id\n      lastLoggedIn\n      lastName\n    }\n  }\n": typeof types.SignupUserDocument,
    "\n  query Tenant {\n    tenant {\n      capabilities {\n        termsAndConditions {\n          lastVersionUpdatedAt\n        }\n      }\n      botProtection {\n        active\n        provider\n        siteKey {\n          android\n          ios\n        }\n      }\n    }\n  }\n": typeof types.TenantDocument,
    "\n  mutation UpdateCartItemMutation($input: CartItemInput!) {\n    updateCartItem(input: $input) {\n      id \n    }\n  }\n": typeof types.UpdateCartItemMutationDocument,
};
const documents: Documents = {
    "\n  fragment ItemDetails on Item {\n    id\n    gtin\n    price\n    isOutOfStock\n    inventoryQty\n    compareAtPrice\n  }\n": types.ItemDetailsFragmentDoc,
    "\n  mutation AcceptTermsAndConditions {\n    acceptTermsAndConditions {\n      id\n      acceptedTermsAt\n    }\n  }\n": types.AcceptTermsAndConditionsDocument,
    "\n  mutation AddCartItem($input: CartItemInput!) {\n    addCartItem(input: $input) {\n      id\n      items {\n        id\n        quantity\n        item {\n          id\n          title\n          price\n          imgUrl\n        }\n      }\n      total\n      subtotal\n    }\n  }\n": types.AddCartItemDocument,
    "\n  query CurrentUser {\n    currentUser {\n      id\n      appId\n      acceptedTermsAt\n      dateOfBirth\n      email\n      firstName\n      lastName\n      cart {\n        id\n        items {\n          id\n          perUnitPrice\n          quantity\n          strikethroughUnitPrice\n          subtotal\n          item {\n            id\n            imgUrl\n            price\n            brandName\n            title  \n          }\n        }\n        shipping\n        subtotal\n        total\n      }\n    }\n  }\n": types.CurrentUserDocument,
    "\n  query ItemsByGtins($gtins: [String!]!, $pagination: PaginationInput) {\n    items(gtins: $gtins, pagination: $pagination) {\n      items {\n        id\n        gtin\n        price\n        isOutOfStock\n        inventoryQty\n        compareAtPrice\n      }\n      pagination {\n        total\n        count\n        page\n        totalPages\n      }\n    }\n  }\n": types.ItemsByGtinsDocument,
    "\n  mutation LoginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      id\n      email\n    }\n  }\n": types.LoginUserDocument,
    "\n  query GetProductByGtin($gtin: String!) {\n    itemByGtin(gtin: $gtin) {\n      ...ItemDetails\n    }\n  }\n  \n": types.GetProductByGtinDocument,
    "\n  mutation SignupUser($input: SignupUserInput!) {\n    signupUser(input: $input) {\n      appId\n      dateOfBirth\n      email\n      firstName\n      id\n      lastLoggedIn\n      lastName\n    }\n  }\n": types.SignupUserDocument,
    "\n  query Tenant {\n    tenant {\n      capabilities {\n        termsAndConditions {\n          lastVersionUpdatedAt\n        }\n      }\n      botProtection {\n        active\n        provider\n        siteKey {\n          android\n          ios\n        }\n      }\n    }\n  }\n": types.TenantDocument,
    "\n  mutation UpdateCartItemMutation($input: CartItemInput!) {\n    updateCartItem(input: $input) {\n      id \n    }\n  }\n": types.UpdateCartItemMutationDocument,
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
export function gql(source: "\n  fragment ItemDetails on Item {\n    id\n    gtin\n    price\n    isOutOfStock\n    inventoryQty\n    compareAtPrice\n  }\n"): (typeof documents)["\n  fragment ItemDetails on Item {\n    id\n    gtin\n    price\n    isOutOfStock\n    inventoryQty\n    compareAtPrice\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AcceptTermsAndConditions {\n    acceptTermsAndConditions {\n      id\n      acceptedTermsAt\n    }\n  }\n"): (typeof documents)["\n  mutation AcceptTermsAndConditions {\n    acceptTermsAndConditions {\n      id\n      acceptedTermsAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddCartItem($input: CartItemInput!) {\n    addCartItem(input: $input) {\n      id\n      items {\n        id\n        quantity\n        item {\n          id\n          title\n          price\n          imgUrl\n        }\n      }\n      total\n      subtotal\n    }\n  }\n"): (typeof documents)["\n  mutation AddCartItem($input: CartItemInput!) {\n    addCartItem(input: $input) {\n      id\n      items {\n        id\n        quantity\n        item {\n          id\n          title\n          price\n          imgUrl\n        }\n      }\n      total\n      subtotal\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CurrentUser {\n    currentUser {\n      id\n      appId\n      acceptedTermsAt\n      dateOfBirth\n      email\n      firstName\n      lastName\n      cart {\n        id\n        items {\n          id\n          perUnitPrice\n          quantity\n          strikethroughUnitPrice\n          subtotal\n          item {\n            id\n            imgUrl\n            price\n            brandName\n            title  \n          }\n        }\n        shipping\n        subtotal\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query CurrentUser {\n    currentUser {\n      id\n      appId\n      acceptedTermsAt\n      dateOfBirth\n      email\n      firstName\n      lastName\n      cart {\n        id\n        items {\n          id\n          perUnitPrice\n          quantity\n          strikethroughUnitPrice\n          subtotal\n          item {\n            id\n            imgUrl\n            price\n            brandName\n            title  \n          }\n        }\n        shipping\n        subtotal\n        total\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ItemsByGtins($gtins: [String!]!, $pagination: PaginationInput) {\n    items(gtins: $gtins, pagination: $pagination) {\n      items {\n        id\n        gtin\n        price\n        isOutOfStock\n        inventoryQty\n        compareAtPrice\n      }\n      pagination {\n        total\n        count\n        page\n        totalPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query ItemsByGtins($gtins: [String!]!, $pagination: PaginationInput) {\n    items(gtins: $gtins, pagination: $pagination) {\n      items {\n        id\n        gtin\n        price\n        isOutOfStock\n        inventoryQty\n        compareAtPrice\n      }\n      pagination {\n        total\n        count\n        page\n        totalPages\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LoginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      id\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      id\n      email\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProductByGtin($gtin: String!) {\n    itemByGtin(gtin: $gtin) {\n      ...ItemDetails\n    }\n  }\n  \n"): (typeof documents)["\n  query GetProductByGtin($gtin: String!) {\n    itemByGtin(gtin: $gtin) {\n      ...ItemDetails\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignupUser($input: SignupUserInput!) {\n    signupUser(input: $input) {\n      appId\n      dateOfBirth\n      email\n      firstName\n      id\n      lastLoggedIn\n      lastName\n    }\n  }\n"): (typeof documents)["\n  mutation SignupUser($input: SignupUserInput!) {\n    signupUser(input: $input) {\n      appId\n      dateOfBirth\n      email\n      firstName\n      id\n      lastLoggedIn\n      lastName\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Tenant {\n    tenant {\n      capabilities {\n        termsAndConditions {\n          lastVersionUpdatedAt\n        }\n      }\n      botProtection {\n        active\n        provider\n        siteKey {\n          android\n          ios\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Tenant {\n    tenant {\n      capabilities {\n        termsAndConditions {\n          lastVersionUpdatedAt\n        }\n      }\n      botProtection {\n        active\n        provider\n        siteKey {\n          android\n          ios\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateCartItemMutation($input: CartItemInput!) {\n    updateCartItem(input: $input) {\n      id \n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCartItemMutation($input: CartItemInput!) {\n    updateCartItem(input: $input) {\n      id \n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;