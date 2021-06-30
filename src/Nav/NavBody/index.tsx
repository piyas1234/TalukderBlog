import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import BlogDetailsScreen from "../../Screens/BlogDetailsScreen";
import BlogScreen from "../../Screens/BlogScreen";
import ClassScreen from "../../Screens/ClassScreen";
import HomeScreen from "../../Screens/HomeScreen";
import SolotionScreen from "../../Screens/SolotionScreen";
import VedioScreen from "../../Screens/VedioScreen";
import NestingRoute from "../NestingRoute";
import AccoutScreen from './../../Screens/AccountsScreen/index';
import PrivateRoute from "../PrivateRoute";
import { useContext } from "react";
import { NavbarContext } from './../../Global/Context';
import { Redirect } from 'react-router';
export const Logout = ()=>{
   const {Auth , setAuth } = useContext(NavbarContext)
   useEffect(() => {
    setAuth({})
   }, [])
   return <Redirect to="/login" />
}

function NavBody() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/blog" component={BlogScreen} />
      <Route path="/details/:id" component={BlogDetailsScreen} />
      <Route path="/solution" component={SolotionScreen} />
      <Route path="/vedio" component={VedioScreen} />
      <Route path="/class" component={ClassScreen} />
      <PrivateRoute path="/user" component={NestingRoute} ></PrivateRoute>
      <Route path="/login" component={AccoutScreen} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
}

export default NavBody;
