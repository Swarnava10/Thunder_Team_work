import React from "react";
import { Link } from "react-router-dom";
import "../Css/login.css";
import "../Css/forgotpass.css";

const Forgotpass = () => {
  return (
    <div>
      <div className="Login">
        <div className="containtext bucket">
          <div className="text1">Forgot Password</div>
          <div className="txt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem corrupti repellendus, consequuntur est ducimus
            voluptas.
          </div>
          <Link to="/Login">
            <button className="backbtn">Back</button>
          </Link>
        </div>

        <div className="container">
          <div className="logtext fortext">Reset Password</div>
          <div className="cont1"></div>
          <input
            type="email"
            className="textinput1 textinput2"
            placeholder="Email ID"
          />
          <p className="betatxt">Please enter your email</p>
          <button className="loginbtn forgotbtn">Reset</button>
          <p className="alphatxt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rem vero culpa corrupti nulla consequuntur aliquam quo soluta veritatis, ipsum quas possimus commodi dicta facere. Hic eaque deleniti ea!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
