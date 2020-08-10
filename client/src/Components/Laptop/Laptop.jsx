import React from "react";
// import { useRef, useEffect, createRef } from "react";
import ScrollableSection, { ScrollableLink } from 'react-scrollable-url';
////

// import ProjectList from "./Public/ProjectList";
import Contact from "./Public/Contact";
import Aboutme from "./Public/AboutMe";
import Home from "./Public/Home";
import Test from "./Public/Test";


const Laptop = props =>{
    const img1 = "/images/kenjilam_baltimore.png";
    const backGround = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img1}")`,
        width: 100+"vw",
        height: 100+"vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "sticky",
        top: 0,
        left: 0,
        // overflow: "scroll"
        zIndex: -5
    };

    const SectionsHeight = {
        width: 68+"%",
        minHeight: 70+"vh",
        marginBottom: 30+"vh"
        // overflow: "auto",
    }

    
    ///////Scroll
    // const scrollArea = useRef();
    // const top = createRef();
    // const onScroll = e => (top.current = e.target.scrollTop)
    // useEffect(() => void onScroll({ target: scrollArea.current }), [])
    

    ///////Render
    return(
        <>
        <div style={backGround}>
        </div>
        <div className="d-flex flex-column align-items-end pr-3" //scrollArea
        // ref={scrollArea} onScroll={onScroll}
        style={{height:  "fit-content", marginTop : (0-100)+"vh"}}
        >
            <Home
                className="text-white text-center text-nowrap pt-5 w-100" 
                Theme={props.Theme}
                style={SectionsHeight} 
            />
            
            <Aboutme
                className="text-white"
                style={SectionsHeight} 
            />
        

            {/* <ProjectList
                className=""
                style={SectionsHeight} 
            /> */}

            <Test
                className="text-white"
                style={SectionsHeight}
            />

            <Contact
                className="text-white mb-5"
                Theme={props.Theme}
                style={SectionsHeight} 
            />

            
        </div>

        
        </>
    );
}

export default Laptop;