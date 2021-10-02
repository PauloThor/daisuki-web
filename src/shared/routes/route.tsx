import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

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
  const token = localStorage.getItem("@Daisuki:token") || "";

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
