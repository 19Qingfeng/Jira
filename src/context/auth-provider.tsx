import { AuthProvider } from "./index";

// App需要多层嵌套
const AppProviders: React.FC = ({ children }) => {
  return <AuthProvider children={children}></AuthProvider>;
};

export { AppProviders };
