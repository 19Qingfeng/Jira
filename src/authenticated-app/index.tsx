import styled from "@emotion/styled";
import { ProjectListScreen } from "../pages/project-list/index";

const AuthenticatedApp: React.FC = () => {
  return (
    <div>
      <ProjectListScreen />
    </div>
  );
};

export { AuthenticatedApp };

// css
const PageHeader = styled.div`
  height: 6rem;
`

const Main = styled.main`
  height: calc(100vh - 6rem);
`