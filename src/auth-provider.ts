// 鉴权相关provider数据

import { UserProps } from "pages/project-list/search-panel";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (user: UserProps) => {
  return window.localStorage.setItem(localStorageKey, user.token || "");
};

const baseUrl = process.env.REACT_APP_API_URL;

export const login = (data: { username: string; password: string }) => {
  fetch(`${baseUrl}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
    return Promise.reject();
  });
};

export const register = (data: { username: string; password: string }) => {
  fetch(`${baseUrl}/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
    return Promise.reject();
  });
};

export const logout = () => window.localStorage.removeItem(localStorageKey);
