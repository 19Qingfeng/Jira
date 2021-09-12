import { UserProps } from "./search-panel";

export interface ListItem {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: ListItem[];
  users: UserProps[];
}

const List: React.FC<ListProps> = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users?.find((user) => user.id === project.personId)?.name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { List };
