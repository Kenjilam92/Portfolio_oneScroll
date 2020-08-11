import React from "react";
import ProjectButton from "./ProjectButton";
import ProjectDetails from "./ProjectDetails";
import Carousel from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Test = props =>{
    const projectsList = [
        { 
            title: "vanhoagroup",
            logo: "/images/project/vanhoagroup/vanhoagroupicon.png"
        },
        { 
            title: "The Flashcards Game",
            logo: "/images/project/flashcard/flashcardsgameicon.png"
        },
        { 
            title: "My Portfolio",
            logo: "/images/project/myportfolio/portfolioicon.png"
        }
    ];

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     autoplay: true,
    //     speed: 1000,
    //     autoplaySpeed: 10,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     swipe: true,
    //     arrows: true,
    //     focusOnSelect: true
    // };

    return(
        <div className={`${props.className} d-flex`} style={props.style}>
            <ProjectDetails
                className="text-white"
                Theme={props.Theme}
            />
            <div className="">
                {/* <Carousel {...settings}> */}
                {/* </Carousel>   */} 
                {projectsList.map((e,i)=><>
                    <ProjectButton
                        key={i}
                        title={e.title}
                        logo={e.logo}
                    />
                </>)}
                <ProjectButton end= {true} />
            </div>
            
        </div>
    );
}

export default Test;