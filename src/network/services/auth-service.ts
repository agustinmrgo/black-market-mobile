import client from '../client';
import { RegistrationRequest, RegistrationResponse } from '../models/auth-models';

const AuthService = {
  register: async (request: RegistrationRequest) => {
    try {
      const { data } = await client.post<RegistrationResponse>(
        '/dj-rest-auth/registration/',
        request,
      );
      return data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },
};

export default AuthService;
