import React from "react";
import Info from "./Info";
import SendMessage from "./SendMessage";

const Contact = props =>{
    return (     
      <div className={`${props.className}`} style={props.style}>
        <p className="text-warning h2"> Contact </p>
        <Info/>
        <SendMessage 
          Theme={props.Theme}
        />
      </div>

    );
}
export default Contact