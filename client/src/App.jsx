import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';
import  {Router} from "@reach/router";
/////////////CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal.js";
import "bootstrap/js/dist/collapse.js";
import "./App.css";
/////////////Components
import Phone from "./Components/Phone/Phone";
import Laptop from "./Components/Laptop/Laptop";
import Progressing from "./Components/General/Progressing";
import Error404 from "./Components/General/Error404";
import Login from "./Components/General/Login";
import MessagesP from "./Components/General/Messages";
import Invitation from "./Components/General/Invitation";
import Admin from "./Components/General/Admin";
import UserPage from "./Components/General/UserPage";
// import Tablet from "./Components/Tablet";

function App() {
  /////Login//
  const [LoginStatus,setLoginStatus] = useState (false);
  const [User,setUser] = useState ({});
  const CheckBackEndSession = () =>{
    axios.get("/api/session")
      .then(res=>{
        if(res.data.errors){
        console.log(res.data.error)
        }
        else{
          setLoginStatus(res.data.isSignIn);
          res.data.user? setUser(res.data.user): setUser({});
        }
      })
      .catch(err=>console.log(err));
  }

  useEffect (()=>{
    CheckBackEndSession();
  },[]);

  ///////// Check devide (if matched is true, the device is phone)

  const matches = useMediaQuery(
    json2mq({
      maxWidth: 768,
    }),
  );
  ///////// Theme config
  const [Theme,setTheme] = useState({
    bg: "bg-transparent",
    btn: "btn text-white bg-transparent border border-white",
    text: "text-white"
  });
  
  /////////// Render
  return(
    <>
    <Router>
      {matches?
      <Phone
        path="/"
        LoginStatus = {LoginStatus}
        setLoginStatus = {setLoginStatus}
        User={User}
        setUser={setUser}
        Theme={Theme}
        setTheme={setTheme}
      />  
      :
      <Laptop
        path="/"
        LoginStatus = {LoginStatus}
        setLoginStatus = {setLoginStatus}
        User={User}
        setUser={setUser}
        Theme = {Theme}
        setTheme = {setTheme}
      />
      }
      <Progressing path ="/progressing"/>
      <Error404    path ="*"/>

      <Login      path ="/login"
                  loginStatus={LoginStatus}
                  login={setLoginStatus}
                  user={User}
                  setUser={setUser}/>

      <MessagesP  path ="/messages"   
                  login={LoginStatus} 
                  user={User}/>

      <Invitation path ="/invitation"
                  user={User}
                  login={LoginStatus}/>

      <Admin      path ="/admin"      
                  user={User}
                  login={LoginStatus}
                  />

      <UserPage   path ="/blog"
                  checkSession={CheckBackEndSession}
                  user={User}
                  login={LoginStatus}/>
    </Router>
    </>
  );
}

export default App;
