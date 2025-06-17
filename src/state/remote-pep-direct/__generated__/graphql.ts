/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a date. The Date appears in a JSON
   * response as an ISO8601 formatted string, without a time component.
   */
  Date: { input: any; output: any; }
  /**
   * The `DateTime` scalar type represents a date and time in the UTC
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string, including UTC timezone ("Z"). The parsed date and time string will
   * be converted to UTC if there is an offset.
   */
  DateTime: { input: any; output: any; }
  /**
   * The `Decimal` scalar type represents signed double-precision fractional
   * values parsed by the `Decimal` library. The Decimal appears in a JSON
   * response as a string to preserve precision.
   */
  Decimal: { input: any; output: any; }
  /** `Json` scalar type represented as UTF-8 character sequences. */
  Json: { input: any; output: any; }
  /**
   * The `Naive DateTime` scalar type represents a naive date and time without
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string.
   */
  NaiveDateTime: { input: any; output: any; }
  /** The `UUID4` scalar type. */
  UUID4: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  appId?: Maybe<Scalars['UUID4']['output']>;
  credits: Array<Credit>;
  id?: Maybe<Scalars['UUID4']['output']>;
  invoicing?: Maybe<Invoicing>;
  managedAddressesOnly?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sapLink?: Maybe<SapLink>;
  submittedOrders?: Maybe<SubmittedOrderPayload>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  type: Scalars['String']['output'];
};


export type AccountSubmittedOrdersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type AccountVerificationLocalization = {
  __typename?: 'AccountVerificationLocalization';
  body: Scalars['String']['output'];
  buttonText: Scalars['String']['output'];
  contactSupportText: Scalars['String']['output'];
  emailSentText: Scalars['String']['output'];
  heading: Scalars['String']['output'];
  invalidLinkText: Scalars['String']['output'];
  tokenExpiredText: Scalars['String']['output'];
  verifySuccessText: Scalars['String']['output'];
};

export type Activity = {
  __typename?: 'Activity';
  activityId: Scalars['String']['output'];
  dateEnd?: Maybe<Scalars['DateTime']['output']>;
  dateStart?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  displayName?: Maybe<Scalars['String']['output']>;
  extraData?: Maybe<Scalars['Json']['output']>;
  freqCap?: Maybe<Scalars['Int']['output']>;
  freqPeriodId?: Maybe<Scalars['Int']['output']>;
  freqPeriodName?: Maybe<Scalars['String']['output']>;
  imgUrl?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  numPoints: Scalars['Int']['output'];
};

export type ActivityAwarded = {
  __typename?: 'ActivityAwarded';
  awarded?: Maybe<Scalars['Boolean']['output']>;
  numPoints?: Maybe<Scalars['Int']['output']>;
};

export type ActivityCreditByPepdirectActivityIdInput = {
  activityDate: Scalars['DateTime']['input'];
  extraData?: InputMaybe<Scalars['Json']['input']>;
  pepdirectActivityId: Scalars['String']['input'];
};

export type ActivityCreditInput = {
  activityDate: Scalars['DateTime']['input'];
  activityId: Scalars['String']['input'];
  extraData?: InputMaybe<Scalars['Json']['input']>;
};

export type AddItemWithUniqueCustomizationsInput = {
  analyticsDetails?: InputMaybe<Scalars['Json']['input']>;
  customizations: Scalars['Json']['input'];
  id?: InputMaybe<Scalars['UUID4']['input']>;
  itemId: Scalars['UUID4']['input'];
  merchandiseId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  subscriptionIntervalInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  company?: Maybe<Scalars['String']['output']>;
  countryCode: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['UUID4']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  isRemovable?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  line1: Scalars['String']['output'];
  line2?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  specialInstructions?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  taxId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user: User;
  zip: Scalars['String']['output'];
};

export type AddressConfig = {
  __typename?: 'AddressConfig';
  addressNickname?: Maybe<Scalars['Boolean']['output']>;
  addressSpecialInstructions?: Maybe<Scalars['Boolean']['output']>;
  companyName?: Maybe<Scalars['Boolean']['output']>;
  countriesAllowed: Array<CountriesAllowed>;
  isStateRequired?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  phoneNumberCountryCodesAllowed?: Maybe<Array<Maybe<PhoneNumberCountryCodesAllowed>>>;
  requireValidation: ValidationRequirement;
  statesConfig: Array<StatesConfig>;
  taxId?: Maybe<Scalars['Boolean']['output']>;
};

export type AddressVerificationLocalization = {
  __typename?: 'AddressVerificationLocalization';
  addressErrorBoldText: Scalars['String']['output'];
  addressErrorText: Scalars['String']['output'];
  editManuallyText: Scalars['String']['output'];
  editOnlyText: Scalars['String']['output'];
  editOrSuggestionText: Scalars['String']['output'];
  enteredAddressText: Scalars['String']['output'];
  invalidZipCodeText: Scalars['String']['output'];
  keepEnteredButtonText: Scalars['String']['output'];
  reviewAddressText: Scalars['String']['output'];
  suggestedAddressText: Scalars['String']['output'];
  titleText: Scalars['String']['output'];
  useSuggestedButtonText: Scalars['String']['output'];
  zipErrorBoldText: Scalars['String']['output'];
  zipErrorText: Scalars['String']['output'];
};

export type AiDesign = {
  __typename?: 'AiDesign';
  appId: Scalars['UUID4']['output'];
  colors: Array<Maybe<AiDesignColor>>;
  featuredWeight: Scalars['Int']['output'];
  generatedByTenant: Scalars['Boolean']['output'];
  id: Scalars['UUID4']['output'];
  imageUrls: Scalars['Json']['output'];
  insertedAt: Scalars['DateTime']['output'];
  item: Item;
  promptAiEnhanced?: Maybe<Scalars['String']['output']>;
  promptUser?: Maybe<Scalars['String']['output']>;
  traits: Array<Maybe<AiDesignTrait>>;
  userId?: Maybe<Scalars['UUID4']['output']>;
};

export type AiDesignColor = {
  __typename?: 'AiDesignColor';
  hexValue: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AiDesignColorInput = {
  hexValue: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AiDesignFilterInput = {
  colors?: InputMaybe<Array<AiDesignColorInput>>;
  ids?: InputMaybe<Array<Scalars['UUID4']['input']>>;
  /** Used to narrow down designs returned based on who created them. Defaults to [TENANT] */
  sources?: InputMaybe<Array<SourceTypes>>;
  traits?: InputMaybe<Array<AiDesignTraitInput>>;
};

export type AiDesignResult = {
  __typename?: 'AiDesignResult';
  items?: Maybe<Array<AiDesign>>;
  pagination: PaginationData;
};

export type AiDesignSortingInput = {
  sortBy: SortableFields;
  sortOrder: SortableMethods;
};

export type AiDesignTrait = {
  __typename?: 'AiDesignTrait';
  id: Scalars['String']['output'];
};

export type AiDesignTraitInput = {
  /** ID of Dato trait record */
  id: Scalars['String']['input'];
};

export type AllowedState = {
  __typename?: 'AllowedState';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AnalyticsConfig = {
  __typename?: 'AnalyticsConfig';
  gtm?: Maybe<GtmConfig>;
  projectId?: Maybe<Scalars['String']['output']>;
  writeKey?: Maybe<Scalars['String']['output']>;
};

export type ApplePayCard = {
  __typename?: 'ApplePayCard';
  billingAddress?: Maybe<BraintreeAddress>;
  bin: Scalars['String']['output'];
  cardType: Scalars['String']['output'];
  cardholderName: Scalars['String']['output'];
  countryOfIssuance: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  default: Scalars['Boolean']['output'];
  expirationMonth: Scalars['String']['output'];
  expirationYear: Scalars['String']['output'];
  expired: Scalars['Boolean']['output'];
  imageUrl: Scalars['String']['output'];
  issuingBank: Scalars['String']['output'];
  last4: Scalars['String']['output'];
  paymentInstrumentName: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  sourceDescription: Scalars['String']['output'];
  subscriptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  token: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type BasicBehaviour = {
  __typename?: 'BasicBehaviour';
  name: BehaviourEnum;
};

export type Bazaarvoice = {
  __typename?: 'Bazaarvoice';
  encryptedEmail?: Maybe<Scalars['String']['output']>;
  encryptionKeyId?: Maybe<Scalars['String']['output']>;
};

/** Behaviour which may or may not have attributes */
export type Behaviour = BasicBehaviour | BogoBehaviour | DynamicBundlesBehaviour | TieredBehaviour;

export enum BehaviourEnum {
  /** Basic discount logic, discounts all matching items by configured amount. */
  Basic = 'BASIC',
  /** Buy one (or many) get one (or many) at the specified percent off */
  Bogo = 'BOGO',
  /** Dynamic Bundles discount logic, discounts matching items designated with the campaign_id */
  DynamicBundles = 'DYNAMIC_BUNDLES',
  /** Tiered discount logic, discounts matching items according to a tier structure. */
  Tiered = 'TIERED'
}

export type BogoAttributes = {
  __typename?: 'BogoAttributes';
  applyAmount: Scalars['Int']['output'];
  triggerPoint: Scalars['Int']['output'];
};

export type BogoBehaviour = {
  __typename?: 'BogoBehaviour';
  attributes: BogoAttributes;
  name: BehaviourEnum;
};

export type BotProtection = {
  __typename?: 'BotProtection';
  active: Scalars['Boolean']['output'];
  provider?: Maybe<BotProtectionProvider>;
  siteKey?: Maybe<BotProtectionSiteKey>;
};

export enum BotProtectionProvider {
  GoogleRecaptcha = 'GOOGLE_RECAPTCHA'
}

export type BotProtectionSiteKey = {
  __typename?: 'BotProtectionSiteKey';
  android: Scalars['String']['output'];
  ios: Scalars['String']['output'];
  web: Scalars['String']['output'];
};

export type BraintreeAddress = {
  __typename?: 'BraintreeAddress';
  company?: Maybe<Scalars['String']['output']>;
  countryCodeAlpha2?: Maybe<Scalars['String']['output']>;
  countryCodeAlpha3?: Maybe<Scalars['String']['output']>;
  countryCodeNumeric?: Maybe<Scalars['String']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  extendedAddress?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  locality?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type BrandConfig = {
  __typename?: 'BrandConfig';
  audience: Scalars['String']['output'];
  cdnHost?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  contactUrl?: Maybe<Scalars['String']['output']>;
  copyright: Scalars['String']['output'];
  customCss?: Maybe<Scalars['String']['output']>;
  customTexts: Array<CustomText>;
  customizations: BrandConfigCustomizations;
  email?: Maybe<Scalars['String']['output']>;
  logoUrl: Scalars['String']['output'];
  optInTextLocalized: Scalars['String']['output'];
  supportEmail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  trackingFonts?: Maybe<Array<Maybe<BrandConfigTrackingFonts>>>;
  yearsAgeGate?: Maybe<Scalars['Int']['output']>;
};

export type BrandConfigCustomizations = {
  __typename?: 'BrandConfigCustomizations';
  account?: Maybe<BrandConfigCustomizationsAccount>;
  contacts: Array<BrandConfigCustomizationsContact>;
  css: Array<BrandConfigCustomizationsCss>;
  fonts: Array<BrandConfigCustomizationsFont>;
  images: Array<BrandConfigCustomizationsImage>;
  links: Array<BrandConfigCustomizationsLink>;
};

export type BrandConfigCustomizationsAccount = {
  __typename?: 'BrandConfigCustomizationsAccount';
  profilePageTitle?: Maybe<Scalars['String']['output']>;
  signinPageTitle?: Maybe<Scalars['String']['output']>;
  signupPageTitle?: Maybe<Scalars['String']['output']>;
  valueprops: Array<BrandConfigCustomizationsAccountValueprops>;
};

export type BrandConfigCustomizationsAccountValueprops = {
  __typename?: 'BrandConfigCustomizationsAccountValueprops';
  imgUrl?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type BrandConfigCustomizationsContact = {
  __typename?: 'BrandConfigCustomizationsContact';
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  showCountry?: Maybe<Scalars['Boolean']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  zip?: Maybe<Scalars['String']['output']>;
};

export type BrandConfigCustomizationsCss = {
  __typename?: 'BrandConfigCustomizationsCss';
  overrides: Array<BrandConfigCustomizationsCssOverride>;
  selector: Scalars['String']['output'];
};

export type BrandConfigCustomizationsCssOverride = {
  __typename?: 'BrandConfigCustomizationsCssOverride';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BrandConfigCustomizationsFont = {
  __typename?: 'BrandConfigCustomizationsFont';
  meta?: Maybe<Array<BrandConfigCustomizationsFontMeta>>;
  name: Scalars['String']['output'];
  style?: Maybe<Scalars['String']['output']>;
  urls: Array<BrandConfigCustomizationsFontSources>;
  weight?: Maybe<Scalars['String']['output']>;
};

export type BrandConfigCustomizationsFontMeta = {
  __typename?: 'BrandConfigCustomizationsFontMeta';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BrandConfigCustomizationsFontSources = {
  __typename?: 'BrandConfigCustomizationsFontSources';
  format?: Maybe<Scalars['String']['output']>;
  local?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BrandConfigCustomizationsImage = {
  __typename?: 'BrandConfigCustomizationsImage';
  alt?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  src: Scalars['String']['output'];
};

export type BrandConfigCustomizationsLink = {
  __typename?: 'BrandConfigCustomizationsLink';
  location: Scalars['String']['output'];
  newTab: Scalars['Boolean']['output'];
  position: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BrandConfigTrackingFonts = {
  __typename?: 'BrandConfigTrackingFonts';
  font: Scalars['String']['output'];
  isTrackingRequired: Scalars['Boolean']['output'];
  resource: Scalars['String']['output'];
};

export type BundleComponent = {
  __typename?: 'BundleComponent';
  componentPriceItems?: Maybe<Array<Maybe<DynamicBundleItem>>>;
  imgUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  qtyType: Scalars['String']['output'];
  requiredQty: Scalars['Int']['output'];
  subscriptionOption?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BundleItem = {
  __typename?: 'BundleItem';
  imgUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/**
 * DynamicBundle are composed of items (CartItem or LineItem) which contain DynamicBundle
 * metadata in a cart. A BundleLineItem is a convenience struct that will create one item
 * that is an accumulation of all the items which are part of a DynamicBundle.
 */
export type BundleLineItem = {
  __typename?: 'BundleLineItem';
  /** components of the bundle other than the primary component */
  bundleComponents: Array<Maybe<BundleComponent>>;
  /** The id of the DynamicBundle */
  bundleId: Scalars['UUID4']['output'];
  /** The cart reference of the DynamicBundle */
  cartBundleReference: Scalars['Int']['output'];
  /** Will contain information of the discount for the DynamicBundle */
  discounts: Array<LineItemDiscount>;
  /** The DynamicBundle the items belong to */
  dynamicBundle: DynamicBundle;
  /** A list of items that are NOT associated with the primary component */
  dynamicBundleItems?: Maybe<Array<DynamicBundleItem>>;
  /** This is the image from the primary component */
  imgUrl?: Maybe<Scalars['String']['output']>;
  /** aggregated gtin item notifications */
  itemNotifications: Array<Scalars['String']['output']>;
  /** This will always the same as subtotal because DynamicBundles are quantity of 1 */
  perUnitPrice: Scalars['Int']['output'];
  /** A list of items that are associated with the primary component */
  primaryBundleItems?: Maybe<Array<DynamicBundleItem>>;
  /** The primary component of the DynamicBundle */
  primaryComponent: BundleComponent;
  /** This is the quantity of all the items that are part of the DynamicBundle */
  quantity: Scalars['Int']['output'];
  /** This is the cumulative strikethrough price of all the items in the DynamicBundle */
  strikethroughUnitPrice?: Maybe<Scalars['Int']['output']>;
  /** This is the total of the items after the discount for the DynamicBundle is applied */
  subtotal: Scalars['Int']['output'];
  /** The title of the primary component for the DynamicBundle */
  title: Scalars['String']['output'];
};

export type CalculateOrderDiscountsInput = {
  orderId?: InputMaybe<Scalars['UUID4']['input']>;
  price?: InputMaybe<PriceInput>;
};

export type CalculateOrderDiscountsPayload = {
  __typename?: 'CalculateOrderDiscountsPayload';
  order?: Maybe<Order>;
};

export type CalculateOrderPayload = {
  __typename?: 'CalculateOrderPayload';
  order?: Maybe<Order>;
};

export type CancelOrderSubscriptionInput = {
  cancelReason: Scalars['String']['input'];
  /** ID of Order Subscription */
  id: Scalars['UUID4']['input'];
};

export type Capabilities = {
  __typename?: 'Capabilities';
  signUp: CapabilitiesSignUp;
  termsAndConditions?: Maybe<CapabilitiesTermsAndConditions>;
};

/**
 * The sign up capability informs consumers of the API if the Tenant
 * allows users to sign up via the Secure Portal.
 */
export type CapabilitiesSignUp = {
  __typename?: 'CapabilitiesSignUp';
  enabled: Scalars['Boolean']['output'];
};

/** The capability to request accepting most recent version of T&C by user. */
export type CapabilitiesTermsAndConditions = {
  __typename?: 'CapabilitiesTermsAndConditions';
  lastVersionUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  appId: Scalars['UUID4']['output'];
  dynamicBundles?: Maybe<Scalars['Json']['output']>;
  id: Scalars['UUID4']['output'];
  isGift?: Maybe<Scalars['Boolean']['output']>;
  items: Array<CartItem>;
  lineItems: Array<CartItemsAndBundleItems>;
  loyaltyData?: Maybe<LoyaltyData>;
  /** list of loyalty rewards the user has applied to their cart. Update via applyLoyaltyRewardToCart mutation. */
  loyaltyRewards?: Maybe<Array<Maybe<LoyaltyReward>>>;
  /** the calculated shipping (most tenants have a threshold after which shipping is free) */
  shipping: Scalars['Int']['output'];
  /** SubTotal of the order calculated by adding all line item subtotals. */
  subtotal: Scalars['Int']['output'];
  /** Total of the order calculated by adding all line item totals and shipping. This does NOT include tax calculations */
  total: Scalars['Int']['output'];
  user?: Maybe<User>;
  vendorConfig: Tenant;
};

export type CartBundleComponentInput = {
  componentId: Scalars['UUID4']['input'];
  items?: InputMaybe<Array<CartBundleItemInput>>;
};

export type CartBundleItemInput = {
  analyticsDetails?: InputMaybe<Scalars['Json']['input']>;
  customizations?: InputMaybe<Scalars['Json']['input']>;
  itemId: Scalars['UUID4']['input'];
  quantity: Scalars['Int']['input'];
  subscriptionIntervalInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type CartDynamicBundleInput = {
  bundleId: Scalars['UUID4']['input'];
  components?: InputMaybe<Array<CartBundleComponentInput>>;
  id?: InputMaybe<Scalars['UUID4']['input']>;
};

export type CartExactDynamicBundleInput = {
  analyticsDetails?: InputMaybe<Scalars['Json']['input']>;
  bundleId?: InputMaybe<Scalars['UUID4']['input']>;
  bundleTag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID4']['input']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  analyticsDetails?: Maybe<Scalars['Json']['output']>;
  customizations?: Maybe<Scalars['Json']['output']>;
  discounts: Array<LineItemDiscount>;
  dynamicBundle?: Maybe<Scalars['Json']['output']>;
  id: Scalars['UUID4']['output'];
  item: Item;
  merchandise?: Maybe<Merchandise>;
  /**
   * The discounted price of the item as an individual unit (rounded up, except for
   * promo-code discounts, which are not adjusted).
   */
  perUnitPrice: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  /** The original price of the item as an individual unit (either the compare_at_price or or non-discounted price). */
  strikethroughUnitPrice?: Maybe<Scalars['Int']['output']>;
  subscriptionIntervalInDays?: Maybe<Scalars['Int']['output']>;
  /**
   * calculated by subtracting the discount_total from the items base_price *
   * quantity (except for promo-code discounts, which are not included)
   */
  subtotal: Scalars['Int']['output'];
};

export type CartItemInput = {
  analyticsDetails?: InputMaybe<Scalars['Json']['input']>;
  customizations?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['UUID4']['input']>;
  itemId: Scalars['UUID4']['input'];
  merchandiseId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  subscriptionIntervalInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type CartItemsAndBundleItems = BundleLineItem | CartItem;

export type CartRemoveDynamicBundleInput = {
  cartBundleReference: Scalars['Int']['input'];
  id: Scalars['UUID4']['input'];
};

export type Category = {
  __typename?: 'Category';
  appId: Scalars['UUID4']['output'];
  level1?: Maybe<Scalars['String']['output']>;
  level2?: Maybe<Scalars['String']['output']>;
  level3?: Maybe<Scalars['String']['output']>;
};

export type ChangeUserPasswordInput = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Checkout = {
  __typename?: 'Checkout';
  paymentOptions?: Maybe<TenantPaymentOptions>;
  shippingOptions?: Maybe<TenantShippingOptions>;
  showCouponCodeCta?: Maybe<Scalars['Boolean']['output']>;
  vatInclusivePricing?: Maybe<Scalars['Boolean']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CheckoutBreadcrumbsLocalization = {
  __typename?: 'CheckoutBreadcrumbsLocalization';
  address: Scalars['String']['output'];
  payment: Scalars['String']['output'];
  review: Scalars['String']['output'];
  shipping: Scalars['String']['output'];
};

export type CheckoutCouponCodeLocalizations = {
  __typename?: 'CheckoutCouponCodeLocalizations';
  addCouponButtonText: Scalars['String']['output'];
  applyCouponButtonText: Scalars['String']['output'];
  couponLabel: Scalars['String']['output'];
  couponPlaceholderText: Scalars['String']['output'];
  removeCouponButtonText: Scalars['String']['output'];
};

export type CheckoutErrorsLocalizations = {
  __typename?: 'CheckoutErrorsLocalizations';
  discount?: Maybe<DiscountLocalizations>;
  genericErrorMsg: Scalars['String']['output'];
  guestCartContainsSubscription?: Maybe<GuestCartContainsSubscriptionLocalizations>;
  insufficientLoyaltyBalance?: Maybe<InsufficientLoyaltyBalanceLocalizations>;
  invalidLoyaltyReward?: Maybe<InvalidLoyaltyRewardLocalizations>;
  lowStock?: Maybe<LowStockLocalizations>;
  minimumPurchaseAmount: Scalars['String']['output'];
  minimumPurchaseQuantity: Scalars['String']['output'];
  outOfStock?: Maybe<OutOfStockLocalizations>;
  paymentFailureErrorText: Scalars['String']['output'];
  paymentNotAccepted: Scalars['String']['output'];
  purchaseQtyLimit?: Maybe<PurchaseQtyLimitLocalizations>;
  unableToUsePoBox: Scalars['String']['output'];
  unverifiedEmail: Scalars['String']['output'];
  virtualItemsInCart?: Maybe<VirtualItemsInCartLocalizations>;
  zipCodeRestriction?: Maybe<ZipCodeRestrictionLocalizations>;
};

export type CheckoutGiftFormLocalizations = {
  __typename?: 'CheckoutGiftFormLocalizations';
  emailFieldLabel: Scalars['String']['output'];
  gifteeFieldLabel: Scalars['String']['output'];
  infoText: Scalars['String']['output'];
  messageFieldLabel: Scalars['String']['output'];
  sendAsGiftText: Scalars['String']['output'];
  shippingAddressHeadingText: Scalars['String']['output'];
};

/**
 * Returns a map of all checkout elements and their translations.
 *
 * Example:
 *     ```
 *     query {
 *       localization {
 *         checkout {
 *           breadcrumbs {
 *             shipping
 *           }
 *         }
 *       }
 *     }
 *     ```
 */
export type CheckoutLocalization = {
  __typename?: 'CheckoutLocalization';
  breadcrumbs?: Maybe<CheckoutBreadcrumbsLocalization>;
  couponCode?: Maybe<CheckoutCouponCodeLocalizations>;
  errors?: Maybe<CheckoutErrorsLocalizations>;
  giftForm?: Maybe<CheckoutGiftFormLocalizations>;
  orderDetails?: Maybe<CheckoutOrderDetailsLocalizations>;
  orderStatusPage?: Maybe<CheckoutOrderStatusPageLocalizations>;
  orderSummary?: Maybe<CheckoutOrderSummaryLocalizations>;
  pageTitlesInHead?: Maybe<CheckoutPageTitlesLocalization>;
  paymentStep?: Maybe<CheckoutPaymentStepLocalizations>;
  rdd?: Maybe<CheckoutRddLocalizations>;
  reviewStep?: Maybe<CheckoutReviewStepLocalizations>;
  shippingMethodStep?: Maybe<CheckoutShippingMethodStepLocalizations>;
  shippingStep?: Maybe<CheckoutShippingStepLocalizations>;
};

export type CheckoutOrderDetailsLocalizations = {
  __typename?: 'CheckoutOrderDetailsLocalizations';
  billingSameAsShippingText: Scalars['String']['output'];
  cardholderNameText: Scalars['String']['output'];
  expiresText: Scalars['String']['output'];
  invoiceTermsText: Scalars['String']['output'];
  invoiceText: Scalars['String']['output'];
  poNumberText: Scalars['String']['output'];
  shippingMethodText: Scalars['String']['output'];
};

export type CheckoutOrderStatusPageLocalizations = {
  __typename?: 'CheckoutOrderStatusPageLocalizations';
  continueShoppingButtonText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  notFoundMsg: Scalars['String']['output'];
  orderConfirmationShipmentText: Scalars['String']['output'];
  orderDateText: Scalars['String']['output'];
  orderDetailsHeadingText: Scalars['String']['output'];
  orderDetailsNote: Scalars['String']['output'];
  orderDetailsText: Scalars['String']['output'];
  paymentHeadingText: Scalars['String']['output'];
  printButtonText: Scalars['String']['output'];
  shippingHeadingText: Scalars['String']['output'];
};

export type CheckoutOrderSummaryLocalizations = {
  __typename?: 'CheckoutOrderSummaryLocalizations';
  bulkDiscountText: Scalars['String']['output'];
  bundleDiscountText: Scalars['String']['output'];
  bundleItemDefaultText: Scalars['String']['output'];
  cartHeadingText: Scalars['String']['output'];
  freeShipLabel: Scalars['String']['output'];
  itemPlural: Scalars['String']['output'];
  itemSingular: Scalars['String']['output'];
  regulatoryTaxLabel: Scalars['String']['output'];
  salesTaxLabel: Scalars['String']['output'];
  shippingLabel: Scalars['String']['output'];
  subtotalLabel: Scalars['String']['output'];
  totalLabel: Scalars['String']['output'];
  whatsIncludedText: Scalars['String']['output'];
  yourOrderText: Scalars['String']['output'];
};

export type CheckoutPageTitlesLocalization = {
  __typename?: 'CheckoutPageTitlesLocalization';
  checkout: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type CheckoutPaymentStepLocalizations = {
  __typename?: 'CheckoutPaymentStepLocalizations';
  addCardHeadingText: Scalars['String']['output'];
  addPaymentButtonText: Scalars['String']['output'];
  addPaymentHeadingText: Scalars['String']['output'];
  billingAddressHeadingText: Scalars['String']['output'];
  billingSameAsShippingText: Scalars['String']['output'];
  continueToReviewButtonText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  sectionHeadingText: Scalars['String']['output'];
  shippingAddressHeadingText: Scalars['String']['output'];
};

export type CheckoutRddLocalizations = {
  __typename?: 'CheckoutRddLocalizations';
  changeDateText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  needOrderSoonerText: Scalars['String']['output'];
  noteText: Scalars['String']['output'];
  selectDateText: Scalars['String']['output'];
  yourRequestedDateText: Scalars['String']['output'];
};

export type CheckoutReviewStepLocalizations = {
  __typename?: 'CheckoutReviewStepLocalizations';
  agreeToTermsText: Scalars['String']['output'];
  editButtonText: Scalars['String']['output'];
  emailNote: Scalars['String']['output'];
  giftEmailNote: Scalars['String']['output'];
  giftMessageNote: Scalars['String']['output'];
  giftShippingHeadingText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  paymentHeadingText: Scalars['String']['output'];
  shippingHeadingText: Scalars['String']['output'];
  submitOrderButtonText: Scalars['String']['output'];
};

export type CheckoutShippingMethodStepLocalizations = {
  __typename?: 'CheckoutShippingMethodStepLocalizations';
  freeText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  selectShippingMethodText: Scalars['String']['output'];
};

export type CheckoutShippingStepLocalizations = {
  __typename?: 'CheckoutShippingStepLocalizations';
  addAddressButtonText: Scalars['String']['output'];
  addAddressHeadingText: Scalars['String']['output'];
  additionalPhoneNumberLabel: Scalars['String']['output'];
  addressHeadingText: Scalars['String']['output'];
  contactNoteText: Scalars['String']['output'];
  continueToPaymentButtonText: Scalars['String']['output'];
  continueToShippingMethodButtonText: Scalars['String']['output'];
  savedAddressHeadingText: Scalars['String']['output'];
  shipAlertText: Scalars['String']['output'];
  shippingHeadingText: Scalars['String']['output'];
};

export type CodeSubmitted = {
  __typename?: 'CodeSubmitted';
  numPoints?: Maybe<Scalars['Int']['output']>;
};

export type Component = {
  __typename?: 'Component';
  discount?: Maybe<Discount>;
  id: Scalars['UUID4']['output'];
  items?: Maybe<Array<Item>>;
  name: Scalars['String']['output'];
  qtyType: Scalars['String']['output'];
  requiredQty: Scalars['Int']['output'];
  subscriptionOption: SubscriptionOption;
};

export type ComponentsLocalization = {
  __typename?: 'ComponentsLocalization';
  addressVerification?: Maybe<AddressVerificationLocalization>;
  customNotFound?: Maybe<CustomNotFoundLocalization>;
  errorModal?: Maybe<ErrorModalLocalization>;
  exchangeReturnByDate?: Maybe<ExchangeReturnByDateLocalization>;
  footer?: Maybe<FooterLocalization>;
  orderProcessing?: Maybe<OrderProcessing>;
  price?: Maybe<PriceLocalization>;
};

export type ContactConfig = {
  __typename?: 'ContactConfig';
  shippingAddressConfig: AddressConfig;
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  bazaarvoice?: Maybe<Bazaarvoice>;
  email?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  shippingAddress?: Maybe<EmbeddedAddress>;
  shippingMethod?: Maybe<EmbeddedShippingMethod>;
  user?: Maybe<User>;
  userString?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ContactInfoInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  shippingAddress?: InputMaybe<EmbeddedAddressInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CountriesAllowed = {
  __typename?: 'CountriesAllowed';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CreatePaymentMethodInput = {
  default?: InputMaybe<Scalars['Boolean']['input']>;
  deviceData: Scalars['String']['input'];
  nonce: Scalars['String']['input'];
};

export type CreateRegistrationRecordInput = {
  customData?: InputMaybe<Scalars['Json']['input']>;
  emailOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  gtin: Scalars['String']['input'];
  purchaseDate: Scalars['Date']['input'];
  purchaseLocation?: InputMaybe<Scalars['String']['input']>;
  utmData?: InputMaybe<UtmDataInput>;
};

/** Response when an order is created during checkout */
export type CreatedOrder = {
  __typename?: 'CreatedOrder';
  appId?: Maybe<Scalars['UUID4']['output']>;
  cart?: Maybe<Cart>;
  compositeId?: Maybe<Scalars['String']['output']>;
  contactInfo?: Maybe<ContactInfo>;
  /** User's own internal id for the order */
  customerPo?: Maybe<Scalars['String']['output']>;
  gifteeEmail?: Maybe<Scalars['String']['output']>;
  gifteeMessage?: Maybe<Scalars['String']['output']>;
  giftorName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  isGift?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<LatLong>;
  orderSubscription?: Maybe<OrderSubscription>;
  paymentRequest?: Maybe<PaymentRequest>;
  price: Price;
  requestedDeliveryDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submissionUid?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Credit = {
  __typename?: 'Credit';
  activeFrom: Scalars['Date']['output'];
  activeUntil?: Maybe<Scalars['Date']['output']>;
  availableAmount: Scalars['Int']['output'];
  frozen: Scalars['Boolean']['output'];
  id: Scalars['UUID4']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  pendingAmount: Scalars['Int']['output'];
  settledAmount: Scalars['Int']['output'];
  spentAmount: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CreditCard = {
  __typename?: 'CreditCard';
  billingAddress?: Maybe<BraintreeAddress>;
  cardType: Scalars['String']['output'];
  cardholderName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  default: Scalars['Boolean']['output'];
  expirationMonth: Scalars['String']['output'];
  expirationYear: Scalars['String']['output'];
  isRemovable?: Maybe<Scalars['Boolean']['output']>;
  last4: Scalars['String']['output'];
  token: Scalars['String']['output'];
  uniqueNumberIdentifier: Scalars['String']['output'];
};

export type CreditCardTooltipLocalization = {
  __typename?: 'CreditCardTooltipLocalization';
  cardsWith3DigitsNote: Scalars['String']['output'];
  cardsWith3DigitsText: Scalars['String']['output'];
  cardsWith4DigitsNote: Scalars['String']['output'];
  cardsWith4DigitsText: Scalars['String']['output'];
  cvv3DigitAlt: Scalars['String']['output'];
  cvv4DigitAlt: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
};

export type CustomDataInput = {
  customData: Scalars['Json']['input'];
};

export type CustomNotFoundLocalization = {
  __typename?: 'CustomNotFoundLocalization';
  cartButtonText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  homeButtonText: Scalars['String']['output'];
  subHeadingText: Scalars['String']['output'];
};

export type CustomText = {
  __typename?: 'CustomText';
  body: Array<Scalars['String']['output']>;
  links: Array<CustomTextLink>;
  location: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
};

export type CustomTextLink = {
  __typename?: 'CustomTextLink';
  displayValue: Scalars['String']['output'];
  key: Scalars['String']['output'];
  linkValue: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** Used for item customizations maps */
export type Customization = GatoradeIdBottle | GatoradeTowel | LegacyCustomization;

export type DeleteCreditCardInput = {
  token: Scalars['String']['input'];
};

export type DeletePaymentMethodInput = {
  token: Scalars['String']['input'];
};

export type Discount = {
  __typename?: 'Discount';
  activeFrom: Scalars['DateTime']['output'];
  activeUntil?: Maybe<Scalars['DateTime']['output']>;
  amount?: Maybe<Scalars['Int']['output']>;
  appId?: Maybe<Scalars['UUID4']['output']>;
  behaviour: Behaviour;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['UUID4']['output'];
  isPercent?: Maybe<Scalars['Boolean']['output']>;
  isPromoCodeRequired?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  promoCode?: Maybe<Scalars['String']['output']>;
  type?: Maybe<DiscountType>;
  typeDependentValue?: Maybe<Scalars['String']['output']>;
  usage?: Maybe<Scalars['Int']['output']>;
};

export type DiscountLocalizations = {
  __typename?: 'DiscountLocalizations';
  discountCannotApplyToSubscription: Scalars['String']['output'];
  discountExceedsSubtotal: Scalars['String']['output'];
  discountHeadingText: Scalars['String']['output'];
  discountNotFound: Scalars['String']['output'];
  discountNoteText: Scalars['String']['output'];
  discountPromoCodeRequiresEmail: Scalars['String']['output'];
  discountPromoCodeRequiresEmailOrLogin: Scalars['String']['output'];
  discountTooLarge: Scalars['String']['output'];
};

export enum DiscountType {
  /** The discount is specific to a bundle */
  DynamicBundle = 'DYNAMIC_BUNDLE',
  /** Currently unused */
  GiftCard = 'GIFT_CARD',
  /** The discount is specific to a single item */
  Item = 'ITEM',
  /** The discount is specific to the discount's itemSet */
  ItemSet = 'ITEM_SET',
  /** The discount is specific to a subscription */
  Subscription = 'SUBSCRIPTION',
  /** The discount is specific to an entire tenant */
  Tenant = 'TENANT',
  /** The discount is specific to a specific vendor */
  Vendor = 'VENDOR'
}

export type Discounts = {
  __typename?: 'Discounts';
  discounts?: Maybe<Array<Discount>>;
};

export type DiscountsInput = {
  activeFrom: Scalars['DateTime']['input'];
  activeUntil?: InputMaybe<Scalars['DateTime']['input']>;
  amount?: InputMaybe<Scalars['Int']['input']>;
  appId?: InputMaybe<Scalars['UUID4']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['UUID4']['input'];
  isPercent?: InputMaybe<Scalars['Boolean']['input']>;
  isPromoCodeRequired?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  typeDependentValue?: InputMaybe<Scalars['String']['input']>;
  usage?: InputMaybe<Scalars['Int']['input']>;
};

export type DynamicBundle = {
  __typename?: 'DynamicBundle';
  appId: Scalars['UUID4']['output'];
  components?: Maybe<Array<Component>>;
  discount?: Maybe<Discount>;
  discountPrice: Scalars['Int']['output'];
  id: Scalars['UUID4']['output'];
  inventoryQty?: Maybe<Scalars['Int']['output']>;
  minRetailPrice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  primaryComponent: Component;
  tag: Scalars['String']['output'];
};

export type DynamicBundleItem = {
  __typename?: 'DynamicBundleItem';
  analyticsDetails?: Maybe<Scalars['Json']['output']>;
  /** A list of customizations the item associated contains */
  customizations?: Maybe<Array<Customization>>;
  discounts?: Maybe<Array<LineItemDiscount>>;
  item: Item;
  itemId: Scalars['UUID4']['output'];
  quantity: Scalars['Int']['output'];
  subscriptionIntervalInDays?: Maybe<Scalars['Int']['output']>;
};

export type DynamicBundlesBehaviour = {
  __typename?: 'DynamicBundlesBehaviour';
  name: BehaviourEnum;
};

export type EmailNewsletterSignupInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  source?: InputMaybe<SourceType>;
};

export type EmailOptInLocalization = {
  __typename?: 'EmailOptInLocalization';
  body: Scalars['String']['output'];
  defaultLabelText: Scalars['String']['output'];
  privacyPolicyLinkText: Scalars['String']['output'];
  termsOfUseLinkText: Scalars['String']['output'];
};

export type EmailSspInput = {
  businessAddress: Scalars['String']['input'];
  businessName: Scalars['String']['input'];
  businessType: Scalars['String']['input'];
  city: Scalars['String']['input'];
  emailField: Scalars['String']['input'];
  existingCustomer: Scalars['Boolean']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  manageAndOrder: Scalars['String']['input'];
  numberOfUsers: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  zip: Scalars['String']['input'];
};

export type EmailSspResponse = {
  __typename?: 'EmailSspResponse';
  status: Scalars['String']['output'];
};

export type EmbeddedAddress = {
  __typename?: 'EmbeddedAddress';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  specialInstructions?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  taxId?: Maybe<Scalars['String']['output']>;
  validated?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type EmbeddedAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  validated?: InputMaybe<Scalars['Boolean']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type EmbeddedCategory = {
  __typename?: 'EmbeddedCategory';
  level1?: Maybe<Scalars['String']['output']>;
  level2?: Maybe<Scalars['String']['output']>;
  level3?: Maybe<Scalars['String']['output']>;
};

export type EmbeddedDiscount = {
  __typename?: 'EmbeddedDiscount';
  amount?: Maybe<Scalars['Int']['output']>;
  isPercent?: Maybe<Scalars['Boolean']['output']>;
};

export type EmbeddedItem = {
  __typename?: 'EmbeddedItem';
  awaitingImportCorrection?: Maybe<Scalars['Boolean']['output']>;
  brandName?: Maybe<Scalars['String']['output']>;
  bundleOnly?: Maybe<Scalars['Boolean']['output']>;
  categories?: Maybe<EmbeddedCategory>;
  color?: Maybe<Scalars['String']['output']>;
  compareAtPrice?: Maybe<Scalars['Int']['output']>;
  containerType?: Maybe<Scalars['String']['output']>;
  countryCity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  designerBio?: Maybe<Scalars['String']['output']>;
  dimensionUnits?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Scalars['String']['output']>;
  fluidOzPerPack?: Maybe<Scalars['Decimal']['output']>;
  gasExchangeInfo?: Maybe<EmbeddedItemGasExchangeInfo>;
  height?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID4']['output']>;
  imgUrl?: Maybe<Scalars['String']['output']>;
  importId?: Maybe<Scalars['UUID4']['output']>;
  inventoryQty?: Maybe<Scalars['Int']['output']>;
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isDairyFree?: Maybe<Scalars['Boolean']['output']>;
  isFairTrade?: Maybe<Scalars['Boolean']['output']>;
  isGlutenFree?: Maybe<Scalars['Boolean']['output']>;
  isGmoFree?: Maybe<Scalars['Boolean']['output']>;
  isKosher?: Maybe<Scalars['Boolean']['output']>;
  isOrganic?: Maybe<Scalars['String']['output']>;
  isOutOfStock?: Maybe<Scalars['Boolean']['output']>;
  isPending?: Maybe<Scalars['Boolean']['output']>;
  isVegan?: Maybe<Scalars['Boolean']['output']>;
  isWheatFree?: Maybe<Scalars['Boolean']['output']>;
  isYeastFree?: Maybe<Scalars['Boolean']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  length?: Maybe<Scalars['String']['output']>;
  material?: Maybe<Scalars['String']['output']>;
  meltRisk?: Maybe<Scalars['Boolean']['output']>;
  minOrderQty?: Maybe<Scalars['Int']['output']>;
  onMarketplace?: Maybe<Scalars['Boolean']['output']>;
  pointsPrice?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  primaryCategoryPriority?: Maybe<Scalars['Int']['output']>;
  productPacks?: Maybe<Scalars['Int']['output']>;
  productsPerPack?: Maybe<Scalars['Int']['output']>;
  returnsPolicy?: Maybe<Scalars['String']['output']>;
  secondaryCategoryPriority?: Maybe<Scalars['Int']['output']>;
  shippingInfo?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugHash?: Maybe<Scalars['String']['output']>;
  subscriptionMetadata?: Maybe<EmbeddedItemSubscriptionMetadata>;
  subscriptionOnly?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  taxCodeId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  upc?: Maybe<Scalars['String']['output']>;
  vendorId?: Maybe<Scalars['UUID4']['output']>;
  virtual?: Maybe<Scalars['Boolean']['output']>;
  weightOz?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type EmbeddedItemGasExchangeInfo = {
  __typename?: 'EmbeddedItemGasExchangeInfo';
  enabled: Scalars['Boolean']['output'];
  missingCylinder?: Maybe<Item>;
  missingCylinderId?: Maybe<Scalars['UUID4']['output']>;
};

export type EmbeddedItemSubscriptionMetadata = {
  __typename?: 'EmbeddedItemSubscriptionMetadata';
  discount?: Maybe<EmbeddedDiscount>;
  isSubscribable: Scalars['Boolean']['output'];
  subscriptionPrice?: Maybe<Scalars['Int']['output']>;
};

export type EmbeddedShippingMethod = {
  __typename?: 'EmbeddedShippingMethod';
  code?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/**
 * Uses custom oneOf directive.  Input is one of the following fields.
 * We can associate a different source id with each
 * of the input types for Salesforce.
 *
 * Noting here that one tenant uses the same input but wants a different
 * source id according to where the pop up is displayed for the user
 * to enter information.
 */
export type EngagementSignupInput = {
  identifier1?: InputMaybe<Newsletter1SignupInput>;
  identifier2?: InputMaybe<OutOfStockInput>;
  identifier3?: InputMaybe<Newsletter2SignupInput>;
  identifier4?: InputMaybe<Newsletter3SignupInput>;
  identifier5?: InputMaybe<SmsInput>;
  identifier6?: InputMaybe<SmsInputLoggedUser>;
  identifier7?: InputMaybe<CustomDataInput>;
  identifier8?: InputMaybe<StockNotificationInput>;
};

export type ErrorModalLocalization = {
  __typename?: 'ErrorModalLocalization';
  errorHeadingText: Scalars['String']['output'];
  okText: Scalars['String']['output'];
  visitOurLinkForAssistanceText: Scalars['String']['output'];
};

export type ExchangeReturnByDateLocalization = {
  __typename?: 'ExchangeReturnByDateLocalization';
  exchangeText: Scalars['String']['output'];
  returnByText: Scalars['String']['output'];
};

export type FeatureFlag = {
  __typename?: 'FeatureFlag';
  enabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type FieldMeasure = {
  __typename?: 'FieldMeasure';
  eqv?: Maybe<Scalars['Int']['output']>;
  eunit?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FindAddressInput = {
  container?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type FooterLocalization = {
  __typename?: 'FooterLocalization';
  allRightsReserved: Scalars['String']['output'];
};

export type FormsAccountLocalization = {
  __typename?: 'FormsAccountLocalization';
  firstNameLabel: Scalars['String']['output'];
  lastNameLabel: Scalars['String']['output'];
};

export type FormsAddressLocalization = {
  __typename?: 'FormsAddressLocalization';
  autocompletePlaceholderText: Scalars['String']['output'];
  cardholderNameLabel: Scalars['String']['output'];
  cityLabel: Scalars['String']['output'];
  companyLabel: Scalars['String']['output'];
  countryLabel: Scalars['String']['output'];
  emailLabel: Scalars['String']['output'];
  firstNameLabel: Scalars['String']['output'];
  isDefaultLabel: Scalars['String']['output'];
  lastNameLabel: Scalars['String']['output'];
  line1Label: Scalars['String']['output'];
  line2Label: Scalars['String']['output'];
  manuallyEnterAddressText: Scalars['String']['output'];
  nicknameLabel: Scalars['String']['output'];
  phoneLabel: Scalars['String']['output'];
  phoneNumberLabel: Scalars['String']['output'];
  regionText: Scalars['String']['output'];
  requiredFieldsText: Scalars['String']['output'];
  requiredText: Scalars['String']['output'];
  specialInstructionsLabel: Scalars['String']['output'];
  stateLabel: Scalars['String']['output'];
  taxIdLabel: Scalars['String']['output'];
  zipLabel: Scalars['String']['output'];
};

export type FormsCreditCardLocalization = {
  __typename?: 'FormsCreditCardLocalization';
  cardNumberLabel: Scalars['String']['output'];
  cardSavedForGasExchangeNote: Scalars['String']['output'];
  cardSavedForSubsNote: Scalars['String']['output'];
  cardholderNameLabel: Scalars['String']['output'];
  cvvLabel: Scalars['String']['output'];
  cvvTooltip?: Maybe<CreditCardTooltipLocalization>;
  expirationDateLabel: Scalars['String']['output'];
  saveCardForLaterText: Scalars['String']['output'];
  securityNote: Scalars['String']['output'];
};

export type FormsForgotPasswordLocalization = {
  __typename?: 'FormsForgotPasswordLocalization';
  backToLoginText: Scalars['String']['output'];
  contactLinkContentText: Scalars['String']['output'];
  contactLinkText: Scalars['String']['output'];
  emailLabelText: Scalars['String']['output'];
  formDescriptionText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  submitButtonText: Scalars['String']['output'];
  submittedText: Scalars['String']['output'];
};

export type FormsLocalization = {
  __typename?: 'FormsLocalization';
  account?: Maybe<FormsAccountLocalization>;
  address?: Maybe<FormsAddressLocalization>;
  creditCard?: Maybe<FormsCreditCardLocalization>;
  forgotPassword?: Maybe<FormsForgotPasswordLocalization>;
  resetPassword?: Maybe<FormsResetPasswordLocalization>;
  signIn?: Maybe<FormsSignInLocalization>;
  signup?: Maybe<FormsSignupLocalization>;
  tos?: Maybe<FormsTosLocalization>;
  validation?: Maybe<FormsValidationLocalization>;
};

export type FormsResetPasswordLocalization = {
  __typename?: 'FormsResetPasswordLocalization';
  contactLinkContentText: Scalars['String']['output'];
  contactLinkText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  passwordInputLabelText: Scalars['String']['output'];
  requestNewLinkContentText: Scalars['String']['output'];
  requestNewLinkText: Scalars['String']['output'];
  resetTokenDefaultErrorText: Scalars['String']['output'];
  resetTokenExpiredErrorText: Scalars['String']['output'];
  resetTokenIdErrorText: Scalars['String']['output'];
  resetTokenMismatchErrorText: Scalars['String']['output'];
  resetTokenNotFoundErrorText: Scalars['String']['output'];
  resetTokenUnableToDecodeErrorText: Scalars['String']['output'];
  submitText: Scalars['String']['output'];
};

export type FormsSignInLocalization = {
  __typename?: 'FormsSignInLocalization';
  accountLockedErrorText: Scalars['String']['output'];
  emailInputPlaceholderText: Scalars['String']['output'];
  forgotPasswordButtonText: Scalars['String']['output'];
  genericErrorText: Scalars['String']['output'];
  headingDefaultText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  loginButtonText: Scalars['String']['output'];
  passwordInputPlaceholderText: Scalars['String']['output'];
  signUpButtonText: Scalars['String']['output'];
  signUpDefaultHeadingText: Scalars['String']['output'];
  signUpHeadingText: Scalars['String']['output'];
};

export type FormsSignupLocalization = {
  __typename?: 'FormsSignupLocalization';
  accountLogoAltText: Scalars['String']['output'];
  ageRequirementErrorText: Scalars['String']['output'];
  birthdayLabelText: Scalars['String']['output'];
  createAccountPageHeadingText: Scalars['String']['output'];
  dayLabelText: Scalars['String']['output'];
  emailLabelText: Scalars['String']['output'];
  emailOptIn?: Maybe<EmailOptInLocalization>;
  emailPlaceholderText: Scalars['String']['output'];
  errorResetPasswordLinkText: Scalars['String']['output'];
  errorText: Scalars['String']['output'];
  firstNameLabelText: Scalars['String']['output'];
  firstNamePlaceholderText: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  lastNameLabelText: Scalars['String']['output'];
  lastNamePlaceholderText: Scalars['String']['output'];
  monthLabelText: Scalars['String']['output'];
  passwordLabelText: Scalars['String']['output'];
  passwordPlaceholderText: Scalars['String']['output'];
  submitText: Scalars['String']['output'];
  yearLabelText: Scalars['String']['output'];
};

export type FormsTosLocalization = {
  __typename?: 'FormsTosLocalization';
  body: Scalars['String']['output'];
  errorText: Scalars['String']['output'];
  tosLinkText: Scalars['String']['output'];
};

export type FormsValidationLocalization = {
  __typename?: 'FormsValidationLocalization';
  companyRequiredWithTaxIdErrorText: Scalars['String']['output'];
  dayRequiredErrorText: Scalars['String']['output'];
  emailRequiredErrorText: Scalars['String']['output'];
  fieldRequiredErrorText: Scalars['String']['output'];
  invalidDateErrorText: Scalars['String']['output'];
  invalidPasswordErrorText: Scalars['String']['output'];
  invalidPhoneErrorText: Scalars['String']['output'];
  invalidTaxIdErrorText: Scalars['String']['output'];
  invalidTaxIdLengthErrorText: Scalars['String']['output'];
  monthRequiredErrorText: Scalars['String']['output'];
  newPasswordRequiredErrorText: Scalars['String']['output'];
  passwordRequiredErrorText: Scalars['String']['output'];
  requiredErrorText: Scalars['String']['output'];
  signupPasswordRequiredErrorText: Scalars['String']['output'];
  taxIdRequiredWithCompanyErrorText: Scalars['String']['output'];
  wrongEmailErrorText: Scalars['String']['output'];
  yearRequiredErrorText: Scalars['String']['output'];
};

export type FoundAddress = {
  __typename?: 'FoundAddress';
  description?: Maybe<Scalars['String']['output']>;
  highlight?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FoundItems = {
  __typename?: 'FoundItems';
  items?: Maybe<Array<FoundAddress>>;
};

export type Fulfillment = {
  __typename?: 'Fulfillment';
  externalFulfillmentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  items: Array<FulfillmentItem>;
  orderId?: Maybe<Scalars['UUID4']['output']>;
  status?: Maybe<StatusLabels>;
  taxServiceUpdatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  tracking?: Maybe<TrackingNumber>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  warehouseCode?: Maybe<Scalars['String']['output']>;
};

export type FulfillmentItem = {
  __typename?: 'FulfillmentItem';
  insertedAt: Scalars['DateTime']['output'];
  item?: Maybe<Item>;
  quantity?: Maybe<Scalars['Int']['output']>;
  subscriptionIntervalInDays?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GatoradeIdBottle = {
  __typename?: 'GatoradeIdBottle';
  bottleLidFeatureText?: Maybe<Scalars['String']['output']>;
  /** Values: 'blank', 'diy_strip', or 'text' */
  bottleLidFeatureType?: Maybe<Scalars['String']['output']>;
  bottleLidFontColor?: Maybe<Scalars['String']['output']>;
  bottleLidFontColorValue?: Maybe<Scalars['String']['output']>;
  bottleLidFontType?: Maybe<Scalars['String']['output']>;
  bottleLidLogo?: Maybe<Scalars['String']['output']>;
  bottleLidLogoImage?: Maybe<Scalars['String']['output']>;
  bottleLidNumber?: Maybe<Scalars['String']['output']>;
  /** Values: 'logo' or 'number' */
  bottleLidNumberType?: Maybe<Scalars['String']['output']>;
  bottleLidPattern?: Maybe<Scalars['String']['output']>;
  bottleLidPrimaryColor?: Maybe<Scalars['String']['output']>;
  bottleLidPrintFileUrl?: Maybe<Scalars['String']['output']>;
  bottleLidSecondaryColor?: Maybe<Scalars['String']['output']>;
  bottleLidStrokeColor?: Maybe<Scalars['String']['output']>;
  bottleLidStrokeColorValue?: Maybe<Scalars['String']['output']>;
  bottleLidStrokeWeight?: Maybe<Scalars['String']['output']>;
  bottleLidThumbnailImage?: Maybe<Scalars['String']['output']>;
  bottleSideFeatureLogo?: Maybe<Scalars['String']['output']>;
  bottleSideFeatureText?: Maybe<Scalars['String']['output']>;
  /** Values: 'text' or 'logo' */
  bottleSideFeatureType?: Maybe<Scalars['String']['output']>;
  bottleSideFontColor?: Maybe<Scalars['String']['output']>;
  bottleSideFontColorValue?: Maybe<Scalars['String']['output']>;
  bottleSideFontType?: Maybe<Scalars['String']['output']>;
  bottleSideLogoUrl?: Maybe<Scalars['String']['output']>;
  bottleSideMascotAccentColor?: Maybe<Scalars['String']['output']>;
  bottleSideMascotAccentColorValue?: Maybe<Scalars['String']['output']>;
  bottleSideMascotBaseColor?: Maybe<Scalars['String']['output']>;
  bottleSideMascotBaseColorValue?: Maybe<Scalars['String']['output']>;
  bottleSideMascotName?: Maybe<Scalars['String']['output']>;
  bottleSideMascotNonCustomColor?: Maybe<Scalars['String']['output']>;
  bottleSideMascotNonCustomColorValue?: Maybe<Scalars['String']['output']>;
  bottleSidePattern?: Maybe<Scalars['String']['output']>;
  bottleSidePatternImage?: Maybe<Scalars['String']['output']>;
  bottleSidePrimaryColor?: Maybe<Scalars['String']['output']>;
  bottleSidePrimaryColorValue?: Maybe<Scalars['String']['output']>;
  bottleSidePrintFileUrl?: Maybe<Scalars['String']['output']>;
  bottleSideSecondaryColor?: Maybe<Scalars['String']['output']>;
  bottleSideSecondaryColorValue?: Maybe<Scalars['String']['output']>;
  bottleSideStrokeColor?: Maybe<Scalars['String']['output']>;
  bottleSideStrokeColorValue?: Maybe<Scalars['String']['output']>;
  bottleSideStrokeWeight?: Maybe<Scalars['String']['output']>;
  bottleSideThumbnailImage?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enhancerVariantGtin?: Maybe<Scalars['String']['output']>;
};

export type GatoradeTowel = {
  __typename?: 'GatoradeTowel';
  text?: Maybe<Scalars['String']['output']>;
  towelFeatureLogo?: Maybe<Scalars['String']['output']>;
  towelFeatureText?: Maybe<Scalars['String']['output']>;
  /** Values: 'text' or 'logo' */
  towelFeatureType?: Maybe<Scalars['String']['output']>;
  towelFontColor?: Maybe<Scalars['String']['output']>;
  towelFontColorValue?: Maybe<Scalars['String']['output']>;
  towelFontType?: Maybe<Scalars['String']['output']>;
  towelLogoUrl?: Maybe<Scalars['String']['output']>;
  towelMascotAccentColor?: Maybe<Scalars['String']['output']>;
  towelMascotAccentColorValue?: Maybe<Scalars['String']['output']>;
  towelMascotBaseColor?: Maybe<Scalars['String']['output']>;
  towelMascotBaseColorValue?: Maybe<Scalars['String']['output']>;
  towelMascotName?: Maybe<Scalars['String']['output']>;
  towelMascotNonCustomColor?: Maybe<Scalars['String']['output']>;
  towelMascotNonCustomColorValue?: Maybe<Scalars['String']['output']>;
  towelPattern?: Maybe<Scalars['String']['output']>;
  towelPatternImage?: Maybe<Scalars['String']['output']>;
  towelPrimaryColor?: Maybe<Scalars['String']['output']>;
  towelPrimaryColorValue?: Maybe<Scalars['String']['output']>;
  towelPrintFileUrl?: Maybe<Scalars['String']['output']>;
  towelSecondaryColor?: Maybe<Scalars['String']['output']>;
  towelSecondaryColorValue?: Maybe<Scalars['String']['output']>;
  towelStrokeColor?: Maybe<Scalars['String']['output']>;
  towelStrokeColorValue?: Maybe<Scalars['String']['output']>;
  towelStrokeWeight?: Maybe<Scalars['String']['output']>;
  towelTextLogoState?: Maybe<Scalars['String']['output']>;
  towelThumbnailImage?: Maybe<Scalars['String']['output']>;
};

export type GiftCardConfig = {
  __typename?: 'GiftCardConfig';
  giftCardsEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type GiftConfig = {
  __typename?: 'GiftConfig';
  giftEmailConfig?: Maybe<GiftEmailConfig>;
  giftingEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type GiftEmailConfig = {
  __typename?: 'GiftEmailConfig';
  centralImageUrl?: Maybe<Scalars['String']['output']>;
  footerCopy?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
};

export type GtmConfig = {
  __typename?: 'GtmConfig';
  auth?: Maybe<Scalars['String']['output']>;
  containerId?: Maybe<Scalars['String']['output']>;
  preview?: Maybe<Scalars['String']['output']>;
};

export type GuestCartContainsSubscriptionLocalizations = {
  __typename?: 'GuestCartContainsSubscriptionLocalizations';
  cartText: Scalars['String']['output'];
  itemHeadingText: Scalars['String']['output'];
  itemNoteText: Scalars['String']['output'];
};

export type InsufficientLoyaltyBalanceLocalizations = {
  __typename?: 'InsufficientLoyaltyBalanceLocalizations';
  itemHeadingText: Scalars['String']['output'];
  itemNoteText: Scalars['String']['output'];
};

export type InvalidLoyaltyRewardLocalizations = {
  __typename?: 'InvalidLoyaltyRewardLocalizations';
  itemHeadingText: Scalars['String']['output'];
  itemNoteText: Scalars['String']['output'];
};

export type InvoicedAddress = {
  __typename?: 'InvoicedAddress';
  city: Scalars['String']['output'];
  company?: Maybe<Scalars['String']['output']>;
  countryCode: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  line1: Scalars['String']['output'];
  line2?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  zip: Scalars['String']['output'];
};

export type Invoicing = {
  __typename?: 'Invoicing';
  addresses: Array<InvoicedAddress>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type IsGiftInput = {
  id: Scalars['UUID4']['input'];
  isGift: Scalars['Boolean']['input'];
};

export type Item = {
  __typename?: 'Item';
  appId: Scalars['UUID4']['output'];
  brandName?: Maybe<Scalars['String']['output']>;
  bundleOnly?: Maybe<Scalars['Boolean']['output']>;
  caloriesPerPack?: Maybe<Scalars['Decimal']['output']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  color?: Maybe<Scalars['String']['output']>;
  compareAtPrice: Scalars['Int']['output'];
  containerType?: Maybe<Scalars['String']['output']>;
  countryCity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  designerBio?: Maybe<Scalars['String']['output']>;
  dimensionUnits?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Scalars['String']['output']>;
  discounts?: Maybe<Array<Maybe<Discount>>>;
  dynamicBundles?: Maybe<Array<DynamicBundle>>;
  fluidOzPerPack?: Maybe<Scalars['Decimal']['output']>;
  gasExchangeInfo?: Maybe<ItemGasExchangeInfo>;
  gtin: Scalars['String']['output'];
  height?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  imgUrl?: Maybe<Scalars['String']['output']>;
  imgVariantUrls?: Maybe<Array<Maybe<ProductImageVariant>>>;
  inventoryQty?: Maybe<Scalars['Int']['output']>;
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  isDairyFree?: Maybe<Scalars['Boolean']['output']>;
  isFairTrade?: Maybe<Scalars['Boolean']['output']>;
  isGlutenFree?: Maybe<Scalars['Boolean']['output']>;
  isGmoFree?: Maybe<Scalars['Boolean']['output']>;
  isKosher?: Maybe<Scalars['Boolean']['output']>;
  isOrganic?: Maybe<Scalars['String']['output']>;
  isOutOfStock?: Maybe<Scalars['Boolean']['output']>;
  isPending: Scalars['Boolean']['output'];
  isVegan?: Maybe<Scalars['Boolean']['output']>;
  isWheatFree?: Maybe<Scalars['Boolean']['output']>;
  isYeastFree?: Maybe<Scalars['Boolean']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  /** virtual field populated with exiting notification for a gtin */
  itemNotifications?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  length?: Maybe<Scalars['String']['output']>;
  material?: Maybe<Scalars['String']['output']>;
  meltRisk?: Maybe<Scalars['Boolean']['output']>;
  minOrderQty?: Maybe<Scalars['Int']['output']>;
  nutritionData?: Maybe<NutritionData>;
  onMarketplace?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  primaryCategoryPriority?: Maybe<Scalars['Int']['output']>;
  productPacks?: Maybe<Scalars['Int']['output']>;
  productsPerPack?: Maybe<Scalars['Int']['output']>;
  recommendedItems: Array<Item>;
  returnsPolicy?: Maybe<Scalars['String']['output']>;
  secondaryCategoryPriority?: Maybe<Scalars['Int']['output']>;
  shippingInfo?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  /** @deprecated Please use `slug` going forward. */
  slugHash?: Maybe<Scalars['String']['output']>;
  stories?: Maybe<Array<Maybe<Story>>>;
  /** @deprecated This field will no longer return any sub_items */
  subItems?: Maybe<Array<Maybe<BundleItem>>>;
  subscriptionMetadata?: Maybe<ItemSubscriptionMetadata>;
  subscriptionOnly?: Maybe<Scalars['Boolean']['output']>;
  sugarGramsPerPack?: Maybe<Scalars['Decimal']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  taxCodeId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** @deprecated This field is deprecated, use `Gtin` in place of `Upc` */
  upc?: Maybe<Scalars['String']['output']>;
  variantOptions?: Maybe<Array<Maybe<ProductVariant>>>;
  vendorConfig: Tenant;
  virtual?: Maybe<Scalars['Boolean']['output']>;
  weightOz?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type ItemGasExchangeInfo = {
  __typename?: 'ItemGasExchangeInfo';
  enabled: Scalars['Boolean']['output'];
  missingCylinder?: Maybe<Item>;
  missingCylinderId?: Maybe<Scalars['UUID4']['output']>;
};

export type ItemSubscriptionMetadata = {
  __typename?: 'ItemSubscriptionMetadata';
  discount?: Maybe<Discount>;
  id: Scalars['UUID4']['output'];
  isSubscribable: Scalars['Boolean']['output'];
  subscriptionPrice: Scalars['Int']['output'];
};

export type ItemsInput = {
  basePrice?: InputMaybe<Scalars['Int']['input']>;
  compareAtPrice?: InputMaybe<Scalars['Int']['input']>;
  discountAmount?: InputMaybe<Scalars['Int']['input']>;
  discountId?: InputMaybe<Scalars['UUID4']['input']>;
  itemId?: InputMaybe<Scalars['UUID4']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  taxAmount?: InputMaybe<Scalars['Int']['input']>;
};

export type ItemsPayload = {
  __typename?: 'ItemsPayload';
  items: Array<Item>;
  pagination: PaginationData;
};

export type LatLong = {
  __typename?: 'LatLong';
  lat: Scalars['Float']['output'];
  long: Scalars['Float']['output'];
};

export type LegacyCustomization = {
  __typename?: 'LegacyCustomization';
  bottleCode?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  patternId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  thumbnailImage?: Maybe<Scalars['String']['output']>;
};

/** Discount information as it applies to the individual line item */
export type LineItemDiscount = {
  __typename?: 'LineItemDiscount';
  amount: Scalars['Int']['output'];
  category: LineItemDiscountCategory;
  discountId: Scalars['UUID4']['output'];
  type: LineItemDiscountType;
};

export enum LineItemDiscountCategory {
  Basic = 'BASIC',
  BasicPromoCode = 'BASIC_PROMO_CODE',
  DynamicBundle = 'DYNAMIC_BUNDLE',
  Subscription = 'SUBSCRIPTION',
  Tiered = 'TIERED',
  TieredPromoCode = 'TIERED_PROMO_CODE'
}

export enum LineItemDiscountType {
  Flat = 'FLAT',
  Percent = 'PERCENT'
}

export type Localization = {
  __typename?: 'Localization';
  checkout?: Maybe<CheckoutLocalization>;
  components?: Maybe<ComponentsLocalization>;
  currentLocale: Scalars['String']['output'];
  defaultLocale: Scalars['String']['output'];
  forms?: Maybe<FormsLocalization>;
  /** @deprecated `locale` has been deprecated in favor of `defaultLocale` */
  locale: Scalars['String']['output'];
  portal?: Maybe<PortalLocalization>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LowStockLocalizations = {
  __typename?: 'LowStockLocalizations';
  cartText: Scalars['String']['output'];
  itemHeadingText: Scalars['String']['output'];
  itemNoteText: Scalars['String']['output'];
};

export type LoyaltyConfig = {
  __typename?: 'LoyaltyConfig';
  loyaltyProgramActive: Scalars['Boolean']['output'];
};

/**
 * loyalty data aggregation at Cart and Price level. Will contain total points
 * redeemed, total amount of dollars, and points earned
 */
export type LoyaltyData = {
  __typename?: 'LoyaltyData';
  totalAmount?: Maybe<Scalars['Int']['output']>;
  totalEarnedPoints?: Maybe<Scalars['Int']['output']>;
  totalPoints?: Maybe<Scalars['Int']['output']>;
};

export type LoyaltyItemInput = {
  itemId: Scalars['UUID4']['input'];
  quantity: Scalars['Int']['input'];
};

export type LoyaltyPurchaseInput = {
  loyaltyItems: Array<InputMaybe<LoyaltyItemInput>>;
  rewardId: Scalars['String']['input'];
  rewardQuantity: Scalars['Int']['input'];
  shippingAddressId: Scalars['UUID4']['input'];
};

/** loyalty reward the user has applied to their cart. */
export type LoyaltyReward = {
  __typename?: 'LoyaltyReward';
  code: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  totalAmount: Scalars['Int']['output'];
  totalPoints: Scalars['Int']['output'];
};

export type LoyaltyRewardInput = {
  code: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type LoyaltyRewardInputByPepdirectRewardId = {
  pepdirectRewardId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type MailingAddressInput = {
  city: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress1: Scalars['String']['input'];
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
};

export type Merchandise = {
  __typename?: 'Merchandise';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  tag?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Module = {
  __typename?: 'Module';
  body?: Maybe<Scalars['String']['output']>;
  coverPhotoUrl?: Maybe<Scalars['String']['output']>;
  cta1?: Maybe<Scalars['String']['output']>;
  cta2?: Maybe<Scalars['String']['output']>;
  cta3?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  insertedAt: Scalars['DateTime']['output'];
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  itemOrdering: Array<ModuleItem>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedTime?: Maybe<Scalars['String']['output']>;
  story?: Maybe<Story>;
  storySlug: Scalars['String']['output'];
  thumbnailItems: Array<ModuleThumbnailItem>;
  title1?: Maybe<Scalars['String']['output']>;
  title2?: Maybe<Scalars['String']['output']>;
  title3?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  urlOverride?: Maybe<Scalars['String']['output']>;
};

export type ModuleItem = {
  __typename?: 'ModuleItem';
  item?: Maybe<Item>;
  module?: Maybe<Module>;
  order?: Maybe<Scalars['Int']['output']>;
};

export type ModuleThumbnailItem = {
  __typename?: 'ModuleThumbnailItem';
  id?: Maybe<Scalars['String']['output']>;
  imgUrl?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Newsletter1SignupInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type Newsletter2SignupInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type Newsletter3SignupInput = {
  dateOfBirth: Scalars['Date']['input'];
  email: Scalars['String']['input'];
  emailOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  smsOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
};

export type NutritionData = {
  __typename?: 'NutritionData';
  code?: Maybe<Scalars['String']['output']>;
  ingredientsTextEn?: Maybe<Scalars['String']['output']>;
  nutrients?: Maybe<Array<Maybe<NutritionField>>>;
};

export type NutritionField = {
  __typename?: 'NutritionField';
  derivation?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  measures?: Maybe<Array<Maybe<FieldMeasure>>>;
  name?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type OrangeTheoryInquiryInput = {
  city: Scalars['String']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  marketingSupportType: Scalars['String']['input'];
  state: Scalars['String']['input'];
  streetAddressOne: Scalars['String']['input'];
  streetAddressTwo?: InputMaybe<Scalars['String']['input']>;
  studioName: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  appId?: Maybe<Scalars['UUID4']['output']>;
  cart?: Maybe<Cart>;
  /**
   * Composite Order Ids will be in the format `customer_po-internal_order_id`. If
   * the customer PO field is null, it'll just be the `internal_order_id`
   * @deprecated The display_name field now represents the user visible order identifier/label
   * which is either explicitly set in the record or computed via the composite
   * order id logic. This obviates the need for the composite_id field.
   *
   */
  compositeId?: Maybe<Scalars['String']['output']>;
  contactInfo: ContactInfo;
  /**
   * The display name represents the user visible order label which identifies
   * the order to an end-user. This is either explicitly set in the
   * display_name_override column on the order or is computed as a composite of
   * the purchase order id (if any) and the internal order id.
   */
  displayName?: Maybe<Scalars['String']['output']>;
  /**
   * @deprecated The concept of internal/external order ids is
   * being removed and this will be replaced by a
   * single field.
   *
   */
  externalOrderId?: Maybe<Scalars['String']['output']>;
  gifteeEmail?: Maybe<Scalars['String']['output']>;
  gifteeMessage?: Maybe<Scalars['String']['output']>;
  giftorName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  /**
   * @deprecated The concept of internal/external order ids is
   * being removed and this will be replaced by a
   * single field.
   *
   */
  internalOrderId: Scalars['Int']['output'];
  /**
   * Some orders are managed or "owned" by a different system. These orders are
   * sometimes imported into this system for tracking and reporting purposes but
   * don't have active workflows or fulfillment processes hooked up. This allows
   * these orders to be displayed with special notices in the UI.
   */
  isExternalOrder?: Maybe<Scalars['Boolean']['output']>;
  isGift?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<LatLong>;
  paymentRequest?: Maybe<PaymentRequest>;
  price: Price;
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type OrderInput = {
  gifteeEmail?: InputMaybe<Scalars['String']['input']>;
  gifteeMessage?: InputMaybe<Scalars['String']['input']>;
  giftorName?: InputMaybe<Scalars['String']['input']>;
  isGift?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderProcessing = {
  __typename?: 'OrderProcessing';
  headingText: Scalars['String']['output'];
  subHeadingText: Scalars['String']['output'];
};

export type OrderSubscription = {
  __typename?: 'OrderSubscription';
  address: Address;
  /** @deprecated Please use status/status_reason */
  cancelReason?: Maybe<Scalars['String']['output']>;
  /** @deprecated Please use status_updated_at */
  canceledAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['UUID4']['output'];
  initialOrderDate?: Maybe<Scalars['DateTime']['output']>;
  insertedAt: Scalars['DateTime']['output'];
  intervalInDays: Scalars['Int']['output'];
  lastOrderAttempt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Please use last_successful_order_date */
  lastSuccessfulOrder: Scalars['Date']['output'];
  lastSuccessfulOrderDate: Scalars['Date']['output'];
  /** @deprecated Please use next_order_creation_date */
  nextDeliveryDate: Scalars['Date']['output'];
  nextOrderCreationDates: Array<Maybe<Scalars['Date']['output']>>;
  orderSubscriptionItems: Array<OrderSubscriptionItem>;
  originatingOrder?: Maybe<SubmittedOrder>;
  paymentInfo: PaymentInfo;
  price: SubscriptionPrice;
  status: OrderSubscriptionStatusNames;
  statusReason?: Maybe<Scalars['String']['output']>;
  statusUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  vendorConfig: Tenant;
};

export type OrderSubscriptionItem = {
  __typename?: 'OrderSubscriptionItem';
  orderSubscription: OrderSubscription;
  priceItem: PriceItem;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export enum OrderSubscriptionRelationshipNames {
  /** Order that was a direct result of a subscription execution */
  Child = 'CHILD',
  /** Order with no relationship to any subscriptions */
  None = 'NONE',
  /** Order that resulted in subscriptions being made (priceItem had > 0 subscription_interval_in_days values) */
  Parent = 'PARENT'
}

export enum OrderSubscriptionStatusNames {
  /** Subscription is active and in valid state to fulfill */
  Active = 'ACTIVE',
  /** Subscription is canceled for reason stated in `status_reason` */
  Canceled = 'CANCELED',
  /** Subscription is paused for reason stated in `status_reason` */
  Paused = 'PAUSED'
}

export type OrderSubscriptionsPayload = {
  __typename?: 'OrderSubscriptionsPayload';
  orderSubscriptions: Array<OrderSubscription>;
};

export type OutOfStockInput = {
  email: Scalars['String']['input'];
  emailOptIn: Scalars['Boolean']['input'];
  gtin: Scalars['String']['input'];
};

export type OutOfStockLocalizations = {
  __typename?: 'OutOfStockLocalizations';
  cartText: Scalars['String']['output'];
  itemHeadingText: Scalars['String']['output'];
  itemNoteText: Scalars['String']['output'];
};

export type Pagination = {
  __typename?: 'Pagination';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  nextPageLink?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  prevPageLink?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginationData = {
  __typename?: 'PaginationData';
  count: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

/**
 * Takes advantage of the oneOf custom directive that
 * enforces fields based on the base key for the input
 * type.
 */
export type PartnerInquiryInput = {
  orangeTheory?: InputMaybe<OrangeTheoryInquiryInput>;
};

export type PasswordRequirement = {
  __typename?: 'PasswordRequirement';
  msg: Scalars['String']['output'];
  satisfied: Scalars['Boolean']['output'];
};

export type PasswordRequirementDoubleCondition = {
  __typename?: 'PasswordRequirementDoubleCondition';
  bodyText: Scalars['String']['output'];
  boldText1: Scalars['String']['output'];
  boldText2: Scalars['String']['output'];
};

export type PasswordRequirementSingleCondition = {
  __typename?: 'PasswordRequirementSingleCondition';
  bodyText: Scalars['String']['output'];
  boldText: Scalars['String']['output'];
};

export type PaymentClientTokenPayload = {
  __typename?: 'PaymentClientTokenPayload';
  token: Scalars['String']['output'];
};

export type PaymentConfig = {
  __typename?: 'PaymentConfig';
  billingAddressConfig: AddressConfig;
  descriptor?: Maybe<Scalars['String']['output']>;
  paymentTypes: Array<PaymentType>;
  publicPaymentToken?: Maybe<Scalars['String']['output']>;
};

export type PaymentInfo = {
  __typename?: 'PaymentInfo';
  cardExpirationDate?: Maybe<Scalars['String']['output']>;
  cardholderName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<PaymentMethodNames>;
  paymentType?: Maybe<Scalars['String']['output']>;
  paypalEmail?: Maybe<Scalars['String']['output']>;
  uniqueNumberIdentifier?: Maybe<Scalars['String']['output']>;
};

/** object for holding a single default payment method */
export type PaymentMethod = ApplePayCard | CreditCard | PaypalAccount;

export enum PaymentMethodEnum {
  CreditCard = 'CREDIT_CARD',
  Paypal = 'PAYPAL'
}

export enum PaymentMethodNames {
  /** Apple Pay Card */
  ApplePay = 'APPLE_PAY',
  /** Credit Card */
  CreditCard = 'CREDIT_CARD',
  /** Paypal Account */
  Paypal = 'PAYPAL'
}

/** object defined to hold the different payment methods */
export type PaymentMethods = {
  __typename?: 'PaymentMethods';
  applePayCards?: Maybe<Array<ApplePayCard>>;
  creditCards?: Maybe<Array<CreditCard>>;
  default?: Maybe<PaymentMethod>;
  paypalAccounts?: Maybe<Array<PaypalAccount>>;
};

export type PaymentOptionsInput = {
  default?: InputMaybe<Scalars['Boolean']['input']>;
  deviceData?: InputMaybe<Scalars['String']['input']>;
  nonce?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PaymentMethodEnum>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentRequest = {
  __typename?: 'PaymentRequest';
  billingAddress?: Maybe<EmbeddedAddress>;
  isBillingEqualShipping?: Maybe<Scalars['Boolean']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type PaymentRequestInput = {
  billingAddress?: InputMaybe<EmbeddedAddressInput>;
  deviceData?: InputMaybe<Scalars['String']['input']>;
  isBillingEqualShipping?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentToken?: InputMaybe<Scalars['String']['input']>;
  saveCardForLater?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentType = {
  __typename?: 'PaymentType';
  brandImgUrl: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type PaypalAccount = {
  __typename?: 'PaypalAccount';
  billingAgreementId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  default: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  isChannelInitated?: Maybe<Scalars['Boolean']['output']>;
  isRemovable: Scalars['Boolean']['output'];
  payerInfo?: Maybe<Scalars['String']['output']>;
  subscriptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  token: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PhoneNumberCountryCodesAllowed = {
  __typename?: 'PhoneNumberCountryCodesAllowed';
  code: Scalars['String']['output'];
  country: Scalars['String']['output'];
  length: Scalars['Int']['output'];
};

export type PortalAccountPageLocalization = {
  __typename?: 'PortalAccountPageLocalization';
  activeAccountHeadingText: Scalars['String']['output'];
  addressesHeadingText: Scalars['String']['output'];
  defaultTitleText: Scalars['String']['output'];
  emailHeadingText: Scalars['String']['output'];
  nameHeadingText: Scalars['String']['output'];
  nameUpdateButtonText: Scalars['String']['output'];
  nameUpdateCancelButtonText: Scalars['String']['output'];
  nameUpdateSubmitButtonText: Scalars['String']['output'];
  passwordChangeButtonText: Scalars['String']['output'];
  passwordHeadingText: Scalars['String']['output'];
  paymentsHeadingText: Scalars['String']['output'];
};

export type PortalAddressLocalization = {
  __typename?: 'PortalAddressLocalization';
  addHeadingText: Scalars['String']['output'];
  addSubmitButtonText: Scalars['String']['output'];
  cancelButtonText: Scalars['String']['output'];
  editHeadingText: Scalars['String']['output'];
  makeDefaultText: Scalars['String']['output'];
  updateSubmitButtonText: Scalars['String']['output'];
};

export type PortalAltsLocalization = {
  __typename?: 'PortalAltsLocalization';
  accountAltText: Scalars['String']['output'];
  shopLogoAltText: Scalars['String']['output'];
};

export type PortalBreadcrumbsLocalization = {
  __typename?: 'PortalBreadcrumbsLocalization';
  account: Scalars['String']['output'];
  accountDetails: Scalars['String']['output'];
  addAddress: Scalars['String']['output'];
  addPayment: Scalars['String']['output'];
  changePassword: Scalars['String']['output'];
  editAddress: Scalars['String']['output'];
  exchange: Scalars['String']['output'];
  exchangeDetails: Scalars['String']['output'];
  machines: Scalars['String']['output'];
  notFound: Scalars['String']['output'];
  orders: Scalars['String']['output'];
  shippingAddresses: Scalars['String']['output'];
  subscriptions: Scalars['String']['output'];
};

export type PortalCardLocalization = {
  __typename?: 'PortalCardLocalization';
  addAddressLabel: Scalars['String']['output'];
  addPaymentLabel: Scalars['String']['output'];
  allocationText: Scalars['String']['output'];
  creditCardNumberText: Scalars['String']['output'];
  currentLabel: Scalars['String']['output'];
  defaultAddressLabel: Scalars['String']['output'];
  defaultPaymentLabel: Scalars['String']['output'];
  deleteButtonText: Scalars['String']['output'];
  editButtonText: Scalars['String']['output'];
  makeDefaultButtonText: Scalars['String']['output'];
  numRemainingLabel: Scalars['String']['output'];
  selectLabel: Scalars['String']['output'];
  subscriptionAddressButtonText: Scalars['String']['output'];
  viewAllButtonText: Scalars['String']['output'];
};

export type PortalErrorsAddressVerificationLocalization = {
  __typename?: 'PortalErrorsAddressVerificationLocalization';
  checkoutSpecificConfirmSuggestedText: Scalars['String']['output'];
  confirmSuggestedAddressText: Scalars['String']['output'];
  confirmText: Scalars['String']['output'];
  doYouWantToProceedText: Scalars['String']['output'];
  editEnteredAddressText: Scalars['String']['output'];
  editText: Scalars['String']['output'];
  enteredAddressText: Scalars['String']['output'];
  goBackText: Scalars['String']['output'];
  invalidZipCodeText: Scalars['String']['output'];
  keepEnteredAddressText: Scalars['String']['output'];
  notAbleToVerifyShippingAddressText: Scalars['String']['output'];
  recommendChangesText: Scalars['String']['output'];
  shippingAddressText: Scalars['String']['output'];
  suggestedAddressText: Scalars['String']['output'];
  useSuggestedAddressText: Scalars['String']['output'];
  verifyText: Scalars['String']['output'];
};

export type PortalErrorsGeoblockLocalization = {
  __typename?: 'PortalErrorsGeoblockLocalization';
  apiError: Scalars['String']['output'];
  zipBlocked: Scalars['String']['output'];
};

export type PortalErrorsLocalization = {
  __typename?: 'PortalErrorsLocalization';
  addressVerification?: Maybe<PortalErrorsAddressVerificationLocalization>;
  geoBlock?: Maybe<PortalErrorsGeoblockLocalization>;
};

export type PortalExchangeDetailsPageLocalization = {
  __typename?: 'PortalExchangeDetailsPageLocalization';
  avoidDepositFeesWarningTextFractional: Scalars['String']['output'];
  avoidDepositFeesWarningTextMany: Scalars['String']['output'];
  avoidDepositFeesWarningTextPlural: Scalars['String']['output'];
  avoidDepositFeesWarningTextSingular: Scalars['String']['output'];
  daysLeftToReturnHeadingText: Scalars['String']['output'];
  daysLeftToReturnTextPlural: Scalars['String']['output'];
  daysLeftToReturnTextSingular: Scalars['String']['output'];
  depositFeeAddedAlertText: Scalars['String']['output'];
  depositFeeAddedText: Scalars['String']['output'];
  exchangeDetailsText: Scalars['String']['output'];
  expectedReturnDateText: Scalars['String']['output'];
  extendReturnDeadlineText: Scalars['String']['output'];
  missedReturnDateText: Scalars['String']['output'];
  notFoundMsg: Scalars['String']['output'];
  orderDetailsHeadingText: Scalars['String']['output'];
  orderedText: Scalars['String']['output'];
  paymentHeadingText: Scalars['String']['output'];
  returnByText: Scalars['String']['output'];
  returnDateExtendedText: Scalars['String']['output'];
  returnDateText: Scalars['String']['output'];
  returnedOnText: Scalars['String']['output'];
  returnedOutOfTotalText: Scalars['String']['output'];
  returnedText: Scalars['String']['output'];
  shippingHeadingText: Scalars['String']['output'];
  statusText: Scalars['String']['output'];
  yourOrderText: Scalars['String']['output'];
};

export type PortalExchangeListPageLocalization = {
  __typename?: 'PortalExchangeListPageLocalization';
  active: Scalars['String']['output'];
  closed: Scalars['String']['output'];
  cylinderText: Scalars['String']['output'];
  dueInDaysTextPlural: Scalars['String']['output'];
  dueInDaysTextSingular: Scalars['String']['output'];
  gasExchangeListTitle: Scalars['String']['output'];
  gasExchangePageListTitle: Scalars['String']['output'];
  orderDate: Scalars['String']['output'];
  returnByDate: Scalars['String']['output'];
  returnPastDue: Scalars['String']['output'];
  returnedDate: Scalars['String']['output'];
  viewDetails: Scalars['String']['output'];
};

export type PortalHeaderLocalization = {
  __typename?: 'PortalHeaderLocalization';
  signOutLinkText: Scalars['String']['output'];
};

/**
 * Returns a map of all portal (my account) elements and their translations.
 *
 * Example:
 *     ```
 *     query {
 *       localization {
 *         portal {
 *           accountPage {
 *             nameHeadingText
 *           }
 *         }
 *       }
 *     }
 *     ```
 */
export type PortalLocalization = {
  __typename?: 'PortalLocalization';
  accountPage?: Maybe<PortalAccountPageLocalization>;
  accountVerification?: Maybe<AccountVerificationLocalization>;
  address?: Maybe<PortalAddressLocalization>;
  alts?: Maybe<PortalAltsLocalization>;
  breadcrumbs?: Maybe<PortalBreadcrumbsLocalization>;
  card?: Maybe<PortalCardLocalization>;
  errors?: Maybe<PortalErrorsLocalization>;
  exchangeDetailPage?: Maybe<PortalExchangeDetailsPageLocalization>;
  exchangeList?: Maybe<PortalExchangeListPageLocalization>;
  header?: Maybe<PortalHeaderLocalization>;
  machinesPage?: Maybe<PortalMachinesPageLocalization>;
  notAvailable?: Maybe<PortalNotAvailableLocalization>;
  orderDetailPage?: Maybe<PortalOrderDetailPageLocalization>;
  orderSummary?: Maybe<PortalOrderSummaryLocalization>;
  ordersPage?: Maybe<PortalOrdersPageLocalization>;
  pageTitlesInHead?: Maybe<PortalPageTitlesInHeadLocalization>;
  password?: Maybe<PortalPasswordLocalization>;
  payment?: Maybe<PortalPaymentLocalization>;
  subscriptionDetailPage?: Maybe<PortalSubscriptionDetailPageLocalization>;
  subscriptionsPage?: Maybe<PortalSubscriptionsPageLocalization>;
};

export type PortalMachinesPageLocalization = {
  __typename?: 'PortalMachinesPageLocalization';
  addMachinesText: Scalars['String']['output'];
  areYouSureDeleteThisMachineText: Scalars['String']['output'];
  cancelText: Scalars['String']['output'];
  confirmDeletionText: Scalars['String']['output'];
  deleteMachineText: Scalars['String']['output'];
  getGasText: Scalars['String']['output'];
  learnAboutSparklingWaterMakersText: Scalars['String']['output'];
  machineText: Scalars['String']['output'];
  machinesText: Scalars['String']['output'];
  registerYourMachineNowText: Scalars['String']['output'];
  troubleshootingGuideText: Scalars['String']['output'];
  unlockWarrantyText: Scalars['String']['output'];
  userManualText: Scalars['String']['output'];
  warrantyExpiredText: Scalars['String']['output'];
  warrantyExpiresText: Scalars['String']['output'];
  yesDeleteThisMachineText: Scalars['String']['output'];
};

export type PortalNotAvailableLocalization = {
  __typename?: 'PortalNotAvailableLocalization';
  exchanges: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  linkContentText: Scalars['String']['output'];
  linkText: Scalars['String']['output'];
  naAbbreviationText: Scalars['String']['output'];
  orders: Scalars['String']['output'];
  subscriptions: Scalars['String']['output'];
};

export type PortalOrderDetailPageLocalization = {
  __typename?: 'PortalOrderDetailPageLocalization';
  dateText: Scalars['String']['output'];
  invoiceNote: Scalars['String']['output'];
  notFoundErrorText: Scalars['String']['output'];
  orderIdHeadingText: Scalars['String']['output'];
  orderSummaryHeadingText: Scalars['String']['output'];
  paymentHeadingText: Scalars['String']['output'];
  printButtonText: Scalars['String']['output'];
  shippingAddressHeadingText: Scalars['String']['output'];
  trackingText: Scalars['String']['output'];
};

export type PortalOrderSummaryLocalization = {
  __typename?: 'PortalOrderSummaryLocalization';
  estimatedFeeLabel: Scalars['String']['output'];
  estimatedTaxLabel: Scalars['String']['output'];
  feeLabel: Scalars['String']['output'];
  freeShipLabel: Scalars['String']['output'];
  shippingLabel: Scalars['String']['output'];
  subtotalLabel: Scalars['String']['output'];
  totalLabel: Scalars['String']['output'];
};

export type PortalOrdersPageLocalization = {
  __typename?: 'PortalOrdersPageLocalization';
  dateHeadingText: Scalars['String']['output'];
  exchangeText: Scalars['String']['output'];
  orderIdHeadingText: Scalars['String']['output'];
  ordersHeadingText: Scalars['String']['output'];
  receiptButtonText: Scalars['String']['output'];
  reorderButtonText: Scalars['String']['output'];
  reorderErrorNote: Scalars['String']['output'];
  shippingAddressHeadingText: Scalars['String']['output'];
  totalHeadingText: Scalars['String']['output'];
};

export type PortalPageTitlesInHeadLocalization = {
  __typename?: 'PortalPageTitlesInHeadLocalization';
  verifyAccount: Scalars['String']['output'];
};

export type PortalPasswordLocalization = {
  __typename?: 'PortalPasswordLocalization';
  backButtonText: Scalars['String']['output'];
  cancelButtonText: Scalars['String']['output'];
  changePasswordCancelButtonText: Scalars['String']['output'];
  changePasswordHeadingText: Scalars['String']['output'];
  changePasswordSubmitButtonText: Scalars['String']['output'];
  checkYourEmailContentText: Scalars['String']['output'];
  checkYourEmailHeadingText: Scalars['String']['output'];
  currentPasswordLabelText: Scalars['String']['output'];
  forgotPasswordHeadingText: Scalars['String']['output'];
  forgotPasswordHeadingWithTenantText: Scalars['String']['output'];
  minCharactersText: PasswordRequirementSingleCondition;
  newPasswordLabelText: Scalars['String']['output'];
  oneSpecialCharText: PasswordRequirementSingleCondition;
  oneUppercaseOneLowercaseAlphaText: PasswordRequirementDoubleCondition;
  passwordUpdatedBannerText: Scalars['String']['output'];
  resetPasswordHeadingText: Scalars['String']['output'];
  resetPasswordHeadingWithTenantText: Scalars['String']['output'];
  twoNumericDigitsText: PasswordRequirementSingleCondition;
  updatePasswordHeadingText: Scalars['String']['output'];
};

export type PortalPaymentLocalization = {
  __typename?: 'PortalPaymentLocalization';
  addHeadingText: Scalars['String']['output'];
  billingSameAsShippingText: Scalars['String']['output'];
  cancelButtonText: Scalars['String']['output'];
  creditCardSelectorText: Scalars['String']['output'];
  makeDefaultText: Scalars['String']['output'];
  paypalSelectorText: Scalars['String']['output'];
  submitButtonText: Scalars['String']['output'];
};

export type PortalSubscriptionDetailPageLocalization = {
  __typename?: 'PortalSubscriptionDetailPageLocalization';
  addressHeadingText: Scalars['String']['output'];
  backButtonText: Scalars['String']['output'];
  cancelHeadingSubText: Scalars['String']['output'];
  cancelHeadingText: Scalars['String']['output'];
  cancelLabel: Scalars['String']['output'];
  cancelSubscriptionButtonText: Scalars['String']['output'];
  canceledText: Scalars['String']['output'];
  closeButtonText: Scalars['String']['output'];
  editAddressButtonText: Scalars['String']['output'];
  editPaymentButtonText: Scalars['String']['output'];
  intervalHeadingText: Scalars['String']['output'];
  intervalText: Scalars['String']['output'];
  manageSubscriptionLabel: Scalars['String']['output'];
  needToStartNewLabel: Scalars['String']['output'];
  nextDeliveryDateHeadingText: Scalars['String']['output'];
  nextShipmentDateText: Scalars['String']['output'];
  noLongerNeedLabel: Scalars['String']['output'];
  orderedAtHeadingText: Scalars['String']['output'];
  otherLabel: Scalars['String']['output'];
  pausedBannerText: Scalars['String']['output'];
  pausedText: Scalars['String']['output'];
  paymentHeadingText: Scalars['String']['output'];
  paymentUpdateButtonText: Scalars['String']['output'];
  paymentUpdateNeededText: Scalars['String']['output'];
  priceNoteText: Scalars['String']['output'];
  reasonForCancelingLabel: Scalars['String']['output'];
  reasonForCancelingPlaceholder: Scalars['String']['output'];
  renameLabel: Scalars['String']['output'];
  resumeLabel: Scalars['String']['output'];
  resumedBannerText: Scalars['String']['output'];
  shippingIssueLabel: Scalars['String']['output'];
  skipHeadingText: Scalars['String']['output'];
  skipLabel: Scalars['String']['output'];
  skipNextShipmentButtonText: Scalars['String']['output'];
  skippedBannerText: Scalars['String']['output'];
  skippedShipmentDateText: Scalars['String']['output'];
  subscriptionNotFoundText: Scalars['String']['output'];
  subscriptionText: Scalars['String']['output'];
};

export type PortalSubscriptionsPageLocalization = {
  __typename?: 'PortalSubscriptionsPageLocalization';
  actionRequiredLabel: Scalars['String']['output'];
  canceledLabel: Scalars['String']['output'];
  headingText: Scalars['String']['output'];
  intervalText: Scalars['String']['output'];
  nextDeliveryDateText: Scalars['String']['output'];
  noSubscriptionsFoundText: Scalars['String']['output'];
  pausedLabel: Scalars['String']['output'];
};

export type PotentialPoints = {
  __typename?: 'PotentialPoints';
  totalPointsAwarded: Scalars['Int']['output'];
};

export type PotentialPointsInput = {
  items: Array<InputMaybe<PotentialPointsItemInput>>;
};

export type PotentialPointsItemInput = {
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  upc: Scalars['String']['input'];
};

export type Price = {
  __typename?: 'Price';
  discount?: Maybe<Scalars['Int']['output']>;
  discounts: Array<Discount>;
  dynamicBundles?: Maybe<Scalars['Json']['output']>;
  id?: Maybe<Scalars['UUID4']['output']>;
  items: Array<PriceItem>;
  priceDiscounts: Array<PriceDiscount>;
  shipping?: Maybe<Scalars['Int']['output']>;
  subtotal?: Maybe<Scalars['Int']['output']>;
  tax?: Maybe<Scalars['Int']['output']>;
  taxItems: Array<TaxItem>;
  total?: Maybe<Scalars['Int']['output']>;
  unclaimedTaxes?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PriceDiscount = {
  __typename?: 'PriceDiscount';
  discount?: Maybe<Discount>;
  price?: Maybe<Price>;
};

export type PriceInput = {
  discount?: InputMaybe<Scalars['Int']['input']>;
  discounts?: InputMaybe<Array<InputMaybe<DiscountsInput>>>;
  items?: InputMaybe<Array<InputMaybe<ItemsInput>>>;
  shipping?: InputMaybe<Scalars['Int']['input']>;
  subtotal?: InputMaybe<Scalars['Int']['input']>;
  tax?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type PriceItem = {
  __typename?: 'PriceItem';
  basePrice?: Maybe<Scalars['Int']['output']>;
  compareAtPrice?: Maybe<Scalars['Int']['output']>;
  /** Item in it's current state (may differ from embedded item) */
  currentItem?: Maybe<Item>;
  customizations?: Maybe<Scalars['Json']['output']>;
  discountAmount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID4']['output'];
  /** Item as it was when purchased */
  item?: Maybe<EmbeddedItem>;
  itemId?: Maybe<Scalars['UUID4']['output']>;
  price?: Maybe<Price>;
  quantity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated This field should not be used nor relied upon */
  shippingAmount?: Maybe<Scalars['Int']['output']>;
  subscriptionIntervalInDays?: Maybe<Scalars['Int']['output']>;
  taxAmount?: Maybe<Scalars['Int']['output']>;
  taxItems: Array<TaxItem>;
  unclaimedTaxes?: Maybe<Scalars['Int']['output']>;
};

export type PriceLocalization = {
  __typename?: 'PriceLocalization';
  eachPriceText: Scalars['String']['output'];
  regularPriceText: Scalars['String']['output'];
};

export type ProductImageVariant = {
  __typename?: 'ProductImageVariant';
  item?: Maybe<Item>;
  pos?: Maybe<Scalars['Int']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  item?: Maybe<Item>;
  variant?: Maybe<Item>;
  variantOptions?: Maybe<Array<Maybe<ProductVariantOption>>>;
};

export type ProductVariantOption = {
  __typename?: 'ProductVariantOption';
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  productVariant?: Maybe<ProductVariant>;
  value?: Maybe<Scalars['String']['output']>;
};

export type PurchaseQtyLimitLocalizations = {
  __typename?: 'PurchaseQtyLimitLocalizations';
  cartText: Scalars['String']['output'];
};

export type Question = {
  __typename?: 'Question';
  allowOther?: Maybe<Scalars['Boolean']['output']>;
  answerOptions?: Maybe<Scalars['Json']['output']>;
  displayOrder?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  questionType?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type QuestionResponse = {
  __typename?: 'QuestionResponse';
  other?: Maybe<Scalars['String']['output']>;
  questionId?: Maybe<Scalars['Int']['output']>;
  selectedAnswers?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  textAnswer?: Maybe<Scalars['String']['output']>;
};

export type ReceiptInfo = {
  __typename?: 'ReceiptInfo';
  dateSubmitted?: Maybe<Scalars['DateTime']['output']>;
  fileId?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  scanResult?: Maybe<Scalars['String']['output']>;
  scanResultText?: Maybe<Scalars['String']['output']>;
};

export type ReceiptInfoHistory = {
  __typename?: 'ReceiptInfoHistory';
  pagination?: Maybe<Pagination>;
  receipts?: Maybe<Array<Maybe<ReceiptInfo>>>;
};

export type RedeemRewardByPepdirectRewardIdInput = {
  pepdirectRewardId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type RedeemRewardInput = {
  quantity: Scalars['Int']['input'];
  rewardId: Scalars['String']['input'];
};

export type Redemption = {
  __typename?: 'Redemption';
  categoryId?: Maybe<Scalars['String']['output']>;
  dateCreated: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endingBalance: Scalars['String']['output'];
  extraData?: Maybe<Scalars['Json']['output']>;
  groupId?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  rewardId: Scalars['String']['output'];
  rewardTitle?: Maybe<Scalars['String']['output']>;
  totalPointsRedeemed: Scalars['Int']['output'];
};

export type RedemptionInfoHistory = {
  __typename?: 'RedemptionInfoHistory';
  pagination?: Maybe<Pagination>;
  redemptions?: Maybe<Array<Maybe<Redemption>>>;
};

export type RegistrationRecord = {
  __typename?: 'RegistrationRecord';
  customData?: Maybe<Scalars['Json']['output']>;
  emailOptIn?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['UUID4']['output'];
  insertedAt: Scalars['DateTime']['output'];
  item: Item;
  itemId: Scalars['UUID4']['output'];
  newUser: Scalars['Boolean']['output'];
  order?: Maybe<SubmittedOrder>;
  orderId?: Maybe<Scalars['UUID4']['output']>;
  purchaseDate?: Maybe<Scalars['Date']['output']>;
  purchaseLocation: Scalars['String']['output'];
  registeredAt: Scalars['DateTime']['output'];
  source: Scalars['String']['output'];
  status: StatusType;
  tenant: Tenant;
  tenantId: Scalars['UUID4']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['UUID4']['output'];
  utmData?: Maybe<UtmData>;
  warrantyExpirationDate?: Maybe<Scalars['Date']['output']>;
};

/**
 * Inputs for requesting Password Reset for a User.
 *
 * The `state` field is used to pass information back to the browser when
 * as User clicks on the password reset link in their email. The state is
 * included as a query string appended to the URL. The value of `state` can
 * be any string, as long as it is URL safe.
 *
 * The API does not inspect or manipulate the `state`, it is simply passed
 * to the password reset link.
 */
export type RequestPasswordResetForUserInput = {
  email: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export type RequestPasswordResetForUserPayload = {
  __typename?: 'RequestPasswordResetForUserPayload';
  email: Scalars['String']['output'];
};

export type ResetUserPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type RestrictedItemsByZipCodePayload = {
  __typename?: 'RestrictedItemsByZipCodePayload';
  restrictedItems: Array<Item>;
};

export type RetrievedAddress = {
  __typename?: 'RetrievedAddress';
  adminAreaCode?: Maybe<Scalars['String']['output']>;
  adminAreaName?: Maybe<Scalars['String']['output']>;
  block?: Maybe<Scalars['String']['output']>;
  buildingName?: Maybe<Scalars['String']['output']>;
  buildingNumber?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  dataLevel?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  domesticId?: Maybe<Scalars['String']['output']>;
  field1?: Maybe<Scalars['String']['output']>;
  field2?: Maybe<Scalars['String']['output']>;
  field3?: Maybe<Scalars['String']['output']>;
  field4?: Maybe<Scalars['String']['output']>;
  field5?: Maybe<Scalars['String']['output']>;
  field6?: Maybe<Scalars['String']['output']>;
  field7?: Maybe<Scalars['String']['output']>;
  field8?: Maybe<Scalars['String']['output']>;
  field9?: Maybe<Scalars['String']['output']>;
  field10?: Maybe<Scalars['String']['output']>;
  field11?: Maybe<Scalars['String']['output']>;
  field12?: Maybe<Scalars['String']['output']>;
  field13?: Maybe<Scalars['String']['output']>;
  field14?: Maybe<Scalars['String']['output']>;
  field15?: Maybe<Scalars['String']['output']>;
  field16?: Maybe<Scalars['String']['output']>;
  field17?: Maybe<Scalars['String']['output']>;
  field18?: Maybe<Scalars['String']['output']>;
  field19?: Maybe<Scalars['String']['output']>;
  field20?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  languageAlternatives?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  line3?: Maybe<Scalars['String']['output']>;
  line4?: Maybe<Scalars['String']['output']>;
  line5?: Maybe<Scalars['String']['output']>;
  neighbourhood?: Maybe<Scalars['String']['output']>;
  poBoxNumber?: Maybe<Scalars['String']['output']>;
  secondaryStreet?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  subBuilding?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type RetrievedItems = {
  __typename?: 'RetrievedItems';
  items?: Maybe<Array<RetrievedAddress>>;
};

export type Reward = {
  __typename?: 'Reward';
  categoryId?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  dateEnd?: Maybe<Scalars['DateTime']['output']>;
  dateStart?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  extraData?: Maybe<Scalars['Json']['output']>;
  freqCap?: Maybe<Scalars['Int']['output']>;
  freqPeriodId?: Maybe<Scalars['Int']['output']>;
  freqPeriodName?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isEnabled?: Maybe<Scalars['Int']['output']>;
  maxPerUser?: Maybe<Scalars['Int']['output']>;
  numPoints: Scalars['Int']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  referenceId?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type RewardRedeemed = {
  __typename?: 'RewardRedeemed';
  balance: Scalars['Int']['output'];
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  acceptTermsAndConditions?: Maybe<User>;
  /**
   * Adds an item to a cart. Will create a new cart
   * if no `id` is included and cart is not already
   * associated with the requesting user. If a cart
   * already exists for the user or session we will
   * grab that cart and add the requested item.
   *
   * Cookie for cart is `decovo-shoppingcart`.
   *
   * Example:
   *   ```
   *   mutation AddCartItem($input: CartItemInput!) {
   *     addCartItem(input: $input) {
   *       id
   *       items {
   *         id
   *         quantity
   *         customizations
   *       }
   *     }
   *   }
   *   ```
   *   Variables:
   *
   *   ```
   *   {
   *     input: {
   *       "item_id": "a2e22ba6-b113-268b-e14e-ad501cb19e18",
   *       "quantity": 1
   *     }
   *   }
   *   ```
   */
  addCartItem?: Maybe<Cart>;
  /**
   * Add a dynamic bundle of cart items to a cart.
   *
   * This will run a check to verify that all the items
   * submitted are qualified in the bundle, then updates
   * the cart with the proper meta data in the cart items to
   * qualify them for a discount.
   *
   * Please ensure the items are sorted correctly per component.
   * For example: If you send items for component A but belong to
   * component B then those items will not qualify for the bundle.
   *
   * Example:
   * ```
   *   mutation AddDynamicBundle ($input: CartDynamicBundleInput!) {
   *     addDynamicBundle(input: $input) {
   *       id
   *       dynamic_bundles
   *       items {
   *         item {
   *           id
   *         }
   *         quantity
   *         dynamic_bundle
   *         customizations
   *       }
   *     }
   *   }
   * ```
   * Variables:
   * ```
   * {
   *   "input": {
   *     "id": "456a9e8a-c9ba-4ccb-91bf-420549c32566",
   *     "bundle_id": "1c231c97-ac47-43ce-87b6-6adb24067dd0",
   *     "components": [
   *       {
   *         "component_id": "e76c5b69-8517-445b-9fad-650f52f816af",
   *         "items": [
   *           {
   *             "item_id": "3c45a09d-e34f-4be5-8a67-18b93ad25b38",
   *             "customizations": "[{"description": "Concave_White", "pattern_code":"286"}]"
   *             "quantity": 5
   *           },
   *           {
   *             "item_id": "85853232-dc23-4d90-ae11-df5337b9bf11",
   *             "customizations": "[{"description": "Concave_White", "pattern_code":"286"}]"
   *             "quantity": 5
   *           }
   *         ]
   *       },
   *       {
   *         "component_id": "a283faf0-59a2-488e-ac65-7b61daa6cea4",
   *         "items": [
   *         {
   *           "item_id": "704d74bc-2ae4-4d30-9046-02d2acd8225f",
   *           "quantity": 8
   *         },
   *         {
   *           "item_id": "9111915b-12a5-4818-b020-a9d2eddc6490",
   *           "quantity": 2
   *         }
   *       ]
   *     }
   *   }
   * ```
   */
  addDynamicBundle?: Maybe<Cart>;
  /**
   * Add an exact dynamic bundle of cart items to a cart.
   *
   * NOTE: This does not support customizations or subscriptions
   *
   * Example:
   * ```
   *   mutation AddExactDynamicBundle ($input: CartExactDynamicBundleInput!) {
   *     addExactDynamicBundle(input: $input) {
   *       id
   *       dynamic_bundles
   *       items {
   *         item {
   *           id
   *         }
   *         dynamic_bundle
   *       }
   *     }
   *   }
   * ```
   * Variables:
   * ```
   * {
   *   "input": {
   *     "id": "456a9e8a-c9ba-4ccb-91bf-420549c32566",
   *     "bundle_id": "1c231c97-ac47-43ce-87b6-6adb24067dd0"
   *   }
   * ```
   *
   * or via a bundle tag:
   *
   * ```
   * {
   *   "input": {
   *     "id": "456a9e8a-c9ba-4ccb-91bf-420549c32566",
   *     "bundle_tag": "art-bialy-flavorpack"
   *   }
   * ```
   */
  addExactDynamicBundle?: Maybe<Cart>;
  /**
   * Add an item with unique customizations to a Cart.
   * If there are no customizations please use: AddCartItem
   *
   * mutation AddItemWithUniqueCustomizations ($input: AddItemWithUniqueCustomizationsInput!) {
   *   addItemWithUniqueCustomizations(input: $input) {
   *     id
   *     user {
   *       id
   *     }
   *     items {
   *       id
   *       item {
   *         id
   *       }
   *       quantity
   *       subscriptionIntervalInDays
   *       customizations
   *       analytics_details
   *     }
   *     total
   *   }
   * }
   * ```
   * Variables:
   * ```
   * {
   *   input: {
   *     "cart_item_id": "a2e22ba6-b113-268b-e14e-ad501cb19e18",
   *     "quantity": 1,
   *     "customizations": "[{"description": "Concave_White", "pattern_code":"286"}]",
   *     "subscriptionIntervalInDays": 15
   *   }
   * }
   * ```
   */
  addItemWithUniqueCustomizations?: Maybe<Cart>;
  /**
   * Update the cart with loyalty reward applied
   *
   * If the given code is already present in the cart's loyalty_data field, its quantity and totals will be updated.
   *
   * Use a quantity of 0 (zero) to remove a reward from the cart.
   *
   * Example:
   *   ```
   *   mutation applyLoyaltyRewardToCart($input: LoyaltyRewardInput!) {
   *     applyLoyaltyRewardToCart(input: $input) {
   *       id
   *       loyaltyData {
   *         totalAmount
   *         totalPoints
   *       }
   *       loyaltyRewards {
   *         code
   *         quantity
   *         totalAmount
   *         totalPoints
   *       }
   *     }
   *   }
   *   ```
   *
   *   Variables:
   *   ```
   *   {
   *     "input": {
   *       "code": "1234567",
   *       "quantity": 3
   *     }
   *   }
   *   ```
   * @deprecated Use applyLoyaltyRewardToCartByPepdirectRewardId instead
   */
  applyLoyaltyRewardToCart?: Maybe<Cart>;
  /**
   * Update the cart with loyalty reward applied
   *
   * If the given pepdirect_reward_id is already present in the cart's loyalty_data
   * field, its quantity and totals will be updated.
   *
   * Use a quantity of 0 (zero) to remove a reward from the cart.
   *
   * Example:
   *   ```
   *   mutation applyLoyaltyRewardToCartByPepdirectRewardId($input: LoyaltyRewardInputByPepdirectRewardId!) {
   *     applyLoyaltyRewardToCartByPepdirectRewardId(input: $input) {
   *       id
   *       loyaltyData {
   *         totalAmount
   *         totalPoints
   *       }
   *       loyaltyRewards {
   *         code
   *         quantity
   *         totalAmount
   *         totalPoints
   *       }
   *     }
   *   }
   *   ```
   *
   *   Variables:
   *   ```
   *   {
   *     "input": {
   *       "pepdirect_reward_id": "fiveDollarOffReward",
   *       "quantity": 3
   *     }
   *   }
   *   ```
   */
  applyLoyaltyRewardToCartByPepdirectRewardId?: Maybe<Cart>;
  /**
   * Update the cart with potential points from items in the cart
   *
   * Example:
   *   ```
   *   mutation applyPotentialPointsToCart {
   *     applyPotentialPointsToCart {
   *       id
   *       loyaltyData {
   *         totalEarnedPoints
   *       }
   *     }
   *   }
   *   ```
   *
   *   Variables: none
   */
  applyPotentialPointsToCart?: Maybe<Cart>;
  archiveRegistrationRecord?: Maybe<RegistrationRecord>;
  /**
   * associates an anonymous Cart (a Cart without a `user_id`) to the current
   * authenticated User.
   */
  associateCartToUser?: Maybe<Cart>;
  /** Returns the order with the discounts applied. (Does not update order in DB) */
  calculateOrderDiscounts?: Maybe<CalculateOrderDiscountsPayload>;
  calculateOrderTaxes?: Maybe<CalculateOrderPayload>;
  /** @deprecated Please use update_order_subscription_status and set status to CANCELED and include a status_reason */
  cancelOrderSubscription?: Maybe<OrderSubscription>;
  changeUserPassword?: Maybe<User>;
  createAccountAndRegistrationRecord?: Maybe<User>;
  /**
   * Creates an order.
   *
   * Mutation
   * ```
   * mutation CreateOrder($cartId: String!, $input: OrderInput) {
   *   createOrder(cartId: $cartId, input: $input) {
   *     app_id
   *     cart{
   *         id
   *     }
   *     id
   *     status
   *     location {
   *       lat
   *       long
   *     }
   *     user {
   *       id
   *       first_name
   *       last_name
   *     }
   *     contact_info {
   *         email
   *         shipping_address{
   *             line1
   *         }
   *     }
   *     payment_request{
   *         billing_address{
   *             line1
   *         }
   *     }
   *     price{
   *         total
   *     }
   *     requested_delivery_date
   *     submission_uid
   *   }
   * }
   * ```
   *
   * Variables
   * ```
   * {
   *   "cartId": "bcde7722-bf35-4a41-bc56-b200ec3155ae",
   *   "input": {}
   * }
   * ```
   */
  createOrder?: Maybe<CreatedOrder>;
  createPaymentClientToken: PaymentClientTokenPayload;
  createPaymentMethod: PaymentMethod;
  createRegistrationRecord?: Maybe<RegistrationRecord>;
  createSetupIntent: SetupIntent;
  /** create a cart using a submitted user order */
  createTemporaryCartFromOrder?: Maybe<Cart>;
  createUserAddress: Address;
  deleteCreditCard: Scalars['String']['output'];
  deletePaymentMethod: Scalars['String']['output'];
  deleteUserAddress: Address;
  /** @deprecated Please use `engagement_signup` going forward. */
  emailNewsletterSignup?: Maybe<Scalars['String']['output']>;
  /**
   * Noting here that some tenants use the same parameters but the identifiers will have different
   * source id's. these are used to know the location of where the user initiated the signup ie. footer
   * Example:
   * ```
   * mutation engagementSignup($input: EngagementSignupInput!) {
   *   engagementSignup(input: $input)
   * }
   *
   * #  Newsletter1
   * {
   *   "input":  {"identifier1": {"email": "karen.schaper@pepsico.com", "firstName": "bob","lastName": "Smith"}}
   * }
   *
   * OR
   *
   * #  Out of Stock Email
   * {
   *   "input":  {"identifier2": {"email": "karen.schaper@pepsico.com", "gtin": "00052000000481","emailOptIn": true}}
   * }
   *
   * OR
   *
   * #  Newsletter2
   * {
   *   "input":  {"identifier3": {"email": "karen.schaper@pepsico.com", "firstName": "bob","lastName": "Smith"}}
   * }
   *
   * OR
   *
   * #  Newsletter3
   * {
   *   "input":  {"identifier4": {"email": "karen.schaper@pepsico.com", "firstName":
   * "bob","lastName": "Smith", birthDate: "2020-01-02"}}
   * }
   * ```
   */
  engagementSignup?: Maybe<Scalars['String']['output']>;
  /** @deprecated Please use`loginUser` going forward. */
  login?: Maybe<User>;
  loginUser?: Maybe<User>;
  logoutUser?: Maybe<User>;
  /**
   * Allows the purchase of specific items configured for points purchase.
   * Example:
   * ```
   * mutation loyaltyPurchaseByPepdirectRewardId($input: loyaltyPurchaseInput!) {
   *   loyaltyPurchaseByPepdirectRewardId(input: $input) {
   *     appId
   *     id
   *     status
   *     user {
   *       id
   *     }
   *   }
   * }
   * ```
   * Variables:
   * ```
   * {
   *     "input": {
   *       "loyaltyItems" {
   *         "itemId": "01ef0285-04e2-19d0-9cc9-bc274e0cb4a7"
   *         "quantity": 2
   *       }
   *       "shippingAddressId": "17e20913-5d02-5e05-7122-5093252e99af",
   *       "rewardId": "freeItem",
   *       "rewardQuantity": 1
   *     }
   *   }
   * ```
   */
  loyaltyPurchaseByPepdirectRewardId?: Maybe<SubmittedOrder>;
  /**
   * Update the user profile in the loyalty program
   * Example:
   *   ```
   *   mutation loyaltyUpdateProfile($input: userProfileInput!) {
   *     loyaltyUpdateProfile(input: $input) {
   *       firstName
   *       lastName
   *       totalPoints
   *       redeemablePoints
   *       customData
   *     }
   *   }
   *   ```
   *
   *   ```
   *   Variables:
   *
   *   ```
   *   {
   *     "input": {
   *       "sweepstakes_optin": false,
   *       "mailing_address": {
   *             "state": "MA",
   *             "city": "West Roxbury",
   *             "street_address_1": "Valley View Drive",
   *             "street_address_2": "4106",
   *             "postal_code": "02132",
   *             "phone_number": "5555555555"
   *       }
   *     }
   *   }
   *   ```
   */
  loyaltyUpdateProfile?: Maybe<UserProfile>;
  /** merge two carts */
  mergeCarts?: Maybe<Cart>;
  /**
   * Allows for multiple potential inputs using the base
   * key in the input type to determine what they are
   * inquiring about. Follows the same pattern as the
   * engagement_signup mutation.
   */
  partnerInquiry?: Maybe<Scalars['String']['output']>;
  /** creates a cart from a temporary cart */
  persistTemporaryCart?: Maybe<Cart>;
  /**
   * Redeems a reward for a user.
   * Example:
   *   ```
   *   mutation RedeemReward($input: RedeemRewardInput!) {
   *     redeemReward(input: $input) {
   *       balance
   *     }
   *   }
   *   ```
   *   ```
   *   Variables:
   *   ```
   *   {
   *     "input": {
   *       "reward_id": "410241571",
   *       "quantity": 1
   *     }
   *   }
   *   ```
   * @deprecated Use redeemRewardByPepdirectRewardId instead
   */
  redeemReward?: Maybe<RewardRedeemed>;
  /**
   * Redeems a reward for a user using the pepdirect_reward_id.
   * Example:
   *   ```
   *   mutation RedeemRewardByPepdirectRewardId($input: RedeemRewardByPepdirectRewardIdInput!) {
   *     redeemRewardByPepdirectRewardId(input: $input) {
   *       balance
   *     }
   *   }
   *   ```
   *   ```
   *   Variables:
   *   ```
   *   {
   *     "input": {
   *       "pepdirect_reward_id": "fiveDollarOffReward",
   *       "quantity": 1
   *     }
   *   }
   */
  redeemRewardByPepdirectRewardId?: Maybe<RewardRedeemed>;
  registerAiDesign?: Maybe<AiDesign>;
  /**
   * Example:
   * ```
   *   mutation RemoveDynamicBundle ($input: CartRemoveDynamicBundleInput!) {
   *     removeDynamicBundle(input: $input) {
   *       id
   *       dynamic_bundles
   *       items {
   *         item {
   *           id
   *         }
   *         quantity
   *         dynamic_bundle
   *       }
   *     }
   *   }
   * ```
   * Variables:
   * ```
   * {
   *   "input": {
   *     "id": "456a9e8a-c9ba-4ccb-91bf-420549c32566",
   *     "cart_bundle_reference": 22222
   *   }
   * }
   * ```
   */
  removeDynamicBundle?: Maybe<Cart>;
  /**
   * Requests a Password Reset for a User with the email provided.
   *
   * Mutation
   * ```
   * mutation RequestPasswordResetForUser($input: RequestPasswordResetForUserInput!) {
   *   requestPasswordResetForUser(input: $input) {
   *     email
   *   }
   * }
   * ```
   *
   * Variables
   * ```
   * {
   *   "input": {
   *     "email": "user@example.com"
   *   }
   * }
   * ```
   */
  requestPasswordResetForUser?: Maybe<RequestPasswordResetForUserPayload>;
  /**
   * This Mutation has been deprecated, please use `requestPasswordResetForUser`
   * @deprecated This Mutation has been deprecated, please use `requestPasswordResetForUser`
   *
   */
  requestUserPasswordReset?: Maybe<UserPasswordResetRequestPayload>;
  resetUserPassword?: Maybe<User>;
  /**
   * Example:
   *   ```
   *   mutation SendSspEmail($input: EmailSspInput!) {
   *     sendSspEmail(input: $input) {
   *       status
   *     }
   *   }
   *
   *   ```
   *   Variables:
   *
   *   ```
   *   {
   *     "input":{
   *       "firstName":"First name",
   *       "lastName":"Last name",
   *       "email":"email@pepsico.com",
   *       "businessName":"Pepsico",
   *       "businessAddress":"Business address",
   *       "businessType":"Business Type",
   *       "numberOfUsers":10,
   *       "existingCustomer": true,
   *       "manageAndOrder": "Manage and order",
   *       "city": "Benito Juarez",
   *       "state": "CDMX",
   *       "zip": "03023",
   *       "phone_number": "5512259112"
   *     }
   *   }
   *   ```
   */
  sendSspEmail?: Maybe<EmailSspResponse>;
  signupUser?: Maybe<User>;
  skipOrderSubscription?: Maybe<OrderSubscription>;
  /**
   * Submits an order, returning the created submittedOrder.
   *
   * Mutation
   * ```
   * mutation SubmitOrder($orderId: UUID4!, $input: SubmitOrderInput!) {
   *   submitOrder(orderId: $orderId, input: $input) {
   *     app_id
   *     cart_id
   *     giftee_email
   *     giftee_message
   *     giftor_name
   *     is_gift
   *     price {
   *       discount
   *     }
   *     user {
   *       email
   *       first_name
   *       last_name
   *     }
   *     status
   *   }
   * }
   * ```
   *
   * Variables
   * ```
   * {
   *   input: {
   *     contactInfo: {
   *       email: "tyrell1971@hoppe.name",
   *       phone: "5555555555",
   *       shippingAddress: {
   *         city: "city",
   *         company: "companyName",
   *         countryCode: "country",
   *         firstName: "firstName",
   *         lastName: "lastName",
   *         line1: "streetAddress",
   *         line2: "addressDetails",
   *         state: "AL",
   *         zip: "zipCode"
   *       }
   *     },
   *     paymentRequest: {
   *       billingAddress: {
   *         city: "city",
   *         company: "companyName",
   *         countryCode: "US",
   *         firstName: "firstName",
   *         lastName: "lastName",
   *         line1: "streetAddress",
   *         line2: "addressDetails",
   *         state: "AL",
   *         zip: "zipCode"
   *       },
   *       isBillingEqual_shipping: false,
   *       paymentMethod: "CREDIT_CARD",
   *       paymentToken: "token"
   *     },
   *     price: {discounts: []},
   *     requestedDeliveryDate: ~D[2021-10-05]
   *   },
   *   orderId: "e1215198-69be-4eb3-8e95-8ad441ebfe0a"
   * }
   * ```
   */
  submitOrder?: Maybe<SubmittedOrder>;
  /**
   * submit a users survey answers
   *
   * Example:
   *   ```
   * mutation submitSurvey($input: SurveyResponseInput!) {
   *   submitSurvey(input: $input) {
   *     message
   *     pointsAwarded
   *     totalResponses
   *   }
   * }
   *   ```
   *   Variables:
   *   ```
   *   {
   *     "input": {
   *       "pepdirectActivityId": "ncaaSweepsOptIn",
   *       "surveyResponse": [
   *         {
   *             "questionId": 1,
   *             "selectedAnswers": [2],
   *             "textAnswer": "some answer",
   *             "other": "some answer"
   *         }
   *       ]
   *     }
   *   }
   *   ```
   */
  submitSurvey?: Maybe<SurveySubmissionResponse>;
  /**
   * Add an item with unique customizations to a Cart.
   * If there are no customizations please use: AddCartItem
   *
   * mutation UniqueAddCartItem ($input: CartItemInput!) {
   *   uniqueAddCartItem(input: $input) {
   *     id
   *     user {
   *       id
   *     }
   *     items {
   *       id
   *       item {
   *         id
   *       }
   *       quantity
   *       subscriptionIntervalInDays
   *       customizations
   *       analytics_details
   *     }
   *     total
   *   }
   * }
   * ```
   * Variables:
   * ```
   * {
   *   input: {
   *     "item_id": "a2e22ba6-b113-268b-e14e-ad501cb19e18",
   *     "quantity": 1,
   *     "subscriptionIntervalInDays": 15
   *     "customizations": "[{"description": "Concave_White", "pattern_code":"286"}]"
   *   }
   * }
   * ```
   * @deprecated This is being deprecated instead please use: AddItemWithUniqueCustomizations
   */
  uniqueAddCartItem?: Maybe<Cart>;
  /**
   * Add an item with unique customizations to a Cart.
   * If there are no customizations please use: AddCartItem
   *
   * mutation UniqueUpdateCartItem ($input: UniqueCartItemInput!) {
   *   uniqueUpdateCartItem(input: $input) {
   *     id
   *     user {
   *       id
   *     }
   *     items {
   *       id
   *       item {
   *         id
   *       }
   *       quantity
   *       customizations
   *       analytics_details
   *     }
   *     total
   *   }
   * }
   * ```
   * Variables:
   * ```
   * {
   *   input: {
   *     "id": "a2e22ba6-b113-268b-e14e-ad501cb19e18",
   *     "cart_item_id": "8e918d59-6a8c-4d25-9b16-5bb64722e5f0",
   *     "quantity": 1,
   *     "subscriptionIntervalInDays": 15
   *     "customizations": "[{"description": "Concave_White", "pattern_code":"286"}]"
   *   }
   * }
   * ```
   * @deprecated This is being deprecated instead please use: UpdateItemWithUniqueCustomizations
   */
  uniqueUpdateCartItem?: Maybe<Cart>;
  updateCartGift?: Maybe<Cart>;
  updateCartItem?: Maybe<Cart>;
  updateCreditCardDefault: CreditCard;
  /**
   * Add an item with unique customizations to a Cart.
   * If there are no customizations please use: AddCartItem
   *
   * mutation UpdateItemWithUniqueCustomizations ($input: UpdateItemWithUniqueCustomizationsInput!) {
   *   updateItemWithUniqueCustomizations(input: $input) {
   *     id
   *     user {
   *       id
   *     }
   *     items {
   *       id
   *       item {
   *         id
   *       }
   *       quantity
   *       subscriptionIntervalInDays
   *       customizations
   *       analytics_details
   *     }
   *     total
   *   }
   * }
   * ```
   * Variables:
   * ```
   * {
   *   input: {
   *     "item_id": "a2e22ba6-b113-268b-e14e-ad501cb19e18",
   *     "quantity": 1,
   *     "subscriptionIntervalInDays": 15
   *     "customizations": "[{"description": "Concave_White", "pattern_code":"286"}]"
   *   }
   * }
   * ```
   */
  updateItemWithUniqueCustomizations?: Maybe<Cart>;
  /**
   * Updates an order.
   *
   * Mutation
   * ```
   * mutation UpdateOrder($orderId: UUID4!, $input: UpdateOrderInput!) {
   *   updateOrder(orderId: $orderId, input: $input) {
   *     id
   *     appId
   *     requestedDeliveryDate
   *     contactInfo {
   *       email
   *       phone
   *       shippingAddress {
   *         city
   *         zip
   *       }
   *     }
   *     paymentRequest {
   *       paymentMethod
   *       isBillingEqualShipping
   *       billingAddress {
   *         city
   *         zip
   *       }
   *     }
   *   }
   * }
   * ```
   *
   * Variables
   * ```
   * {
   *   "order_id": "3965354a-260c-4fdd-a0d5-75f6efee4207",
   *   "input": {}
   * }
   * ```
   * @deprecated   Order updates should be submitted through the SubmitOrder mutation
   *
   */
  updateOrder?: Maybe<CreatedOrder>;
  updateOrderSubscription?: Maybe<OrderSubscription>;
  updateOrderSubscriptionAddress?: Maybe<OrderSubscription>;
  updateOrderSubscriptionPayment?: Maybe<OrderSubscription>;
  updateOrderSubscriptionQuantity?: Maybe<OrderSubscription>;
  updateOrderSubscriptionStatus?: Maybe<OrderSubscription>;
  updatePaymentMethodDefault: PaymentMethod;
  updateUserAddress: Address;
  updateUserAddressIsDefault: Address;
  /**
   * Updates user's first name and last name.
   *
   * Mutation
   * ```
   * mutation UpdateUserFirstLastName($input: UpdateUserFirstLastNameInput!) {
   *   updateUserFirstLastName(input: $input) {
   *     id
   *     first_name
   *     last_name
   *   }
   * }
   * ```
   *
   * Variables
   * ```
   * {
   *   "input": {
   *     "id": "UUID4",
   *     "first_name": "New"
   *     "last_name": "Updated"
   *   }
   * }
   * ```
   */
  updateUserFirstLastName?: Maybe<User>;
  /**
   * Credits an activity to a user
   * Example:
   *   ```
   *   mutation UserActivityCredit($input: ActivityCreditInput!) {
   *     userActivityCredit(input: $input) {
   *       awarded
   *     }
   *   }
   *   ```
   *
   *   ```
   *   Variables:
   *
   *   ```
   *   {
   *     "input": {
   *       "activity_id": "410241571",
   *       "activity_date": "2024-03-02T01:56:08Z",
   *       "extra_data": "{"some_key": "some_value"}"
   *     }
   *   }
   *   ```
   * @deprecated Use userActivityCreditByPepdirectActivityId instead
   */
  userActivityCredit?: Maybe<ActivityAwarded>;
  /**
   * Credits an activity to a user by the pepdirect activity id
   * Example:
   *   ```
   *   mutation UserActivityCreditByPepdirectActivityId($input: ActivityCreditByPepdirectActivityIdInput!) {
   *     userActivityCreditByPepdirectActivityId(input: $input) {
   *       awarded
   *       numPoints
   *     }
   *   }
   *   ```
   *
   *   ```
   *   Variables:
   *
   *   ```
   *   {
   *     "input": {
   *       "pepdirect_activity_id": "CompletedWorkout",
   *       "activity_date": "2024-03-02T01:56:08Z",
   *       "num_points": 500,
   *       "extra_data": "{"some_key": "some_value"}"
   *     }
   *   }
   *   ```
   */
  userActivityCreditByPepdirectActivityId?: Maybe<ActivityAwarded>;
  /**
   * mutation UserAddressVerification {
   *     userAddressVerification(
   *       input: {
   *         first_name: "",
   *         last_name: "",
   *         company: "",
   *         country_code: "",
   *         city: "",
   *         state: "",
   *         zip: "",
   *         line1: "",
   *         line2: ""
   *       }
   *     )
   *     {
   *       first_name,
   *       last_name,
   *       company,
   *       country_code,
   *       city,
   *       state,
   *       zip,
   *       line1,
   *       line2,
   *       success,
   *       errors{
   *         code,
   *         field,
   *         message,
   *         suggestion
   *       }
   *     }
   *   }
   */
  userAddressVerification?: Maybe<VerifyAddressPayload>;
  /**
   * Submits code to be redeemed for a user
   * Example:
   *   ```
   *   mutation UserCodeSubmit($input: UserCodeSubmitInput!) {
   *     userCodeSubmit(input: $input) {
   *       num_points
   *     }
   *   }
   *   ```
   *
   *   ```
   *   Variables:
   *
   *   ```
   *   {
   *     "input": {
   *       "code_value": "abc123",
   *       "campaign_id": "6546743"
   *     }
   *   }
   *   ```
   */
  userCodeSubmit?: Maybe<CodeSubmitted>;
  /**
   * mutation AddressVerification {
   *     verifyAddressForOrder(
   *       orderId: "",
   *       input: {
   *         first_name: "",
   *         last_name: "",
   *         company: "",
   *         country_code: "",
   *         city: "",
   *         state: "",
   *         zip: "",
   *         special_instructions: "",
   *         line1: "",
   *         line2: ""
   *       }
   *     )
   *     {
   *       first_name,
   *       last_name,
   *       company,
   *       country_code,
   *       city,
   *       state,
   *       zip,
   *       line1,
   *       line2,
   *       special_instructions,
   *       success,
   *       errors{
   *         code,
   *         field,
   *         message,
   *         suggestion
   *       }
   *     }
   *   }
   */
  verifyAddressForOrder?: Maybe<VerifyAddressPayload>;
};


export type RootMutationTypeAddCartItemArgs = {
  input: CartItemInput;
};


export type RootMutationTypeAddDynamicBundleArgs = {
  input: CartDynamicBundleInput;
};


export type RootMutationTypeAddExactDynamicBundleArgs = {
  input: CartExactDynamicBundleInput;
};


export type RootMutationTypeAddItemWithUniqueCustomizationsArgs = {
  input: AddItemWithUniqueCustomizationsInput;
};


export type RootMutationTypeApplyLoyaltyRewardToCartArgs = {
  input: LoyaltyRewardInput;
};


export type RootMutationTypeApplyLoyaltyRewardToCartByPepdirectRewardIdArgs = {
  input: LoyaltyRewardInputByPepdirectRewardId;
};


export type RootMutationTypeArchiveRegistrationRecordArgs = {
  id: Scalars['UUID4']['input'];
};


export type RootMutationTypeAssociateCartToUserArgs = {
  cartId: Scalars['UUID4']['input'];
};


export type RootMutationTypeCalculateOrderDiscountsArgs = {
  input: CalculateOrderDiscountsInput;
};


export type RootMutationTypeCalculateOrderTaxesArgs = {
  cartId?: InputMaybe<Scalars['UUID4']['input']>;
  contactInfo?: InputMaybe<ContactInfoInput>;
  invoiceAddressId?: InputMaybe<Scalars['UUID4']['input']>;
  orderId?: InputMaybe<Scalars['UUID4']['input']>;
  paymentRequest?: InputMaybe<PaymentRequestInput>;
  price?: InputMaybe<PriceInput>;
};


export type RootMutationTypeCancelOrderSubscriptionArgs = {
  input?: InputMaybe<CancelOrderSubscriptionInput>;
};


export type RootMutationTypeChangeUserPasswordArgs = {
  input: ChangeUserPasswordInput;
};


export type RootMutationTypeCreateAccountAndRegistrationRecordArgs = {
  registrationRecordInput: CreateRegistrationRecordInput;
  userInput: SignupUserInput;
};


export type RootMutationTypeCreateOrderArgs = {
  cartId: Scalars['String']['input'];
  input?: InputMaybe<OrderInput>;
};


export type RootMutationTypeCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};


export type RootMutationTypeCreateRegistrationRecordArgs = {
  input: CreateRegistrationRecordInput;
};


export type RootMutationTypeCreateTemporaryCartFromOrderArgs = {
  orderId: Scalars['UUID4']['input'];
};


export type RootMutationTypeCreateUserAddressArgs = {
  input: UserAddressInput;
};


export type RootMutationTypeDeleteCreditCardArgs = {
  input: DeleteCreditCardInput;
};


export type RootMutationTypeDeletePaymentMethodArgs = {
  input: DeletePaymentMethodInput;
};


export type RootMutationTypeDeleteUserAddressArgs = {
  id: Scalars['UUID4']['input'];
};


export type RootMutationTypeEmailNewsletterSignupArgs = {
  input: EmailNewsletterSignupInput;
};


export type RootMutationTypeEngagementSignupArgs = {
  input: EngagementSignupInput;
};


export type RootMutationTypeLoginArgs = {
  input: LoginInput;
};


export type RootMutationTypeLoginUserArgs = {
  input: LoginUserInput;
};


export type RootMutationTypeLoyaltyPurchaseByPepdirectRewardIdArgs = {
  input: LoyaltyPurchaseInput;
};


export type RootMutationTypeLoyaltyUpdateProfileArgs = {
  input: UserProfileInput;
};


export type RootMutationTypeMergeCartsArgs = {
  destCartId: Scalars['UUID4']['input'];
  srcCartId: Scalars['UUID4']['input'];
};


export type RootMutationTypePartnerInquiryArgs = {
  input: PartnerInquiryInput;
};


export type RootMutationTypePersistTemporaryCartArgs = {
  srcCartId: Scalars['UUID4']['input'];
};


export type RootMutationTypeRedeemRewardArgs = {
  input: RedeemRewardInput;
};


export type RootMutationTypeRedeemRewardByPepdirectRewardIdArgs = {
  input: RedeemRewardByPepdirectRewardIdInput;
};


export type RootMutationTypeRegisterAiDesignArgs = {
  colors?: InputMaybe<Array<AiDesignColorInput>>;
  featuredWeight?: InputMaybe<Scalars['Int']['input']>;
  generatedByTenant?: InputMaybe<Scalars['Boolean']['input']>;
  imageUrls: Scalars['Json']['input'];
  itemId: Scalars['UUID4']['input'];
  prompAiEnhanced?: InputMaybe<Scalars['String']['input']>;
  promptUser?: InputMaybe<Scalars['String']['input']>;
  traits?: InputMaybe<Array<AiDesignTraitInput>>;
};


export type RootMutationTypeRemoveDynamicBundleArgs = {
  input: CartRemoveDynamicBundleInput;
};


export type RootMutationTypeRequestPasswordResetForUserArgs = {
  input: RequestPasswordResetForUserInput;
};


export type RootMutationTypeRequestUserPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type RootMutationTypeResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


export type RootMutationTypeSendSspEmailArgs = {
  input: EmailSspInput;
};


export type RootMutationTypeSignupUserArgs = {
  input: SignupUserInput;
};


export type RootMutationTypeSkipOrderSubscriptionArgs = {
  id: Scalars['UUID4']['input'];
};


export type RootMutationTypeSubmitOrderArgs = {
  input?: InputMaybe<SubmitOrderInput>;
  orderId: Scalars['String']['input'];
};


export type RootMutationTypeSubmitSurveyArgs = {
  input: SurveyResponseInput;
};


export type RootMutationTypeUniqueAddCartItemArgs = {
  input: CartItemInput;
};


export type RootMutationTypeUniqueUpdateCartItemArgs = {
  input: UniqueCartItemInput;
};


export type RootMutationTypeUpdateCartGiftArgs = {
  input: IsGiftInput;
};


export type RootMutationTypeUpdateCartItemArgs = {
  input: CartItemInput;
};


export type RootMutationTypeUpdateCreditCardDefaultArgs = {
  input: UpdateCreditCardDefaultInput;
};


export type RootMutationTypeUpdateItemWithUniqueCustomizationsArgs = {
  input: UpdateItemWithUniqueCustomizationsInput;
};


export type RootMutationTypeUpdateOrderArgs = {
  input: UpdateOrderInput;
  orderId: Scalars['UUID4']['input'];
};


export type RootMutationTypeUpdateOrderSubscriptionArgs = {
  input: UpdateOrderSubscriptionInput;
};


export type RootMutationTypeUpdateOrderSubscriptionAddressArgs = {
  input: UpdateOrderSubscriptionAddressInput;
};


export type RootMutationTypeUpdateOrderSubscriptionPaymentArgs = {
  input: UpdateOrderSubscriptionPaymentInput;
};


export type RootMutationTypeUpdateOrderSubscriptionQuantityArgs = {
  input: UpdateOrderSubscriptionQuantityInput;
};


export type RootMutationTypeUpdateOrderSubscriptionStatusArgs = {
  input: UpdateOrderSubscriptionStatusInput;
};


export type RootMutationTypeUpdatePaymentMethodDefaultArgs = {
  input: UpdatePaymentMethodDefaultInput;
};


export type RootMutationTypeUpdateUserAddressArgs = {
  id: Scalars['UUID4']['input'];
  input: UserAddressInput;
};


export type RootMutationTypeUpdateUserAddressIsDefaultArgs = {
  id: Scalars['UUID4']['input'];
  input: UserAddressIsDefaultInput;
};


export type RootMutationTypeUpdateUserFirstLastNameArgs = {
  input: UpdateUserFirstLastNameInput;
};


export type RootMutationTypeUserActivityCreditArgs = {
  input: ActivityCreditInput;
};


export type RootMutationTypeUserActivityCreditByPepdirectActivityIdArgs = {
  input: ActivityCreditByPepdirectActivityIdInput;
};


export type RootMutationTypeUserAddressVerificationArgs = {
  input: VerifyAddressInput;
};


export type RootMutationTypeUserCodeSubmitArgs = {
  input: UserCodeSubmitInput;
};


export type RootMutationTypeVerifyAddressForOrderArgs = {
  input: VerifyAddressInput;
  orderId: Scalars['String']['input'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /**
   * Gets the currently active account
   * Example:
   *   ```
   *   query {
   *     activeAccount {
   *       type
   *       credits {
   *         status
   *         type
   *         availableAmount
   *         spentAmount
   *         activeFrom
   *         activeUntil
   *       }
   *     }
   *   }
   *   ```
   */
  activeAccount?: Maybe<Account>;
  aiDesigns?: Maybe<AiDesignResult>;
  /** Retrieves a cart given an id */
  cart?: Maybe<Cart>;
  /** Retrieves a cart given a hashed email for Salesforce */
  cartRecovery?: Maybe<Cart>;
  /**
   * Gets the currently logged in user
   * Example:
   *   ```
   *   query {
   *     currentUser {
   *       email
   *       firstName
   *       lastName
   *       creditCards {
   *         cardholderName
   *         billingAddress{
   *           firstName
   *           lastName
   *         }
   *       }
   *       addresses{
   *         line1
   *         line2
   *       }
   *     }
   *   }
   *   ```
   */
  currentUser?: Maybe<User>;
  /**
   * Retrieve a Dynamic Bundle, its Components, and all Items associated.
   * Example:
   * ```
   * query DynamicBundle($id: UUID4!) {
   *   dynamicBundle(id: $id) {
   *     id
   *     name
   *     tag
   *     min_retail_price
   *     components {
   *       id
   *       name
   *       qty_type
   *       required_qty
   *       discount {
   *         amount
   *         type
   *       }
   *       items {
   *         id
   *         gtin
   *         is_dairy_free
   *         is_gluten_free
   *       }
   *     }
   *   }
   * }
   *
   * {"id": "bundle_id"}
   * ```
   */
  dynamicBundle?: Maybe<DynamicBundle>;
  /**
   * Retrieve a Dynamic Bundle, its Components, and all Items associated.
   * Example:
   * ```
   * query DynamicBundleByTag($tag: String!) {
   *   dynamicBundle(tag: $tag) {
   *     id
   *     name
   *     tag
   *     min_retail_price
   *     components {
   *       id
   *       name
   *       required_qty
   *       items {
   *         id
   *         gtin
   *         is_dairy_free
   *         is_gluten_free
   *       }
   *     }
   *   }
   * }
   *
   * {"id": "bundle_id"}
   * ```
   */
  dynamicBundleByTag?: Maybe<DynamicBundle>;
  /**
   * Retrieve all Dynamic Bundles and their Components.
   * Example:
   * ```
   * query DynamicBundles {
   *   dynamicBundles {
   *     id
   *     name
   *     tag
   *     components {
   *       id
   *       name
   *       required_qty
   *     }
   *   }
   * }
   * ```
   */
  dynamicBundles?: Maybe<Array<Maybe<DynamicBundle>>>;
  /**
   * Retrieve all Dynamic Bundles that contain a given gtin.
   * Example:
   * ```
   * query DynamicBundlesWithGtin($gtin: String!) {
   *   dynamicBundlesWithGtin(gtin: $gtin) {
   *     id
   *     name
   *     tag
   *     components {
   *       id
   *       name
   *       required_qty
   *     }
   *   }
   * }
   *
   * query DynamicBundlesWithGtin($gtin: String!, primary: boolean) {
   *   dynamicBundlesWithGtin(gtin: $gtin, primary: true) {
   *     id
   *     name
   *     tag
   *     components {
   *       id
   *       name
   *       required_qty
   *     }
   *   }
   * }
   * ```
   */
  dynamicBundlesWithGtin?: Maybe<Array<Maybe<DynamicBundle>>>;
  /** Lookup all Feature Flags. If a `User` is logged in, the Feature Flags will reflect `User` specific Feature Flags. */
  featureFlags: Array<FeatureFlag>;
  /**
   * Get address suggestions for easy user input
   * Example
   * ```
   * query FindAddress($input: FindAddressInput!) {
   *   findAddress(input: $input) {
   *     items {
   *       id
   *       value
   *       description
   *       type
   *       highlight
   *     }
   *   }
   * }
   *
   * {"input": {"text": "3110 Pepsi road", "limit": "10"}}
   * ```
   */
  findAddress?: Maybe<FoundItems>;
  /**
   * Uses internal machine learning endpoint to suggest product
   *   recommendations based on the items in the cart
   *
   *   Example:
   *   ```
   *   query findRecommendations($cartId: UUID4!, $numberRequested: Int!) {
   *     findRecommendations(cartId: $cartId, numberRequested: $numberRequested) {
   *       id
   *       gtin
   *       title
   *       imgUrl
   *     }
   *   }
   *   ```
   *   Variables:
   *
   *   ```
   *   {"cartId": "63a4ef4e-1cac-409d-b40c-38db5f064cd3",
   *   "numberRequested": 3}
   *   ```
   */
  findRecommendations?: Maybe<Array<Maybe<Item>>>;
  /**
   * Gets details about an activity
   * Example:
   *   ```
   *   query GetActivity($activityId: String!) {
   *     getActivity(activity_id: $activityId) {
   *       activityId
   *       extraData
   *       internalName
   *       displayName
   *       numPoints
   *       imgUrl
   *       freqCap
   *       freqPeriodId
   *       freqPeriodName
   *     }
   *   }
   *   ```
   */
  getActivity?: Maybe<UserActivity>;
  /**
   * Gets activities available for the current tenant from the loyalty program. Most useful when the user is not logged in.
   * Example:
   * ```
   *   query {
   *     getAvailableActivitiesForTenant {
   *       activityId
   *       internalName
   *       displayName
   *       description
   *       numPoints
   *       imgUrl
   *       dateStart
   *       dateEnd
   *       extraData
   *       freqCap
   *       freqPeriodId
   *       freqPeriodName
   *     }
   *   }
   * ```
   */
  getAvailableActivitiesForTenant?: Maybe<Array<Maybe<Activity>>>;
  /**
   * Gets activities available for the given user from the loyalty program
   * Example:
   * ```
   *   query {
   *     getAvailableActivitiesForUser {
   *       activityId
   *       internalName
   *       displayName
   *       description
   *       numPoints
   *       imgUrl
   *       dateStart
   *       dateEnd
   *       extraData
   *       freqCap
   *       freqPeriodId
   *       freqPeriodName
   *     }
   *   }
   * ```
   */
  getAvailableActivitiesForUser?: Maybe<Array<Maybe<Activity>>>;
  /**
   * Return a list of items, paginated
   * Example:
   *   ```
   *   query getItems {
   *     getItems(
   *       pagination: {
   *         page: 1
   *         limit: 10
   *       }) {
   *       items {
   *         id
   *       }
   *     }
   *   }
   *   ```
   * @deprecated Please use `items` going forward.
   */
  getItems?: Maybe<ItemsPayload>;
  /**
   * Gets user profile from the loyalty program
   * Example:
   *   ```
   *   query {
   *     getLoyaltyProfile {
   *       firstName
   *       lastName
   *       totalPoints
   *       redeemablePoints
   *     }
   *   }
   *   ```
   */
  getLoyaltyProfile?: Maybe<UserProfile>;
  /**
   * Gets list of rewards for the loyalty program
   * Example:
   *   ```
   *   query {
   *     getLoyaltyRewards {
   *       categoryId
   *       color
   *       dateEnd
   *       dateStart
   *       description
   *       extraData
   *       freqCap
   *       freqPeriodId
   *       freqPeriodName
   *       groupId
   *       id
   *       image
   *       isEnabled
   *       maxPerUser
   *       numPoints
   *       quantity
   *       referenceId
   *       size
   *       title
   *     }
   *   }
   *   ```
   */
  getLoyaltyRewards?: Maybe<Array<Maybe<Reward>>>;
  /**
   * Gets potential points for a given items list.
   * Prices are in cents, have quantity included and discounts applied.
   * For example, for calculating points of 2 of an item that costs $25 (after applying discounts),
   * the price is 5000 and the quantity is 2.
   * Example:
   *   ```
   *   query GetPotentialPoints($input: PotentialPointsInput!) {
   *     getPotentialPoints(input: $input) {
   *       totalPointsAwarded
   *     }
   *   }
   *   ```
   *
   *   ```
   *   Variables:
   *
   *   ```
   *   {
   *     "input": {
   *       "items": [
   *         {
   *           "upc": "123456789",
   *           "quantity": 1,
   *           "price": 100
   *         }
   *       ]
   *     }
   *   }
   *   ```
   */
  getPotentialPoints?: Maybe<PotentialPoints>;
  /**
   * Gets details about an activity available for the given user from the loyalty program
   * Example:
   *   ```
   *   query GetUserActivity($activityId: String!) {
   *     getUserActivity(activity_id: $activityId) {
   *       activityId
   *       extraData
   *       internalName
   *       displayName
   *       numPoints
   *       imgUrl
   *       freqCap
   *       freqPeriodId
   *       freqPeriodName
   *       userNumCompletions
   *     }
   *   }
   *   ```
   */
  getUserActivity?: Maybe<UserActivity>;
  /**
   * Gets user's activity history from the loyalty program
   * Example:
   *   ```
   *   query {
   *     getUserActivityHistory {
   *       activities {
   *         activity_id
   *         extra_data
   *         internal_name
   *         display_name
   *         num_points
   *         img_url
   *         date
   *         freq_cap
   *         freq_period_id
   *         freq_period_name
   *       }
   *       redemptions {
   *         activity_id
   *         extra_data
   *         internal_name
   *         display_name
   *         num_points
   *         img_url
   *         date
   *         freq_cap
   *         freq_period_id
   *         freq_period_name
   *       }
   *     }
   *   }
   *   ```
   */
  getUserActivityHistory?: Maybe<UserActivityHistory>;
  /**
   * Gets list of rewards for a specific user in the loyalty program.
   *
   * For pagination input, the maximum limit of items per page is 10.
   *
   * Example:
   *   ```
   *   query {
   *     getUserLoyaltyRewards {
   *       categoryId
   *       color
   *       dateEnd
   *       dateStart
   *       description
   *       extraData
   *       freqCap
   *       freqPeriodId
   *       freqPeriodName
   *       groupId
   *       id
   *       image
   *       isEnabled
   *       maxPerUser
   *       numPoints
   *       quantity
   *       referenceId
   *       size
   *       title
   *     }
   *   }
   *   ```
   */
  getUserLoyaltyRewards?: Maybe<Array<Maybe<Reward>>>;
  /**
   * Gets user's receipt history from the loyalty program
   * Example:
   *   ```
   *   query {
   *     getUserReceiptHistory (pagination: {page: 1, limit: 2}) {
   *       pagination
   *       {
   *         total
   *         pages
   *         next_page_link
   *         prev_page_link
   *         has_next_page
   *         has_prev_page
   *       }
   *       receipts
   *       {
   *         dateSubmitted
   *         fileId
   *         fileName
   *         fileUrl
   *         id
   *         scanResult
   *         scanResultText
   *       }
   *     }
   *   }
   *   ```
   */
  getUserReceiptHistory?: Maybe<ReceiptInfoHistory>;
  /**
   * Gets a list of historical rewards the the loyalty member has redeemed.
   *
   * Example:
   *   ```
   *   query {
   *     getUserRedemptionHistory (pagination: {page: 1, limit: 2}) {
   *       pagination
   *       {
   *         total
   *         pages
   *         next_page_link
   *         prev_page_link
   *         has_next_page
   *         has_prev_page
   *       },
   *       redemptions
   *       {
   *         categoryId
   *         dateCreated
   *         description
   *         endingBalance
   *         extraData
   *         groupId
   *         image
   *         rewardId
   *         rewardTitle
   *         totalPointsRedeemed
   *       }
   *     }
   *   }
   *   ```
   */
  getUserRedemptionHistory?: Maybe<RedemptionInfoHistory>;
  /**
   * Returns an `Item` for the given `GTIN`.
   *
   * Example
   * ```
   * query ItemByGtin($gtin: String!) {
   *   itemByGtin(gtin: $gtin) {
   *     id
   *     description
   *     title
   *   }
   * }
   *
   * {"gtin": "000111222333444555}
   * ```
   */
  itemByGtin?: Maybe<Item>;
  /**
   * Return the item by its id
   * Example:
   *   ```
   *   query itemById($id: String!) {
   *     itemById(id: $id) {
   *       id
   *       description
   *     }
   *   }
   *  {"id": "id"}
   *   ```
   */
  itemById?: Maybe<Item>;
  /**
   * Return the item by its slug
   * Example:
   *   ```
   *   query itemBySlug($slug: String!) {
   *     itemBySlug(slug: $slug) {
   *       id
   *       description
   *     }
   *   }
   *  {"slug": "slug"}
   *   ```
   */
  itemBySlug?: Maybe<Item>;
  /**
   * Return a list of items, paginated
   * Example:
   *   ```
   *   query getItems {
   *     getItems(
   *       pagination: {
   *         page: 1
   *         limit: 10
   *       }) {
   *       items {
   *         id
   *       }
   *     }
   *   }
   *   ```
   */
  items?: Maybe<ItemsPayload>;
  /**
   * Return a list of items, paginated
   * Example:
   *   ```
   *   query getItems {
   *     getItems(
   *       pagination: {
   *         page: 1
   *         limit: 10
   *       }) {
   *       items {
   *         id
   *       }
   *     }
   *   }
   *   ```
   */
  itemsSearch?: Maybe<ItemsPayload>;
  localization?: Maybe<Localization>;
  modules: Array<Module>;
  /**
   * Return a single order filtered by id
   * Example:
   *   ```
   *   query OrderQueries {
   *     order(order_id: order_uuid) {
   *       id
   *     }
   *   }
   *   ```
   */
  order?: Maybe<Order>;
  /**
   * query getOrderSubscriptionForUser($id: UUID4!) {
   *   orderSubscription(id: $id) {
   *     id
   *     title
   *     intervalInDays
   *     orderSubscriptionItems {
   *       priceItem {
   *         basePrice
   *         id
   *       }
   *     }
   *   }
   * }
   */
  orderSubscription?: Maybe<OrderSubscription>;
  /**
   * query getAllOrderSubscriptionsForUser {
   *   orderSubscriptions {
   *     orderSubscriptions {
   *       id
   *       title
   *       intervalInDays
   *       orderSubscriptionItems {
   *         priceItem {
   *           basePrice
   *           id
   *         }
   *       }
   *     }
   *   }
   * }
   */
  orderSubscriptions?: Maybe<OrderSubscriptionsPayload>;
  /**
   * Returns a list of items forbidden from being sold in the given zip code.
   * If a list of upcs is given, it will check only those items, otherwise will check all items in the store.
   * Example:
   *   ```
   *   query RestrictedItemsByZipCode {
   *     restrictedItemsByZipCode(
   *       zip: "94545",
   *       upcs: ["2141212", "2142145432"]) {
   *       restrictedItems {
   *         id
   *       }
   *     }
   *   }
   *   ```
   */
  restrictedItemsByZipCode?: Maybe<RestrictedItemsByZipCodePayload>;
  /**
   * Retrieve an address with an id.
   *
   * Example
   * ```
   * query RetrieveAddress($id: String!) {
   *   retrieveAddress(id: $id) {
   *     items {
   *       id
   *       line1
   *       line2
   *       city
   *       state
   *       zip
   *       country
   *     }
   *   }
   * }
   *
   * {"id": "id_12345678"}
   * ```
   */
  retrieveAddress?: Maybe<RetrievedItems>;
  /**
   * Searchs and displays an application's list of
   * discounts which meet certain requirements.
   *
   * typeDependentValue can be one of the following values:
   * - vendor_id
   * - item_id
   * - app_id
   *
   * type can be one of the following values:
   * - BRAND
   * - PRODUCT
   * - VENDOR
   * - ITEM_SET
   *
   * itemSet is a list of item ids to match against if the campaign is an itemSet campaign.
   *
   * behaviour can be one of the following
   * - BASIC
   * - TIERED
   * - BOGO
   *
   * Query
   *
   *   ```
   *   query SearchDiscounts($input: SearchDiscountsInput!) {
   *     searchDiscounts(input: $input) {
   *       discounts{
   *         id
   *         activeFrom
   *         activeUntil
   *         amount
   *         appId
   *         isPercent
   *         isPromoCodeRequired
   *         limit
   *         promoCode
   *         type
   *         typeDependentValue
   *         usage
   *       }
   *     }
   *   }
   *   ```
   *
   *   Input Examples
   *
   *   Finding a basic item specific discount with a promo code
   *   ```
   *   {
   *     input: {
   *       "type": "ITEM",
   *       "typeDependentValue": "a2e22ba6-b113-268b-e14e-ad501cb19e18",
   *       "promoCode": "PROMOCODE",
   *       "behaviour": "BASIC"
   *     }
   *   }
   *   ```
   *   Finding a tiered discount that includes a specific item in its itemSet
   *   ```
   *   {
   *     input: {
   *       "type": "ITEM_SET",
   *       "behaviour": "TIERED",
   *       "itemSet": [""a2e22ba6-b113-268b-e14e-ad501cb19e18""]
   *     }
   *   }
   *   ```
   */
  searchDiscounts?: Maybe<Discounts>;
  /**
   * Returns a `Story` with the given `id`.
   *
   * Example:
   * ```
   * query StoryById($id: UUID4!) {
   *   story: storyById(id: $id) {
   *     app_id
   *     body
   *     cta1
   *     cta2
   *     cta3
   *     id
   *     insertedAt
   *     moduleType
   *     slug
   *     slugHash
   *     tags
   *     title1
   *     title2
   *     title3
   *     updatedAt
   *   }
   * }
   * ```
   */
  story?: Maybe<Story>;
  /**
   * Returns a `Story` with the given `id`.
   *
   * Example:
   * ```
   * query StoryById($id: UUID4!) {
   *   story: storyById(id: $id) {
   *     app_id
   *     body
   *     cta1
   *     cta2
   *     cta3
   *     id
   *     insertedAt
   *     moduleType
   *     slug
   *     slugHash
   *     tags
   *     title1
   *     title2
   *     title3
   *     updatedAt
   *   }
   * }
   * ```
   * @deprecated Use "story" query with ID parameter in favor of "storyById"
   */
  storyById?: Maybe<Story>;
  /**
   * Returns a `Story` with the given `slug`.
   *
   * Example:
   * ```
   * query StoryBySlug($slug: String!) {
   *   story: storyBySlug(slug: $slug) {
   *     app_id
   *     body
   *     cta1
   *     cta2
   *     cta3
   *     id
   *     insertedAt
   *     moduleType
   *     slug
   *     slugHash
   *     tags
   *     title1
   *     title2
   *     title3
   *     updatedAt
   *   }
   * }
   * ```
   * @deprecated Use "story" query with ID parameter in favor of "storyBySlug"
   */
  storyBySlug?: Maybe<Story>;
  /**
   * Return a single submitted order filtered by id
   * Example:
   *   ```
   *   query SubmittedOrderQueries {
   *     submitted_order(order_id: order_uuid) {
   *       id
   *     }
   *   }
   *   ```
   */
  submittedOrder?: Maybe<SubmittedOrder>;
  /**
   * Return a list of orders, paginated, for the current user
   * Example:
   *   ```
   *   query SubmittedOrderQueries {
   *     submitted_orders(
   *       pagination: {
   *         page: 1
   *         limit: 10
   *       }) {
   *       orders_count
   *       submitted_orders {
   *       id
   *       }
   *     }
   *   }
   *   ```
   */
  submittedOrders: SubmittedOrderPayload;
  /**
   * Gets details about a Survey for an authenticated user from the loyalty program by the survey pepdirect_activity_id
   * Example:
   *   ```
   *   query SurveyDetails($pepdirectActivityId: String!) {
   *     surveyDetails(pepdirect_activity_id: $pepdirectActivityId) {
   *       activityId
   *       activityTags
   *       dateEnd
   *       dateStart
   *       description
   *       displayPoints
   *       extraData
   *       imageUrl
   *       isEnabled
   *       numPoints
   *       otherLabel
   *       questions {
   *         allowOther
   *         answerOptions
   *         displayOrder
   *         id
   *         questionType
   *         required
   *         value
   *       }
   *       singleSubmit
   *       title
   *     }
   *   }
   *   ```
   */
  surveyDetails?: Maybe<Survey>;
  /**
   * Gets the responses from a survey for an authenticated user from the loyalty program by the survey pepdirect_activity_id
   * Example:
   *   ```
   *   query SurveyResults($pepdirectActivityId: String!) {
   *     surveyResults(pepdirect_activity_id: $pepdirectActivityId) {
   *       surveyResponse {
   *         other
   *         questionId
   *         selectedAnswers
   *         textAnswer
   *       }
   *     }
   *   }
   *   ```
   */
  surveyResults?: Maybe<SurveyResponse>;
  /**
   * Return the `Tenant` associated with the domain of the site making the request
   * Example:
   *   ```
   *   query {
   *     tenant {
   *       appId
   *       domain
   *       fallbackUrl
   *     }
   *   }
   *   ```
   */
  tenant?: Maybe<Tenant>;
  /**
   * Validates if the given password meets the minimum complexity requirements.
   *
   * Example:
   *   ```
   *   query validatePassword($password: String!) {
   *     validatePassword(password: $password)
   *   }
   *   ```
   *   Variables:
   *
   *   ```
   *   {"password": "$123ASDsarasa"}
   *   ```
   */
  validatePassword: Array<PasswordRequirement>;
  /**
   * Returns a list of items forbidden from being sold in the given zip code.
   * If a list of upcs is given, it will check only those items, otherwise will check all items in the store.
   * Example:
   *   ```
   *   query validateZipcode {
   *     validateZipcode(
   *       zip: "94545",
   *       upcs: ["2141212", "2142145432"]) {
   *       restrictedItems {
   *         id
   *       }
   *     }
   *   }
   *   ```
   * @deprecated Please use `restrictedItemsByZipCode` going forward.
   */
  validateZipcode?: Maybe<ValidateZipcodePayload>;
  /**
   * Deprecated in favor or `tenant`.
   *
   * Return the VendorConfig associated with the domain of the site making the request
   * Example:
   *   ```
   *   query {
   *     vendorConfig {
   *       appId
   *       domain
   *       fallbackUrl
   *     }
   *   }
   *   ```
   * @deprecated This Query has been deprecated in favor of `tenant`.
   *
   *
   */
  vendorConfig?: Maybe<Tenant>;
};


export type RootQueryTypeAiDesignsArgs = {
  filters?: InputMaybe<AiDesignFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sorting?: InputMaybe<AiDesignSortingInput>;
};


export type RootQueryTypeCartArgs = {
  id: Scalars['UUID4']['input'];
};


export type RootQueryTypeCartRecoveryArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeDynamicBundleArgs = {
  id: Scalars['UUID4']['input'];
};


export type RootQueryTypeDynamicBundleByTagArgs = {
  tag: Scalars['String']['input'];
};


export type RootQueryTypeDynamicBundlesWithGtinArgs = {
  gtin: Scalars['String']['input'];
  primary?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RootQueryTypeFindAddressArgs = {
  input: FindAddressInput;
};


export type RootQueryTypeFindRecommendationsArgs = {
  cartId: Scalars['UUID4']['input'];
  numberRequested: Scalars['Int']['input'];
};


export type RootQueryTypeGetActivityArgs = {
  activityId?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeGetItemsArgs = {
  brands?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  isOutOfStock?: InputMaybe<Scalars['Boolean']['input']>;
  onMarketplace?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storyId?: InputMaybe<Scalars['String']['input']>;
  upcs?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type RootQueryTypeGetPotentialPointsArgs = {
  input: PotentialPointsInput;
};


export type RootQueryTypeGetUserActivityArgs = {
  activityId?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeGetUserActivityHistoryArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type RootQueryTypeGetUserLoyaltyRewardsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type RootQueryTypeGetUserReceiptHistoryArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type RootQueryTypeGetUserRedemptionHistoryArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type RootQueryTypeItemByGtinArgs = {
  gtin: Scalars['String']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RootQueryTypeItemByIdArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeItemBySlugArgs = {
  brands?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  isOutOfStock?: InputMaybe<Scalars['Boolean']['input']>;
  onMarketplace?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  storyId?: InputMaybe<Scalars['String']['input']>;
  upcs?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type RootQueryTypeItemsArgs = {
  brands?: InputMaybe<Array<Scalars['String']['input']>>;
  gtins?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  isOutOfStock?: InputMaybe<Scalars['Boolean']['input']>;
  onMarketplace?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storyId?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeItemsSearchArgs = {
  pagination?: InputMaybe<PaginationInput>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeOrderArgs = {
  orderId: Scalars['UUID4']['input'];
};


export type RootQueryTypeOrderSubscriptionArgs = {
  id: Scalars['UUID4']['input'];
};


export type RootQueryTypeRestrictedItemsByZipCodeArgs = {
  upcs?: InputMaybe<Array<Scalars['String']['input']>>;
  zip: Scalars['String']['input'];
};


export type RootQueryTypeRetrieveAddressArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeSearchDiscountsArgs = {
  input: SearchDiscountsInput;
};


export type RootQueryTypeStoryArgs = {
  id: Scalars['UUID4']['input'];
};


export type RootQueryTypeStoryByIdArgs = {
  id: Scalars['UUID4']['input'];
};


export type RootQueryTypeStoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type RootQueryTypeSubmittedOrderArgs = {
  orderId: Scalars['UUID4']['input'];
};


export type RootQueryTypeSubmittedOrdersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type RootQueryTypeSurveyDetailsArgs = {
  pepdirectActivityId?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeSurveyResultsArgs = {
  pepdirectActivityId?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeValidatePasswordArgs = {
  password: Scalars['String']['input'];
};


export type RootQueryTypeValidateZipcodeArgs = {
  upcs?: InputMaybe<Array<Scalars['String']['input']>>;
  zip: Scalars['String']['input'];
};

export type SapLink = {
  __typename?: 'SapLink';
  activeCustomerIds?: Maybe<Array<Scalars['String']['output']>>;
  customerIds?: Maybe<Array<Scalars['String']['output']>>;
  primaryCustomerId?: Maybe<Scalars['String']['output']>;
  propertyId?: Maybe<Scalars['String']['output']>;
};

export type SearchDiscountsInput = {
  behaviour?: InputMaybe<BehaviourEnum>;
  itemSet?: InputMaybe<Array<Scalars['String']['input']>>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<DiscountType>;
  typeDependentValue?: InputMaybe<Scalars['UUID4']['input']>;
};

export type SetupIntent = {
  __typename?: 'SetupIntent';
  clientSecret: Scalars['String']['output'];
};

export type ShippingConfig = {
  __typename?: 'ShippingConfig';
  fixedFeeShipping?: Maybe<Scalars['Int']['output']>;
  freeShippingThreshold?: Maybe<Scalars['Int']['output']>;
  maxDeliveryWindowInDays?: Maybe<Scalars['Int']['output']>;
};

export type ShoppingBagConfig = {
  __typename?: 'ShoppingBagConfig';
  availableSubscriptionIntervalsInDays: Array<Scalars['Int']['output']>;
  maxAmountForSelect: Scalars['Int']['output'];
  minimumPurchaseAmount: Scalars['Int']['output'];
  minimumPurchaseQty: Scalars['Int']['output'];
  orderSubscriptionsEnabled: Scalars['Boolean']['output'];
  subscriptionIntervalsInDays: Array<Scalars['Int']['output']>;
};

export enum SignupChannelType {
  /** Android device */
  Android = 'ANDROID',
  /** iOS device */
  Ios = 'IOS',
  NotSet = 'NOT_SET',
  /** Web platform */
  Web = 'WEB'
}

export type SignupUserInput = {
  activationCode?: InputMaybe<Scalars['String']['input']>;
  activationCodeRequired?: InputMaybe<Scalars['Boolean']['input']>;
  botProtectionToken?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<SignupChannelType>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email: Scalars['String']['input'];
  emailOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  /** this field will contain fields specific for engagement implementations */
  engagementCustomData?: InputMaybe<Scalars['Json']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  loyaltyReferralCode?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type SmsInput = {
  emailHash: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
};

export type SmsInputLoggedUser = {
  phoneNumber: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
};

export enum SortableFields {
  FeaturedWeight = 'FEATURED_WEIGHT',
  Gtin = 'GTIN',
  InsertedAt = 'INSERTED_AT'
}

export enum SortableMethods {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** identifies the front end source of incoming data */
export enum SourceType {
  Default = 'DEFAULT',
  Footer = 'FOOTER'
}

export enum SourceTypes {
  /** All designs regardless of source */
  All = 'ALL',
  /** Designs created by users other than yourself, but not by the tenant */
  Others = 'OTHERS',
  /** Designs created by the requesting user */
  Self = 'SELF',
  /** Designs created by the tenant and marked and 'generatedByTenant' */
  Tenant = 'TENANT'
}

export type StatesConfig = {
  __typename?: 'StatesConfig';
  countryId: Scalars['String']['output'];
  statesAllowed: Array<AllowedState>;
};

export enum StatusLabels {
  /** Canceled */
  Canceled = 'CANCELED',
  /** Complete */
  Complete = 'COMPLETE',
  /** NoChange */
  NoChange = 'NO_CHANGE',
  /** Unknown */
  Unknown = 'UNKNOWN'
}

export enum StatusType {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED'
}

export type StockNotificationInput = {
  email: Scalars['String']['input'];
  gtin: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
};

export type Story = {
  __typename?: 'Story';
  appId?: Maybe<Scalars['ID']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  cta1?: Maybe<Scalars['String']['output']>;
  cta2?: Maybe<Scalars['String']['output']>;
  cta3?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID4']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<Maybe<Item>>>;
  module?: Maybe<Module>;
  moduleType?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugHash?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title1?: Maybe<Scalars['String']['output']>;
  title2?: Maybe<Scalars['String']['output']>;
  title3?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubmitOrderInput = {
  contactInfo: ContactInfoInput;
  /** Field size should not exceed 25 characters */
  customerPo?: InputMaybe<Scalars['String']['input']>;
  gifteeEmail?: InputMaybe<Scalars['String']['input']>;
  gifteeMessage?: InputMaybe<Scalars['String']['input']>;
  giftorName?: InputMaybe<Scalars['String']['input']>;
  invoiceAddressId?: InputMaybe<Scalars['UUID4']['input']>;
  isGift?: InputMaybe<Scalars['Boolean']['input']>;
  paymentRequest: PaymentRequestInput;
  price: PriceInput;
  requestedDeliveryDate?: InputMaybe<Scalars['Date']['input']>;
};

export type SubmittedOrder = {
  __typename?: 'SubmittedOrder';
  appId?: Maybe<Scalars['UUID4']['output']>;
  cart?: Maybe<Cart>;
  cartId?: Maybe<Scalars['UUID4']['output']>;
  /**
   * Composite Order Ids will be in the format `customer_po-internal_order_id`. If
   * the customer PO field is null, it'll just be the `internal_order_id`
   * @deprecated The display_name field now represents the user visible order identifier/label
   * which is either explicitly set in the record or computed via the composite
   * order id logic. This obviates the need for the composite_id field.
   *
   */
  compositeId?: Maybe<Scalars['String']['output']>;
  contactInfo: ContactInfo;
  createdOrderSubscriptions: Array<OrderSubscription>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  /** User's own internal id for the order */
  customerPo?: Maybe<Scalars['String']['output']>;
  /**
   * The display name represents the user visible order label which identifies
   * the order to an end-user. This is either explicitly set in the
   * display_name_override column on the order or is computed as a composite of
   * the purchase order id (if any) and the internal order id.
   */
  displayName?: Maybe<Scalars['String']['output']>;
  /**
   * @deprecated The concept of internal/external order ids is
   * being removed and this will be replaced by a
   * single field.
   *
   */
  externalOrderId?: Maybe<Scalars['String']['output']>;
  fulfillmentSystemOrderId?: Maybe<Scalars['String']['output']>;
  fulfillmentSystemStatus?: Maybe<Scalars['String']['output']>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  gifteeEmail?: Maybe<Scalars['String']['output']>;
  gifteeMessage?: Maybe<Scalars['String']['output']>;
  giftorName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  /**
   * @deprecated The concept of internal/external order ids is
   * being removed and this will be replaced by a
   * single field.
   *
   */
  internalOrderId: Scalars['Int']['output'];
  /**
   * Some orders are managed or "owned" by a different system. These orders are
   * sometimes imported into this system for tracking and reporting purposes but
   * don't have active workflows or fulfillment processes hooked up. This allows
   * these orders to be displayed with special notices in the UI.
   */
  isExternalOrder?: Maybe<Scalars['Boolean']['output']>;
  isGift?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<LatLong>;
  orderSubscription?: Maybe<OrderSubscription>;
  orderSubscriptionRelationship: OrderSubscriptionRelationshipNames;
  paymentInfo?: Maybe<PaymentInfo>;
  paymentRequest?: Maybe<PaymentRequest>;
  price: Price;
  requestedDeliveryDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submittedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type SubmittedOrderPayload = {
  __typename?: 'SubmittedOrderPayload';
  pagination: PaginationData;
  submittedOrders: Array<SubmittedOrder>;
};

export enum SubscriptionOption {
  Allowed = 'ALLOWED',
  None = 'NONE',
  Only = 'ONLY'
}

/** Contains information about the price of a subscription. */
export type SubscriptionPrice = {
  __typename?: 'SubscriptionPrice';
  /** Shipping cost of the subscription. */
  shipping: Scalars['Int']['output'];
  /** SubTotal of the subscription. */
  subtotal: Scalars['Int']['output'];
  /** Total amount of tax applied to the subscription. */
  tax: Scalars['Int']['output'];
  /** Total of the subscription. */
  total: Scalars['Int']['output'];
};

export type Survey = {
  __typename?: 'Survey';
  activityId: Scalars['String']['output'];
  activityTags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayPoints?: Maybe<Scalars['Int']['output']>;
  extraData?: Maybe<Scalars['Json']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  numPoints?: Maybe<Scalars['Int']['output']>;
  otherLabel?: Maybe<Scalars['String']['output']>;
  questions: Array<Maybe<Question>>;
  singleSubmit?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SurveyAnswer = {
  other?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['Int']['input'];
  selectedAnswers?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  textAnswer?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyResponse = {
  __typename?: 'SurveyResponse';
  surveyResponse: Array<Maybe<QuestionResponse>>;
};

export type SurveyResponseInput = {
  pepdirectActivityId: Scalars['String']['input'];
  surveyResponse: Array<InputMaybe<SurveyAnswer>>;
};

export type SurveySubmissionResponse = {
  __typename?: 'SurveySubmissionResponse';
  message?: Maybe<Scalars['String']['output']>;
  pointsAwarded?: Maybe<Scalars['Int']['output']>;
  totalResponses?: Maybe<Scalars['Int']['output']>;
};

export type TaxItem = {
  __typename?: 'TaxItem';
  amount?: Maybe<Scalars['Int']['output']>;
  calculatedTax?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exempt?: Maybe<Scalars['Int']['output']>;
  impositionTypeId?: Maybe<Scalars['Int']['output']>;
  impositionValue?: Maybe<Scalars['String']['output']>;
  jurisdiction?: Maybe<Scalars['String']['output']>;
  jurisdictionType?: Maybe<Scalars['String']['output']>;
  taxRuleId?: Maybe<Scalars['String']['output']>;
  unclaimedTaxes?: Maybe<Scalars['Int']['output']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  analyticsConfig: AnalyticsConfig;
  /** @deprecated Deprecated in favor of `id`. */
  appId: Scalars['UUID4']['output'];
  botProtection: BotProtection;
  brandConfig: BrandConfig;
  capabilities: Capabilities;
  checkout?: Maybe<Checkout>;
  contactConfig: ContactConfig;
  countryCode: Scalars['String']['output'];
  domain: Scalars['String']['output'];
  /** @deprecated Deprecated in favor of `store_url`. */
  fallbackUrl: Scalars['String']['output'];
  giftCardConfig: GiftCardConfig;
  giftConfig: GiftConfig;
  id: Scalars['UUID4']['output'];
  loyaltyConfig: LoyaltyConfig;
  paymentConfig: PaymentConfig;
  shippingConfig: ShippingConfig;
  shoppingBagConfig: ShoppingBagConfig;
  storeUrl: Scalars['String']['output'];
  userExperience: UserExperience;
};

export type TenantPaymentOptions = {
  __typename?: 'TenantPaymentOptions';
  defaultCurrencyCode: Scalars['String']['output'];
  merchantAccountId?: Maybe<Scalars['String']['output']>;
};

export type TenantShippingOptions = {
  __typename?: 'TenantShippingOptions';
  shippingMethodsEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type Tier = {
  __typename?: 'Tier';
  amount: Scalars['Int']['output'];
  minQty: Scalars['Int']['output'];
  type: TierType;
};

export enum TierType {
  /** The tier discounts a flat amount */
  Flat = 'FLAT',
  /** the tier dicounts a percentage amount */
  Percent = 'PERCENT'
}

export type TieredAttributes = {
  __typename?: 'TieredAttributes';
  tiers: Array<Tier>;
};

export type TieredBehaviour = {
  __typename?: 'TieredBehaviour';
  attributes: TieredAttributes;
  name: BehaviourEnum;
};

export type TrackingNumber = {
  __typename?: 'TrackingNumber';
  carrierName?: Maybe<Scalars['String']['output']>;
  trackingNumber?: Maybe<Scalars['String']['output']>;
  trackingServiceUpdatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  trackingUrl?: Maybe<Scalars['String']['output']>;
};

export type UniqueCartItemInput = {
  analyticsDetails?: InputMaybe<Scalars['Json']['input']>;
  cartItemId: Scalars['UUID4']['input'];
  customizations?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['UUID4']['input']>;
  merchandiseId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  subscriptionIntervalInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCreditCardDefaultInput = {
  default: Scalars['Boolean']['input'];
  token: Scalars['String']['input'];
};

export type UpdateItemWithUniqueCustomizationsInput = {
  analyticsDetails?: InputMaybe<Scalars['Json']['input']>;
  cartItemId: Scalars['UUID4']['input'];
  customizations?: InputMaybe<Scalars['Json']['input']>;
  id: Scalars['UUID4']['input'];
  quantity: Scalars['Int']['input'];
  subscriptionIntervalInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateOrderInput = {
  contactInfo?: InputMaybe<ContactInfoInput>;
  /** Field size should not exceed 25 characters */
  customerPo?: InputMaybe<Scalars['String']['input']>;
  gifteeEmail?: InputMaybe<Scalars['String']['input']>;
  gifteeMessage?: InputMaybe<Scalars['String']['input']>;
  giftorName?: InputMaybe<Scalars['String']['input']>;
  isGift?: InputMaybe<Scalars['Boolean']['input']>;
  paymentRequest?: InputMaybe<PaymentRequestInput>;
  requestedDeliveryDate?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateOrderSubscriptionAddressInput = {
  addressId: Scalars['UUID4']['input'];
  /** ID of Order Subscription */
  id: Scalars['UUID4']['input'];
};

export type UpdateOrderSubscriptionInput = {
  id: Scalars['UUID4']['input'];
  intervalInDays?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderSubscriptionPaymentInput = {
  /** ID of Order Subscription */
  id: Scalars['UUID4']['input'];
  paymentOptions?: InputMaybe<PaymentOptionsInput>;
};

export type UpdateOrderSubscriptionQuantityInput = {
  orderSubscriptionItemId: Scalars['UUID4']['input'];
  quantity: Scalars['Int']['input'];
};

export type UpdateOrderSubscriptionStatusInput = {
  /** ID of Order Subscription */
  id: Scalars['UUID4']['input'];
  status: OrderSubscriptionStatusNames;
  /** This field is required if status is PAUSED or CANCELED */
  statusReason?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePaymentMethodDefaultInput = {
  default: Scalars['Boolean']['input'];
  token: Scalars['String']['input'];
};

/** Inputs for updating user's first and last name. */
export type UpdateUserFirstLastNameInput = {
  firstName: Scalars['String']['input'];
  id: Scalars['UUID4']['input'];
  lastName: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  acceptedTermsAt?: Maybe<Scalars['DateTime']['output']>;
  addresses: Array<Address>;
  /** @deprecated Legacy admin has been disabled, this field is now always false. */
  admin: Scalars['Boolean']['output'];
  appId: Scalars['UUID4']['output'];
  cart?: Maybe<Cart>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  hashedEmail: Scalars['String']['output'];
  hfName?: Maybe<Scalars['String']['output']>;
  hlName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID4']['output'];
  insertedAt: Scalars['DateTime']['output'];
  lastLoggedIn?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  paymentMethods?: Maybe<PaymentMethods>;
  registrationRecords: Array<RegistrationRecord>;
  userString?: Maybe<Scalars['String']['output']>;
  vendorConfig: Tenant;
};

export type UserActivity = {
  __typename?: 'UserActivity';
  activityId?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  extraData?: Maybe<Scalars['Json']['output']>;
  freqCap?: Maybe<Scalars['Int']['output']>;
  freqPeriodId?: Maybe<Scalars['Int']['output']>;
  freqPeriodName?: Maybe<Scalars['String']['output']>;
  imgUrl?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  numPoints?: Maybe<Scalars['Int']['output']>;
  userNumCompletions?: Maybe<Scalars['Int']['output']>;
};

export type UserActivityHistory = {
  __typename?: 'UserActivityHistory';
  activities?: Maybe<Array<Maybe<UserActivity>>>;
  redemptions?: Maybe<Array<Maybe<UserActivity>>>;
};

export type UserAddressInput = {
  city: Scalars['String']['input'];
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isRemovable?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  validated?: InputMaybe<Scalars['Boolean']['input']>;
  zip: Scalars['String']['input'];
};

export type UserAddressIsDefaultInput = {
  isDefault: Scalars['Boolean']['input'];
};

export type UserCodeSubmitInput = {
  campaignId: Scalars['String']['input'];
  codeValue: Scalars['String']['input'];
};

export type UserExperience = {
  __typename?: 'UserExperience';
  hasRequestedDeliveryDate: Scalars['Boolean']['output'];
};

export type UserPasswordResetRequestPayload = {
  __typename?: 'UserPasswordResetRequestPayload';
  email: Scalars['String']['output'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  customData?: Maybe<Scalars['Json']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  redeemablePoints?: Maybe<Scalars['Int']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  totalPoints?: Maybe<Scalars['Int']['output']>;
};

export type UserProfileInput = {
  mailingAddress?: InputMaybe<MailingAddressInput>;
  nflMarketingOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  nflSweepsOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  nflTeam?: InputMaybe<Scalars['String']['input']>;
  sweepstakesAddress?: InputMaybe<MailingAddressInput>;
  sweepstakesOptin: Scalars['Boolean']['input'];
};

export type UtmData = {
  __typename?: 'UtmData';
  campaign?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  term?: Maybe<Scalars['String']['output']>;
};

export type UtmDataInput = {
  campaign?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  medium?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};

export type ValidateZipcodePayload = {
  __typename?: 'ValidateZipcodePayload';
  restrictedItems: Array<Item>;
};

export enum ValidationRequirement {
  Always = 'ALWAYS',
  Optional = 'OPTIONAL'
}

export type VerifyAddressError = {
  __typename?: 'VerifyAddressError';
  code?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  suggestion?: Maybe<Scalars['String']['output']>;
};

export type VerifyAddressInput = {
  city: Scalars['String']['input'];
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip: Scalars['String']['input'];
};

export type VerifyAddressPayload = {
  __typename?: 'VerifyAddressPayload';
  city: Scalars['String']['output'];
  company?: Maybe<Scalars['String']['output']>;
  countryCode: Scalars['String']['output'];
  errors?: Maybe<Array<VerifyAddressError>>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  line1: Scalars['String']['output'];
  line2?: Maybe<Scalars['String']['output']>;
  specialInstructions?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  zip: Scalars['String']['output'];
};

export type VirtualItemsInCartLocalizations = {
  __typename?: 'VirtualItemsInCartLocalizations';
  cartText: Scalars['String']['output'];
  itemHeadingText: Scalars['String']['output'];
  itemNoteText: Scalars['String']['output'];
};

export type ZipCodeRestrictionLocalizations = {
  __typename?: 'ZipCodeRestrictionLocalizations';
  itemHeadingText: Scalars['String']['output'];
  itemNoteText: Scalars['String']['output'];
};

export type ItemDetailsFragment = { __typename?: 'Item', id: any, gtin: string, price?: number | null, isOutOfStock?: boolean | null, inventoryQty?: number | null, compareAtPrice: number } & { ' $fragmentName'?: 'ItemDetailsFragment' };

export type AcceptTermsAndConditionsMutationVariables = Exact<{ [key: string]: never; }>;


export type AcceptTermsAndConditionsMutation = { __typename?: 'RootMutationType', acceptTermsAndConditions?: { __typename?: 'User', id: any, acceptedTermsAt?: any | null } | null };

export type AddCartItemMutationVariables = Exact<{
  input: CartItemInput;
}>;


export type AddCartItemMutation = { __typename?: 'RootMutationType', addCartItem?: { __typename?: 'Cart', id: any, total: number, subtotal: number, items: Array<{ __typename?: 'CartItem', id: any, quantity: number, item: { __typename?: 'Item', id: any, title?: string | null, price?: number | null, imgUrl?: string | null } }> } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'RootQueryType', currentUser?: { __typename?: 'User', id: any, appId: any, acceptedTermsAt?: any | null, dateOfBirth?: any | null, email: string, firstName?: string | null, lastName?: string | null, cart?: { __typename?: 'Cart', id: any, shipping: number, subtotal: number, total: number, items: Array<{ __typename?: 'CartItem', id: any, perUnitPrice: number, quantity: number, strikethroughUnitPrice?: number | null, subtotal: number, item: { __typename?: 'Item', id: any, imgUrl?: string | null, price?: number | null, brandName?: string | null, title?: string | null } }> } | null } | null };

export type ItemsByGtinsQueryVariables = Exact<{
  gtins: Array<Scalars['String']['input']> | Scalars['String']['input'];
  pagination?: InputMaybe<PaginationInput>;
}>;


export type ItemsByGtinsQuery = { __typename?: 'RootQueryType', items?: { __typename?: 'ItemsPayload', items: Array<{ __typename?: 'Item', id: any, gtin: string, price?: number | null, isOutOfStock?: boolean | null, inventoryQty?: number | null, compareAtPrice: number }>, pagination: { __typename?: 'PaginationData', total: number, count: number, page: number, totalPages: number } } | null };

export type LoginUserMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'RootMutationType', loginUser?: { __typename?: 'User', id: any, email: string } | null };

export type GetProductByGtinQueryVariables = Exact<{
  gtin: Scalars['String']['input'];
}>;


export type GetProductByGtinQuery = { __typename?: 'RootQueryType', itemByGtin?: (
    { __typename?: 'Item' }
    & { ' $fragmentRefs'?: { 'ItemDetailsFragment': ItemDetailsFragment } }
  ) | null };

export type SignupUserMutationVariables = Exact<{
  input: SignupUserInput;
}>;


export type SignupUserMutation = { __typename?: 'RootMutationType', signupUser?: { __typename?: 'User', appId: any, dateOfBirth?: any | null, email: string, firstName?: string | null, id: any, lastLoggedIn?: any | null, lastName?: string | null } | null };

export type TenantQueryVariables = Exact<{ [key: string]: never; }>;


export type TenantQuery = { __typename?: 'RootQueryType', tenant?: { __typename?: 'Tenant', capabilities: { __typename?: 'Capabilities', termsAndConditions?: { __typename?: 'CapabilitiesTermsAndConditions', lastVersionUpdatedAt?: any | null } | null }, botProtection: { __typename?: 'BotProtection', active: boolean, provider?: BotProtectionProvider | null, siteKey?: { __typename?: 'BotProtectionSiteKey', android: string, ios: string } | null } } | null };

export type UpdateCartItemMutationMutationVariables = Exact<{
  input: CartItemInput;
}>;


export type UpdateCartItemMutationMutation = { __typename?: 'RootMutationType', updateCartItem?: { __typename?: 'Cart', id: any } | null };

export const ItemDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gtin"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isOutOfStock"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryQty"}},{"kind":"Field","name":{"kind":"Name","value":"compareAtPrice"}}]}}]} as unknown as DocumentNode<ItemDetailsFragment, unknown>;
export const AcceptTermsAndConditionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptTermsAndConditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptTermsAndConditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedTermsAt"}}]}}]}}]} as unknown as DocumentNode<AcceptTermsAndConditionsMutation, AcceptTermsAndConditionsMutationVariables>;
export const AddCartItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCartItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCartItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"subtotal"}}]}}]}}]} as unknown as DocumentNode<AddCartItemMutation, AddCartItemMutationVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedTermsAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"perUnitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"strikethroughUnitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"subtotal"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"brandName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shipping"}},{"kind":"Field","name":{"kind":"Name","value":"subtotal"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const ItemsByGtinsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ItemsByGtins"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gtins"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gtins"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gtins"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gtin"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isOutOfStock"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryQty"}},{"kind":"Field","name":{"kind":"Name","value":"compareAtPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<ItemsByGtinsQuery, ItemsByGtinsQueryVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const GetProductByGtinDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductByGtin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gtin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemByGtin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gtin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gtin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ItemDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gtin"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isOutOfStock"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryQty"}},{"kind":"Field","name":{"kind":"Name","value":"compareAtPrice"}}]}}]} as unknown as DocumentNode<GetProductByGtinQuery, GetProductByGtinQueryVariables>;
export const SignupUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignupUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signupUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoggedIn"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SignupUserMutation, SignupUserMutationVariables>;
export const TenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"termsAndConditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastVersionUpdatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"botProtection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"siteKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"android"}},{"kind":"Field","name":{"kind":"Name","value":"ios"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TenantQuery, TenantQueryVariables>;
export const UpdateCartItemMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCartItemMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCartItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateCartItemMutationMutation, UpdateCartItemMutationMutationVariables>;