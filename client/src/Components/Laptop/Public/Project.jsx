import React from "react";

const Project = props =>{
  return(
    <div className="col border-bottom border-white pt-3 pb-3 w-100">
      <div className="justify-content-center mb-4">
        <img src={props.imgLink} alt={props.imgAlt} className="w-100"/>
      </div>
      <div className="text-white">
        {props.children}
      </div>
    </div>
  );
}
export default Project;