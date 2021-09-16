import { SearchParams } from "./index";

export interface UserProps {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token?: string;
}

interface SearchPanelProps {
  users: UserProps[];
  params: SearchParams;
  setParams: (value: SearchParams) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = (props) => {
  const { params, setParams, users } = props;

  return (
    <form>
      <input
        value={params.name}
        onChange={(e) => setParams({ ...params, name: e.target.value })}
      ></input>
      <select
        value={params.personId}
        onChange={(e) => setParams({ ...params, personId: e.target.value })}
      >
        <option value={""}>负责人</option>
        {users.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export { SearchPanel };
