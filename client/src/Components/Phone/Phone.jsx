import React from "react";

// import ProjectList from "./Public/ProjectList";
import Contact from "./Public/Contact";
import Aboutme from "./Public/AboutMe";
import Home from "./Public/Home";
import Projects from "./Public/Projects/Projects";
import Menu from "./Public/Menu";
import SocialLink from "./Public/SocialLink";

///APIs
import MenuAPI from "../../APIs/MenuAPI";


/////////

const Phone = props =>{
    const img1 = "/images/kenjilam_mountain.jpg";
    const backGround = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img1}")`,
        width: 100+"vw",
        // height: 100+"vh",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        overflow: "scroll",
    };

    const SectionsHeight = {
        backgroundColor: "rgba(0,0,0, 0.8)",
        width: 100+"%",
        height: "fit-content",
        marginBottom: 30+"vh",
        paddingLeft: 3+"vw",
        paddingRight: 3+"vw",
        paddingTop: 3+"vh"
    }

    ///////Menu
        
    const showSection = (e) =>{
        var selectedLocation = document.getElementById(e);
        selectedLocation.scrollIntoView({ behavior: "smooth" });
    }

    ///////Render
    return(
        <> 
        
        <div className="d-flex flex-column w-100h h-100"  style={backGround}>   
            <div>
            <Menu 
                API= {MenuAPI}
                Theme= {props.Theme}
                className=""
                buttonClassName="btn "
                click={showSection}
                style={{
                    position: "relative",
                    width: 100+"vw",
                    top:-2+"vh",
                    left:0,
                    zIndex: 5,
                    // width: 100+"%"
                }}   
            />
            </div>
            <div className="d-flex flex-column overflow-auto">
                <Home
                    className="text-white text-center text-nowrap w-100" 
                    
                    Theme={props.Theme}
                    style={{
                        minHeight: 85+"vh"
                    }}
                    id="Home"
                    click={showSection}
                />
                <div>
                <Aboutme
                    className="text-white w-100"
                    style={SectionsHeight} 
                    id="AboutMe"
                />
                </div>
                <div>
                <Projects
                    className="text-white w-100"
                    style={SectionsHeight}
                    Theme={props.Theme}
                    id="Projects"
                />
                </div>
                <div>
                <Contact
                    className="text-white w-100"
                    Theme={props.Theme}
                    style={SectionsHeight}
                    id="Contact"
                />
                </div>
                
            </div>

            <SocialLink
                className="d-flex justify-content-around"
                // style={{
                //     position: "relative",
                //     width: 100+"vw",
                //     bottom: 1+"vh",
                //     left: 0
                // }}
                logoClassName="m-1"
                logoStyle={{
                    width: 50+"px"
                }}
            />

            
            {/* <div className="col" style={{width: 100+"%", height:"fit-content"}}>
                
            </div> */}
        </div>
        </>
    );
}

export default Phone;