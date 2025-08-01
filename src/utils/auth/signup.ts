// utils/auth/signup.ts
import api from 'lib/api';

interface SignupData {
  username: string;
  email: string;
  password: string;
}

export const signupUser = (data: SignupData) => {
  return api.post('/api/auth/local/register', data);
};
