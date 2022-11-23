import { Urls } from '@http/constants';
import HTTP from '@http/http';

export const saveUserOnSignIn = async (userId: string) => {
  await HTTP.post(`${Urls.baseUrl}${Urls.baseApiUrl}${Urls.users}${Urls.signin}`, {
    userId,
  });
};
