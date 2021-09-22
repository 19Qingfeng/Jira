import { Table } from "antd";
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
  return <Table pagination={false} columns={[
    { title: '名称', dataIndex: "name", sorter: (a, b) => a.name.localeCompare(b.name) }, {
      title: '负责人', render: (value, project) => {
        return <span>
          {users?.find((user) => user.id === project.personId)?.name}
        </span>
      }
    }]
  } dataSource={list} ></Table >
};

export { List };
