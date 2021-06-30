import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogDetailsScreen from "../../Screens/BlogDetailsScreen";
import BlogScreen from "../../Screens/BlogScreen";
import ClassScreen from "../../Screens/ClassScreen";
import HomeScreen from "../../Screens/HomeScreen";
import SolotionScreen from "../../Screens/SolotionScreen";
import VedioScreen from "../../Screens/VedioScreen";
import NestingRoute from "../NestingRoute";
import AccoutScreen from './../../Screens/AccountsScreen/index';
import PrivateRoute from './../PrivateRoute/index';


function NavBody() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/blog" component={BlogScreen} />
      <Route path="/details/:id" component={BlogDetailsScreen} />
      <Route path="/solution" component={SolotionScreen} />
      <Route path="/vedio" component={VedioScreen} />
      <Route path="/class" component={ClassScreen} />
      <PrivateRoute path="/user" component={NestingRoute} />
      <Route path="/login" component={AccoutScreen} />
    </Switch>
  );
}

export default NavBody;
