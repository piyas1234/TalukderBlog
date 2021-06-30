import React, { useState } from "react";
import Api from "../../Global/Axios/Api";
function Signup() {
  const [msg, setMsg] = useState('')
  const [Auth, setAuth] = useState('')
  const [formData, setFormData] = useState({
    name:null,
    email:null,
    password:null,
    confirmPassword:null,
  });
  const onchangeHandler = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

 const onSubmit = async ()=>{
  if(formData.name===null || formData.confirmPassword===null || formData.email===null ){
    return setMsg('Fill all the fields')
  }
  const User = await Api.post(`/auth/signup`,formData)
  setAuth(User.data.message)
  setMsg('')
 }

console.log(Auth)
  return (
    <div className="p-2 pb-5 pt-5 mt-5 shadow-lg">
      <h1 className="bg-primary text-white">SignUp</h1>
       {msg && <div className="text-warning">{msg}</div>}
       {Auth && <div className="text-warning">{Auth}</div>}
      
      <form className=""  method="post">
        <input
          className="form-control mb-2"
          placeholder="name"
          type="text"
          name="name"
          id=""
          onChange={onchangeHandler}
        />
        <input
          className="form-control mb-2"
          placeholder="email"
          type="text"
          name="email"
          id=""
          onChange={onchangeHandler}
        />
        <input
          className="form-control mb-2"
          type="password"
          name="password"
          placeholder="password"
          id=""
          onChange={onchangeHandler}
        />
        <input
          className="form-control mb-2"
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          id=""
          onChange={onchangeHandler}
        />

        <input
         className="form-control mb-2 btn btn-primary"
          type="button"
          value="SignUp"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}

export default Signup;
