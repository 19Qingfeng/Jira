import { useEffect, useState } from "react";
import { List, ListItem } from "./list";
import { SearchPanel, UserProps } from "./search-panel";
import { stringify } from "qs";
import { cleanObj } from "pages/utils";
import { useMount } from "../../hooks/useMount";
import { useDebounce } from "hooks/useDebounce";
import { useHttp } from "hooks/useHttp";

export interface SearchParams {
  name: string;
  personId: string;
}

const ProjectListScreen = () => {
  const [params, setParams] = useState<SearchParams>({
    name: "",
    personId: "",
  });
  const paramsDebounce = useDebounce<SearchParams>(params);

  const [list, setLists] = useState<ListItem[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);
  const client = useHttp();

  useMount(() => {
    client("/users")
      .then()
      .then(setUsers);
  });

  useEffect(() => {
    client("/projects", {
      data: cleanObj(params),
    }).then(setLists);
  }, [paramsDebounce]);

  return (
    <div>
      <List list={list} users={users}></List>
      <SearchPanel
        params={params}
        users={users}
        setParams={setParams}
      ></SearchPanel>
    </div>
  );
};

export { ProjectListScreen };
