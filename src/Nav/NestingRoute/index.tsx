import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import AdminScreen from "../../Screens/AdminScreen";
import CreatePosts from "../../Screens/AdminScreen/CreatePosts";
import DeshBoard from "./../../Screens/AdminScreen/DeshBoard";
function NestingRoute() {
  let { path, url } = useRouteMatch();
  console.log(path);
  return (
    <div className="row">
      <div className="col-md-2">
        <div style={{ minHeight: "100%", padding:'20px' }} className="bg-primary text-bold">
          <NavLink className="text-white" exact to="/user">
            user
          </NavLink>{" "}
          <br />
          <br />
          <NavLink className="text-white" to={path + "/deshboard"}>
            DeshBord
          </NavLink>
          <br /> 
          <br /> 
          <NavLink className="text-white" to={path + "/createposts"}>
          createposts
          </NavLink>
          <br />
          <br />
        </div>
      </div>
      <div className="col-md-10">
        <Switch>
          <Route exact path={path} component={AdminScreen} />
          <Route path={`${path}/deshboard`} component={DeshBoard} />
          <Route path={`${path}/createposts`} component={CreatePosts} />
        </Switch>
      </div>
    </div>
  );
}

export default NestingRoute;
