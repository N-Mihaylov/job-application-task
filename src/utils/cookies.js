import Cookie from "js-cookie";

export const USER_COOKIE = "USER_COOKIE";

export const setCookie = (name, value) => {
  Cookie.set(name, value);
};

export const getCookie = (name) => {
  return Cookie.get(name);
};

export const removeCookie = (name) => {
  Cookie.remove(name);
};
