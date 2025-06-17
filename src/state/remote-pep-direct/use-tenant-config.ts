import { useQuery } from '@apollo/client';
import { gql } from '@/state/remote-pep-direct/__generated__/gql';

export const TenantQuery = gql(`
  query Tenant {
    tenant {
      capabilities {
        termsAndConditions {
          lastVersionUpdatedAt
        }
      }
      botProtection {
        active
        provider
        siteKey {
          android
          ios
        }
      }
    }
  }
`);

const useTenantConfig = () =>
  useQuery(TenantQuery, {
    notifyOnNetworkStatusChange: true,
  });

export default useTenantConfig;
