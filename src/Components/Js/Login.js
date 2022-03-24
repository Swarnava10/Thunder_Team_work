import React from 'react';
import "../Css/login.css";
import logo from "../Images/google.png";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div>
       <div className="Login">
        <div className="containtext">
          <div className="text1">Login</div>
          <div className="txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nostrum laboriosam libero mollitia molestiae, molestias dolores
            perspiciatis aut consequuntur similique aliquid voluptatibus? Sint,
            excepturi, totam facere tempore ratione libero perspiciatis doloremque
            ea quod iusto quos at error quidem assumenda sunt.
         </div>
         <Link to="/Intro"><button className="backbtn">Back</button></Link>
        </div>



        <div className="container">
          <div className="logtext">Login</div>
          <div className="cont1">
             </div><input type="email" className="textinput1" placeholder="Email ID" />
             <input type="password" className="textinput1" placeholder="Password" />  
             <p className="beta">Please enter your credentials</p>       
        
                <button className="loginbtn">Login</button>
                <p className="signup">Don't have an account? <Link to="/Signup">Signup</Link></p>
                <Link to="/Forgotpass" className="forgotpass">Forgot password?</Link>
                <button className="Googlebtn"><img src={logo} width="25px" className="googleicon"/> 
                <p>Google Signup</p></button>
        </div>
      </div>
    </div>
  )
}

export default Login