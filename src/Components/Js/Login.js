import React from 'react'
import logo from "../Images/google.png";


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
         <button className="backbtn">Back</button>
        </div>



        <div className="container">
          <div className="logtext">Login</div>
          <div className="cont1">
             </div><input type="email" className="textinput1" placeholder="Email ID" />
             <input type="password" className="textinput1" placeholder="Password" />         
        
                <button className="loginbtn">Login</button>
                <p className="signup">Don't have an account? <a href="#">Signup</a></p>
                <a href="#" className="forgotpass">Forgot password?</a>
                <button className="Googlebtn"><img src={logo} width="25px" className="googleicon"/> 
                <p>Google Signup</p></button>
        </div>
      </div>
    </div>
  )
}

export default Login