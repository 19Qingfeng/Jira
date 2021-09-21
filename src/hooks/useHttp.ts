import { useAuth } from "../hooks/useAuth";
import { http } from "pages/utils/http";

function useHttp() {
  const { user } = useAuth();
  // Parameters 内置类型 返回传入函数类型的参数(元祖类型)
  return (...[endPoint, config]: Parameters<typeof http>) =>
    http(endPoint, {
      token: user?.token,
      ...config,
    });
}

export { useHttp };
