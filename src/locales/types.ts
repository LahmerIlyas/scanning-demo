export type AvailableLocale = 'en-US' | 'es-MX';

export interface GlobalLocale {
  save: string;
  cancel: string;
  ok: string;
  error: string;
  success: string;
  loading: string;
  retry: string;
  yes: string;
  no: string;
  all: string;
}

export interface SignInLocale {
  email: string;
  password: string;
  login: string;
  loginCredentialsError: string;
  cookieNotFoundError: string;
}

export interface HomeLocale {
  home: string;
  loadingProducts: string;
  errorLoadingProducts: string;
  loadingMoreProducts: string;
  noProductsFound: string;
  products: string;
  addedToCartSuccess: string;
  addToCartError: string;
  categoryAll: string;
  categoryHydration: string;
  categoryProtein: string;
  categoryEnergy: string;
  categoryEquipment: string;
  tryBrowsingAllProducts: string;
  shopAllProducts: string;
}

export interface ProductDetailsLocale {
  addToCart: string;
  outOfStock: string;
  productDetails: string;
  loading: string;
  productNotFound: string;
  unableToLoadProduct: string;
  goBack: string;
  success: string;
  addedToCartSuccess: string;
  addToCartError: string;
  flavor: string;
  overview: string;
  dietaryInformation: string;
  nutritionInformation: string;
  ingredients: string;
  nutrients: string;
  details: string;
  shippingAndReturns: string;
  totalPrice: string;
  brand: string;
  ingredientsMaterial: string;
  sizeWeight: string;
  caseUpc: string;
  yield: string;
  packing: string;
  shippingDescription: string;
  returnsDescription: string;
}

export interface CartLocale {
  cart: string;
  yourCart: string;
  item: string;
  items: string;
  minimumOrderMessage: string;
  loadingCart: string;
  emptyCart: string;
  startShopping: string;
  goShoppingNow: string;
  orderSummary: string;
  subtotal: string;
  shipping: string;
  discount: string;
  free: string;
  total: string;
  youSave: string;
  proceedToCheckout: string;
  addMoreItems: string;
  perUnit: string;
}

export interface CheckoutLocale {
  checkout: string;
}

export interface AccountLocale {
  account: string;
  profile: string;
  logout: string;
  language: string;
}

export interface OrdersLocale {
  orders: string;
}

export interface Locales {
  global: GlobalLocale;
  signIn: SignInLocale;
  home: HomeLocale;
  productDetails: ProductDetailsLocale;
  cart: CartLocale;
  checkout: CheckoutLocale;
  account: AccountLocale;
  orders: OrdersLocale;
}

export type LocaleKey = keyof Locales;

