export type RegistrationRequest = {
  email: string;
  password1: string;
  password2: string;
};

export type RegistrationResponse = {
  detail: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  user: {
    pk: number;
    email: string;
    first_name: string;
    last_name: string;
  };
};
