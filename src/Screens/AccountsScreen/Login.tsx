import React, { useContext, useState } from "react";
import { NavbarContext } from "../../Global/Context";
import Api from "./../../Global/Axios/Api";
import { useHistory ,useLocation } from "react-router-dom";
function Login() {
  const { Auth, setAuth } = useContext(NavbarContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory()
  const location = useLocation();
  const { from }:any = location.state || { from: { pathname: '/user' } };

  const onSubmit = async () => {
    const User = await Api.post(`/auth/login`, {
      email,
      password,
    });
    setAuth({...User.data,email});
    history.push(from)
  };
  console.log(Auth);
  return (
    <div className="text-center shadow pt-5 pb-5 p-3 mt-5">
      <h1 className="text-white bg-primary mb-3">Login Form</h1>
      {msg && <div>{msg}</div>}

      <form action="" method="post">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
          placeholder="email"
          type="text"
          name="email"
          id=""
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-2"
          type="password"
          name="password"
          placeholder="password"
          id=""
        />
        <input
          className="form-control mb-2 btn btn-outline-primary"
          type="button"
          value="Login"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}

export default Login;
