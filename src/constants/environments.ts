export type EnvironmentConfig = {
  pepdirectGraphqlUrl: string;
  datoGraphqlUrl: string;
  authCookieName: string;
  checkoutUrl?: string;
};

export const selectedEnvironment: EnvironmentConfig = {
  pepdirectGraphqlUrl: 'https://api.pepsicoshopstaging.com/graphql',
  datoGraphqlUrl: 'https://cms.staging.decovostatic.com/pepsicoshop',
  authCookieName: 'wellspace-token',
  checkoutUrl: 'https://secure.pepsicoshopstaging.com/v3',
};
