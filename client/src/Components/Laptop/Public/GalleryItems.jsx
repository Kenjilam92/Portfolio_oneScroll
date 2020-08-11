import React from "react";

const GalleryItems = props =>{
    
    return(
        <div className={`${props.className}`} 
             onClick={e=>props.clicked(props.imgLink)} 
             data-toggle={props.dataToggle}
             data-target={props.dataTarget}
             key={props.key}>
            <img src={props.imgLink} 
                 alt={props.imgAlt}
                 className="w-100"
            />
            <p>{props.title}</p>
        </div>
    );
}

export default GalleryItems;