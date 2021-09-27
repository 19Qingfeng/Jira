import { useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useDebounce } from "hooks/useDebounce";
import { useProject } from "./use-project";
import { useUser } from "./use-user";

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

  const { data: list } = useProject(paramsDebounce);
  const { data: users } = useUser();

  return (
    <div>
      <List dataSource={list || []} users={users || []}></List>
      <SearchPanel
        params={params}
        users={users || []}
        setParams={setParams}
      ></SearchPanel>
    </div>
  );
};

export { ProjectListScreen };
