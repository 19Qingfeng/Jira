import { useAsync } from "hooks/useAsync";
import { useHttp } from "hooks/useHttp";
import { useMount } from "hooks/useMount";
import { UserProps } from "./search-panel";

export const useUser = () => {
  const client = useHttp();
  const { run, ...result } = useAsync<UserProps[]>();

  useMount(() => {
    run(client("/users"));
  });

  return result;
};
