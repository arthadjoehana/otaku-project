import { useContext, useRef } from "react";
import "./Login.css";

import { AuthContext } from "../../context/AuthContext";
import Loginbar from "../../components/loginbar/Loginbar";
import Register from "../../components/register/Register";

export default function Login() {

  return (
    <div className="login">
      <Loginbar />
      <Register />
    </div>
  );
}
