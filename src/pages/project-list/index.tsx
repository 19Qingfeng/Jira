import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { stringify } from "qs";
import { cleanObj } from "pages/utils";
import { useMount } from "../../hooks/useMount";
import { useDebounce } from "hooks/useDebounce";

export interface SearchParams {
  name: string;
  personId: string;
}

const baseUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const paramsDebounce = useDebounce(params);

  const [list, setLists] = useState([]);
  const [users, setUsers] = useState([]);

  useMount(() => {
    fetch(`${baseUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  useEffect(() => {
    fetch(`${baseUrl}/projects?${stringify(cleanObj(params))}`).then(
      async (res) => {
        if (res.ok) {
          setLists(await res.json());
        }
      }
    );
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
