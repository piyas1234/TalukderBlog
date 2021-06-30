import React, { useContext, useState } from "react";
import { NavbarContext } from "../../Global/Context";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./signup";
const AccoutScreen = () => {
  const {Auth, setAuth} = useContext(NavbarContext)
  const [active, setActive] = useState(true);
  console.log(Auth)
  return Auth.auth?
  (<div>
    <Profile data={setAuth} />
  </div>)
  : (
    <div className="col-md-6 offset-md-3">
      {active && <Login />}
      {!active && <Signup />}
      {active && (
        <span>
          Have not a account?{" "}
          <button  className="btn btn-sm btn-outline-primary"  onClick={() => setActive(!active)}>
            signup
          </button>
        </span>
      )}
      {!active && (
        <span>
          Have a account?{" "}
          <button className="btn btn-sm btn-outline-primary"  onClick={() => setActive(!active)}>
            Login
          </button>
        </span>
      )}
    </div>
  );
};

export default AccoutScreen;
