import { gql } from '@/state/remote-pep-direct/__generated__/gql';

import { useMutation } from '@apollo/client';

export const mutation = gql(`
  mutation SignupUser($input: SignupUserInput!) {
    signupUser(input: $input) {
      appId
      dateOfBirth
      email
      firstName
      id
      lastLoggedIn
      lastName
    }
  }
`);

const useSignupUser = () => {
  return useMutation(mutation, {
    notifyOnNetworkStatusChange: true,
  });
};

export default useSignupUser;
