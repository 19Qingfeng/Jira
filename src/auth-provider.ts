// 鉴权相关provider数据

import { UserProps } from "pages/project-list/search-panel";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (user: UserProps) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

const baseUrl = process.env.REACT_APP_API_URL;

export const login = (data: { username: string; password: string }) => {
  return fetch(`${baseUrl}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (res) => {
      if (res.ok) {
        return handleUserResponse(await res.json());
      } else {
        return Promise.reject(res);
      }
    })
    .catch((e) => Promise.reject(e));
};

export const register = (data: { username: string; password: string }) => {
  return fetch(`${baseUrl}/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (res) => {
      if (res.ok) {
        return handleUserResponse(await res.json());
      }
      return Promise.reject(res);
    })
    .catch((e) => Promise.reject(e));
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
