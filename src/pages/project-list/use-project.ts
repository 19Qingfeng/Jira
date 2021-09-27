import { useHttp } from "hooks/useHttp";
import { useEffect } from "react";
import { SearchParams } from ".";
import { cleanObj } from "pages/utils";
import { useAsync } from "hooks/useAsync";
import { ListItem } from "./list";

export const useProject = (paramsDebounce?: Partial<SearchParams>) => {
  const { run, ...result } = useAsync<ListItem[]>();
  const client = useHttp();

  useEffect(() => {
    run(
      client("/projects", {
        data: cleanObj(paramsDebounce || {}),
      })
    );
  }, [paramsDebounce]);

  return result;
};
