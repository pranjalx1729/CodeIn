import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";
import Contact from "./pages/contact/Contact";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
     <TopBar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="register/*" element = {user ? <Home/> : <Register/>} />
      <Route path="login/*" element = {user ? <Home/> : <Login/>} />
      <Route path="write/*" element = {user ? <Write/> : <Register/>} />
      <Route path="settings/*" element = {user ? <Settings/> : <Register />}/>
      <Route path="post/:postId/*" element = {<Single/>}/>
      <Route path="contact/*" element = {<Contact/>}/>
      <Route path="about/*" element = {<Home/>}/>
    </Routes>
    
    </Router>
   
  );
}

export default App;