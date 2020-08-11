import React from "react";
import Card from "../../General/Card"
import Gallery from "./Gallery";

const ProjectDetails = props => {
    const detailStyle = {
        position: "relative",
        top: (-3)+"vh"
    };
    const projectName = "vanhoagroup";

    const projects = [
        {
            title: "vanhoagroup",
            url: "http://vanhoagroup.com",
            features: [
                'Mobile - Friendly',
                'A commercial project that was built by using online building platform Wix.com',
                'SEO strategies is applied ',
                'Located at top 3 of Google Search Results with the keyword - “moc khoa cao su”, which mean “rubber keychain” in Vietnamese'
            ],
            technologies:[
                {
                    imglink:"/images/skill/wix.png",
                    imgalt: "Wix.com",
                    techName: "Wix"
                },
                {   
                    imglink: "/images/skill/seo.png",
                    imgalt: "seo",
                    techName: "SEO"
                },
                {   
                    imglink: "/images/skill/googleads.png",
                    imgalt: "GoogleAdwords",
                    techName: "Google Adwords"
                },
                {   
                    imglink: "/images/skill/facebookads.png",
                    imgalt: "FacebookAds",
                    techName: "Facebook Ads"
                }
            ],
            images:[
                {
                    imglink:"/images/project/vanhoagroup/vanhoagroup.png",
                    imgalt: "vanhoagroup.com",
                    desc: "" 
                },
                {
                    imglink:"/images/project/vanhoagroup/seoresult.png",
                    imgalt: "vanhoagroup.com",
                    desc: "" 
                },
                {
                    imglink:"/images/project/vanhoagroup/viewproduct.png",
                    imgalt: "vanhoagroup.com",
                    desc: "" 
                },
                {
                    imglink:"/images/project/vanhoagroup/products.png",
                    imgalt: "vanhoagroup.com",
                    desc: "" 
                },
                {
                    imglink:"/images/project/vanhoagroup/page.png",
                    imgalt: "vanhoagroup.com",
                    desc: "" 
                },
                {
                    imglink:"/images/project/vanhoagroup/mobileverson.png",
                    imgalt: "vanhoagroup.com",
                    desc: "" 
                }
            ]
        }
    ]

    return (
        <div className={`${props.className} d-flex flex-column w-100 p-2`} style={props.style}>
            <nav className="btn-group align-self-end">
                <span className={`${props.Theme.btn} `}>
                    Details
                </span>
                <span className={`${props.Theme.btn} `}>
                    Images
                </span>
            </nav>
            
            <div className="border border-primary p-2">
            { projects.filter( e => e.title === projectName ).map( (e,i) => 
                <>
                    <p className="h2" key={i}>
                        <a className="text-warning" href={e.url}>{e.title}</a>
                    </p>
                    <ul style={{marginLeft:  (-25)+"px"}}>
                        {e.features.map((f,j)=>
                            <li key={j} >{f}</li>
                        )}
                    </ul>
                    <p className="h5 font-weight-bold text-warning">Technologies:</p>
                    <div className="d-flex w-100 overflow-auto">
                        {e.technologies.map((t,k) =>
                            <>
                                <Card imglink={t.imglink} imgalt={t.imgalt}>{t.techName}</Card>
                            </>
                        )}
                    </div>
                    <Gallery
                        className="row"
                        itemClassName="col col-md-6 col-xl-4"
                        list={e.images}
                    />
                </>
            )}  
            </div>
            
        </div>
    );
}

export default ProjectDetails;