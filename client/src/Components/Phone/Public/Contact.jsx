import React from "react";
import Info from "./Info";
import SendMessage from "./SendMessage";

const Contact = props =>{
    return (     
      <div className={`${props.className}`} style={props.style} id={props.id}>
        <p className="text-warning h1"> Contact </p>
        <Info/>
        <SendMessage 
          Theme={props.Theme}
        />
      </div>

    );
}
export default Contact