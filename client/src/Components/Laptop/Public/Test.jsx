import React from "react";
import ProjectButton from "./ProjectButton";

const Test = props =>{
    const projectsList = [
        { 
            title: "vanhoagroup",
            logo: "/images/project/vanhoagroupicon.png"
        },
        { 
            title: "The Flashcards Game",
            logo: "/images/project/flashcardsgameicon.png"
        },
        { 
            title: "My Portfolio",
            logo: "/images/project/portfolioicon.png"
        }
    ];


    return(
        <div className={`${props.className} d-flex justify-content-between flex-nowrap`} style={props.style}>   
            {projectsList.map((e,i)=><>
                <ProjectButton
                    key={i}
                    title={e.title}
                    logo={e.logo}
                />
            </>)}
            <ProjectButton end= {true} />
        </div>
    );
}

export default Test;