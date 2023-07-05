import { useMutation } from '@tanstack/react-query';

import { RegistrationResponse } from 'network/models/auth-models';
import type { AxiosResult } from 'network/models/axios';
import AuthService from 'network/services/auth-service';

const useRegisterUser = ({ onError, onSuccess }: AxiosResult<RegistrationResponse>) =>
  useMutation(AuthService.register, {
    onError,
    onSuccess,
  });

const useLoginUser = ({ onError, onSuccess }: AxiosResult<RegistrationResponse>) =>
  useMutation(AuthService.login, {
    onError,
    onSuccess,
  });

export { useRegisterUser, useLoginUser };
