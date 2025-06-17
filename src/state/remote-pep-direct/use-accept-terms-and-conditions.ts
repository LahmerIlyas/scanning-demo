import React from 'react';
import {gql} from '@/state/remote-pep-direct/__generated__/gql';

import {CurrentUserQuery} from '@/state/remote-pep-direct/use-current-user';
import {useMutation} from '@apollo/client';

export const mutation = gql(`
  mutation AcceptTermsAndConditions {
    acceptTermsAndConditions {
      id
      acceptedTermsAt
    }
  }
`);

const useAcceptTermsAndConditions = () => {
  const [mutate, result] = useMutation(mutation, {
    awaitRefetchQueries: true,
    notifyOnNetworkStatusChange: true,
    refetchQueries: [
      {
        query: CurrentUserQuery,
      },
    ],
  });
  const acceptTermsAndConditions = React.useCallback(async () => {
    const {data, errors} = await mutate();

    return !!(data?.acceptTermsAndConditions?.id && !errors?.[0]);
  }, [mutate]);
  return [acceptTermsAndConditions, result];
};

export default useAcceptTermsAndConditions;
