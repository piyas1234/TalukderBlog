import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { NavbarContext } from "./../../Global/Context";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { Auth } = useContext(NavbarContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
