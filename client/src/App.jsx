import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';
/////////////CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal.js";
import "bootstrap/js/dist/collapse.js";
import "./App.css";
/////////////Components
import Phone from "./Components/Phone/Phone";
import Laptop from "./Components/Laptop/Laptop";
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
    btn: "btn text-white bg-transparent border border-white"
  });
  
  /////////// Render
  return(
    <div className="h-100">
      {matches?
      <Phone
        LoginStatus = {LoginStatus}
        setLoginStatus = {setLoginStatus}
        User={User}
        setUser={setUser}
        Theme={Theme}
        setTheme={setTheme}
      />  
      :
      <Laptop
        LoginStatus = {LoginStatus}
        setLoginStatus = {setLoginStatus}
        User={User}
        setUser={setUser}
        Theme = {Theme}
        setTheme = {setTheme}
      />
      }
    </div>
  );
}

export default App;
