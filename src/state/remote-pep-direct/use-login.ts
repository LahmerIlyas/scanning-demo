import React from 'react';
import { gql } from '@/state/remote-pep-direct/__generated__/gql';
import { useMutation } from '@apollo/client';

export const mutation = gql(`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      id
      email
    }
  }
`);

export const useLogin = () => {
  return useMutation(mutation);
};
