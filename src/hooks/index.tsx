import { ReactNode } from "react";
import { UserProvider } from "./User";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Provider;
