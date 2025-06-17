import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  generates: {
    // PepDirect GraphQL generation
    './src/state/remote-pep-direct/__generated__/': {
      schema: 'src/state/remote-pep-direct/schema-pep-direct.graphql',
      documents: 'src/state/remote-pep-direct/**/*.{ts,tsx,graphql}',
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/state/remote-pep-direct/__generated__/types.ts': {
      schema: 'src/state/remote-pep-direct/schema-pep-direct.graphql',
      documents: 'src/state/remote-pep-direct/**/*.{ts,tsx,graphql}',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
    // DatoCMS GraphQL generation
    './src/state/remote-dato/__generated__/': {
      schema: {
        'https://cms.staging.decovostatic.com/pepsicoshop': {
          headers: {
            'X-Environment': 'staging',
          },
        },
      },
      documents: 'src/state/remote-dato/**/*.{ts,tsx,graphql}',
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/state/remote-dato/__generated__/types.ts': {
      schema: {
        'https://cms.staging.decovostatic.com/pepsicoshop': {
          headers: {
            'X-Environment': 'staging',
          },
        },
      },
      documents: 'src/state/remote-dato/**/*.{ts,tsx,graphql}',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
