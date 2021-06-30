import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { NavbarContext } from './../../Global/Context';

const PrivateRoute = ({ children, ...rest }:any) => {
  const  {Auth} = useContext(NavbarContext);
  const { auth } = Auth;
  console.log(Auth,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
       auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;