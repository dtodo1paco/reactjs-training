const TOKEN = 'token';

export const saveToken = token => {
  if (token && token.auth) {
    sessionStorage.setItem(TOKEN, JSON.stringify(token.token));
  } else {
    sessionStorage.removeItem(TOKEN);
  }
};

export const getToken = () => {
  const token = sessionStorage.getItem(TOKEN);
  if (token !== null) {
    return JSON.parse(token);
  }
  return null;
};

export const isAuth = () => {
  return getToken() != null;
}