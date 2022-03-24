import "./App.css";
import "./Components/Css/login.css";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from "./Components/Js/Login";
import Mainpage from "./Components/Js/Mainpage";
import Signup from "./Components/Js/Signup";
import UserProfile from "./Components/Js/UserProfile";
import Introduct from "./Components/Js/Introduct";
import Forgotpass from "./Components/Js/Forgotpass";




function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
               <Route path="/Intro" element={<Introduct />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/Signup" element={<Signup />} />
               <Route path="/Forgotpass" element={<Forgotpass />} />
               <Route path="/Home_page" element={<Mainpage />} />
               <Route path="/User_profile" element={<UserProfile />} />
         </Routes>
      </Router> 
    </div>
  );
}

export default App;
