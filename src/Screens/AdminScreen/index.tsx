import React from 'react'
import { NavbarContext } from './../../Global/Context';
import { useContext } from 'react';
 
function AdminScreen() {
    const {Auth , setAuth} = useContext(NavbarContext)
 
    return (
        <div className="col-md-8 offset-md-2   mt-5" style={{minHeight:'800px'}}>
           <div className="mt-5 p-4 m-auto shadow">
            <h4>Name: {Auth.email.slice(0,5)}</h4>
            <h4>Email: {Auth.email}</h4>
             <button onClick={()=>setAuth({})} className="btn btn-danger" type="submit">Logout</button>
           </div>
        </div>
    )
}

export default AdminScreen
