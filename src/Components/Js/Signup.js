import React from "react";
import "../Css/login.css";
import { Link } from "react-router-dom";
import "../Css/signup.css";


const Signup = () => {
  return (
    <div>
      <div className="Login">
        <div className="containtext">
          <div className="text1">Signup</div>
          <div className="txt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem corrupti repellendus, consequuntur est ducimus
            voluptas.
          </div>
          <Link to="/Login"><button className="backbtn">Back</button></Link>
        </div>

        <div className="container">
          <div className="signuptext">Signup</div>
          <div className="cont1"></div>
          <input type="text" className="textinput1" placeholder="Username" />
          <input type="email" className="textinput1" placeholder="Email ID" />
          <input type="password" className="textinput1"placeholder="Password"/>
          <input type="password" className="textinput1"placeholder="Confirm Password"/>
          <p className="beta1">All fields are mandatory *</p>
          <button className="loginbtn">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
