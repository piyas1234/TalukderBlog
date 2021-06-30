import React, { useContext } from 'react'
import Main from '../../Components/Home/Main'
import PrivateClass from './../../Components/Home/PrivateClass';
import Study from '../../Components/Home/Study';
import FreeVedios from '../../Components/Home/FreeVedios';
import StudentsSay from '../../Components/Home/StudentsSay';
import Footer from '../../Components/Home/Footer';
import   ShowModal  from '../../Components/Home/Modal';
import { NavbarContext } from './../../Global/Context';
function HomeScreen() {
  const {Modal , setModal} = useContext(NavbarContext)
    return (
        <div>
          <Main/>  
          <PrivateClass/>
          <Study/>
          <FreeVedios/>
           {Modal &&  <ShowModal/> }
          <StudentsSay/>
          <Footer/>
        </div>
    )
}

export default HomeScreen;

 

