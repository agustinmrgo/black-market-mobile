import client from '../client';
import { LoginRequest, RegistrationRequest, RegistrationResponse } from '../models/auth-models';

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
  login: async (request: LoginRequest) => {
    try {
      const { data } = await client.post<RegistrationResponse>('/dj-rest-auth/login/', request, {
        withCredentials: false,
      });
      return data;
    } catch (error) {
      console.error('Error resending the email:', error);
      throw error;
    }
  },
};

export default AuthService;
