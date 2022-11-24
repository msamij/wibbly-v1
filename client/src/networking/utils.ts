import { BaseUrls, ResourceEndPoints, Resources } from '@http/constants';
import HTTP from '@http/http';

export const saveUserOnSignIn = async (userId: string) => {
  await HTTP.post(`${BaseUrls.localHost}${BaseUrls.baseApi}${Resources.users}${ResourceEndPoints.signin}`, {
    userId,
  });
};
