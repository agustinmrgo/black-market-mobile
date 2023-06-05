import client from '../client';
import { RegistrationRequest, RegistrationResponse } from '../models/auth-models';

const AuthService = {
  // get: async (id: string) => {
  //   const { data } = await client.get<ExampleResponse>(`/examples/${id}`);
  //   return data;
  // },
  register: async (request: RegistrationRequest) => {
    const { data } = await client.post<RegistrationResponse>(
      '/dj-rest-auth/registration/',
      request,
    );
    return data;
  },
};

export default AuthService;

// const setAuthToken = token => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };

// const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/login`, { email, password });
//     const { token } = response.data;

//     setAuthToken(token);
//     return token;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
//   zxzs3;
// };

// const logout = () => {
//   setAuthToken(null);
// };

// export { login, logout };
