// utils/auth/signin.ts
import api from 'lib/api';

interface SigninData {
  identifier: string; // can be email or username
  password: string;
}

export const signinUser = (data: SigninData) => {
  return api.post('/api/auth/local', data);
};
