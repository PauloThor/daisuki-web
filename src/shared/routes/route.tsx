import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
// import { useAuth } from "../hooks/Auth";

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
  //   const { token } = useAuth();
  const token = true;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
}
