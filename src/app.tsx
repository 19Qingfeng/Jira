import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "./hooks/useAuth";
import { UnAuthenticatedApp } from "unauthenticated-app";
import "./app.css";

const App: React.FC = () => {
  const auth = useAuth();
  return (
    <div className="app">
      {auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
};

export { App };
