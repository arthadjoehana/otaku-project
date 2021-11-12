import React from "react";
import Loginbar from "../../components/loginbar/Loginbar";
import { Link } from "react-router-dom"

export default function Waiting() {

  return (
    <div className="waiting">
        <Loginbar />
        <p>We've sent an email at xxx@xxx.com</p>
        <p>Please validate your account through email confirmation</p>
        <Link to="/"><button>Back to login</button></Link>
    </div>
  );
}
