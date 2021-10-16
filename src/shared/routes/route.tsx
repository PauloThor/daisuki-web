import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useUser } from "../../hooks/User";

interface RouteProps {
  isPrivate?: boolean;
  component: () => JSX.Element;
  exact?: boolean;
  path: string;
}

export default function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) {
  const { token } = useUser();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }}
    />
  );
}
