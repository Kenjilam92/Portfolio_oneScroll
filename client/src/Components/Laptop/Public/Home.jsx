import React from 'react';
import ScrollableSection, { ScrollableLink } from "react-scrollable-url";
const Home = props => {
    // const Title = {
    //     textAlign: "center",
    //     color: "white",
    //     backgroundColor: "none",
    // };
    return(
        <div className={`${props.className}`}style={props.style}>
            <h1>Kenji Lam</h1>
            <p>Digital Marketing Specialist </p>
            <ScrollableLink href="/aboutme">
            <button className={`${props.Theme.btn}`}>
                About me
            </button>
            </ScrollableLink>
        </div>
    );
}

export default Home;
