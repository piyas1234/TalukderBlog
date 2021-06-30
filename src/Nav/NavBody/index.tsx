import React from 'react'
import { Switch,Route } from 'react-router-dom'
import ClassScreen from '../../Screens/ClassScreen'
import HomeScreen from '../../Screens/HomeScreen'
import SolotionScreen from '../../Screens/SolotionScreen'
import VedioScreen from '../../Screens/VedioScreen'

function NavBody() {
    return (
       <Switch>
           <Route exact path="/" component={HomeScreen} />
           <Route exact path="/solution" component={SolotionScreen} />
           <Route exact path="/vedio" component={VedioScreen} />
           <Route exact path="/class" component={ClassScreen} />
       </Switch>
    )
}

export default NavBody
