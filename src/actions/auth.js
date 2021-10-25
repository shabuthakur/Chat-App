import { LOGIN_START } from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
// '/login?email=a@a.com&passwords=13213'
export function login(email, password) {
  return (dispatch) => {
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'appliction/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    });
  };
}
