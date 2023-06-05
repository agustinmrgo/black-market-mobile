import { useMutation } from '@tanstack/react-query';

import { RegistrationResponse } from 'network/models/auth-models';
import type { AxiosResult } from 'network/models/axios';
import AuthService from 'network/services/auth-service';

export const GET_EXAMPLE = 'get-example';

// const useGetExample = (id: string) => useQuery([GET_EXAMPLE, id], () => AuthService.get(id));

const useRegisterUser = ({ onError, onSuccess }: AxiosResult<RegistrationResponse>) =>
  useMutation(AuthService.register, {
    onError,
    onSuccess,
  });

export {
  // useGetExample,
  useRegisterUser,
};
