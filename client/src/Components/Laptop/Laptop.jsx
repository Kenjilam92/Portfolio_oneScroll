import React from "react";

// import ProjectList from "./Public/ProjectList";
import Contact from "./Public/Contact";
import Aboutme from "./Public/AboutMe";
import Home from "./Public/Home";
import Projects from "./Public/Projects/Projects";
import Menu from "./Public/Menu";
import SocialLink from "./Public/SocialLink";

const Laptop = props =>{
    const img1 = "/images/kenjilam_baltimore.jpg";
    const backGround = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img1}")`,
        width: 100+"vw",
        height: 100+"vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "scroll",
    };

    const SectionsHeight = {
        width: 100+"%",
        minHeight: 70+"vh",
        marginBottom: 30+"vh",
    }

    ///////Menu
    const MenuAPI =[
        {
            title: "Home",
            id: "MenuHome",
            section: "Home",
            url: "/"
        },
        {
            title: "About Me",
            id: "MenuAboutMe",
            section: "AboutMe",
            url: "/aboutme"
        },
        {
            title: "Projects",
            id: "MenuProjects",
            section: "Projects",
            url: "/projects"
        },
        {
            title: "Contact",
            id: "MenuContact",
            section: "Contact",
            url: "/contact"
        }
    ]
    
    const showSection = (e) =>{
        var selectedLocation = document.getElementById(e);
        selectedLocation.scrollIntoView({ behavior: "smooth" });
    }

    ///////Render
    return(
        <>  
        <div className="d-flex flex-column align-items-end pr-3" style={backGround}>   
            <Menu 
                API= {MenuAPI}
                Theme= {props.Theme}
                className="d-flex flex-column m-1 "
                buttonClassName="p-1 m-1"
                rotateText="rotateLeft text-nowrap"
                click={showSection}
                style={{
                    position: "fixed",
                    width: "fit-content",
                    height: "fit-content",
                    top:0,
                    left:0,
                    zIndex: 5
                }}   
            />

            <SocialLink
                className="d-flex flex-column position-fixed"
                style={{
                    bottom: 1+"vh",
                    left: 0
                }}
                logoClassName="close m-1"
                logoStyle={{
                    width: 50+"px"
                }}
            />

            <Home
                className="text-white text-center text-nowrap pt-5 w-100" 
                Theme={props.Theme}
                style={SectionsHeight
                }
                id="Home"
                click={showSection}
            />

            <div className="col" style={{width: 65+"vw", height:"fit-content", position:"relative", right:0}}>
                <Aboutme
                    className="text-white"
                    style={SectionsHeight} 
                    id="AboutMe"
                />

                <Projects
                    className="text-white"
                    style={SectionsHeight}
                    Theme={props.Theme}
                    id="Projects"
                />

                <Contact
                    className="text-white "
                    Theme={props.Theme}
                    style={SectionsHeight}
                    id="Contact"
                />
            </div>
        </div>
        </>
    );
}

export default Laptop;