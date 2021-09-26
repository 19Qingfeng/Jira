import { Table, TableProps } from "antd";
import { UserProps } from "./search-panel";

export interface ListItem {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps extends TableProps<ListItem> {
  users: UserProps[];
}

const List: React.FC<ListProps> = ({ users, ...rest }) => {
  return (
    <Table
      pagination={false}
      rowKey="id"
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render: (value, project) => {
            return (
              <span>
                {users?.find((user) => user.id === project.personId)?.name}
              </span>
            );
          },
        },
      ]}
      {...rest}
    ></Table>
  );
};

export { List };
