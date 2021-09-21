import { logout } from "auth-provider";

interface HttpParams {
  data?: any;
  token?: string;
  config?: RequestInit;
}

const baseUrl = process.env.REACT_APP_API_URL;

export const http = async (
  endPoint: string,
  { data, token, config }: HttpParams = {}
) => {
  const requestData = {
    method: "GET",
    headers: {
      Authorization: token ? "Bearer" + token : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...config,
  };

  if (requestData.method.toUpperCase() === "GET") {
    endPoint += `?${new URLSearchParams(data).toString()}`;
  } else {
    requestData.body = JSON.stringify(data || {});
  }

  return window.fetch(`${baseUrl}${endPoint}`, requestData).then(
    async (res) => {
      if (res.status === 401) {
        await logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      if (res.ok) {
        return await res.json();
      } else {
        return Promise.reject(res);
      }
    },
    (error) => Promise.reject(error)
  );
};
