import React from "react";

const GalleryItems = props =>{
    const imgStyle ={
        backgroundImage: `url(${props.imgLink})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 100+"%",
        height: 14+"vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 2+"vh",

    }
    return(
        <div className={`${props.className} shadow-lg rounded-sm projectButton`}
             onClick={e=>props.clicked(props.imgLink)} 
             data-toggle={props.dataToggle}
             data-target={props.dataTarget}
             key={props.key}>
            <div style={imgStyle} >
                <div className="projectTitle border border-light rounded-sm p-1">
                    <p className="text-center"> {props.title} </p>
                </div>
            </div>
        </div>
    );
}

export default GalleryItems;