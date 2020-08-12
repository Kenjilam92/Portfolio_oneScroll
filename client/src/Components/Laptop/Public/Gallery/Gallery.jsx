import React, {useState} from "react";
import GalleryItems from "./GalleryItems";
import Modal from "../../../General/Modal";
const Gallery = props =>{
    
    const [Img,setImg]= useState("");
    const [ImgAlt,setImgAlt] =useState("");
    const list = props.list;
    const getImgLink = e =>{
        console.log(e);
        list.filter(img => img.imglink===e).map((e,i) => {
            setImg(e.imglink);
            setImgAlt(e.imgalt);
        });
    };
    return(
        <div className={`${props.className}`} style={props.style}>
            {list.map( (e,i) =>
                <>
                    <GalleryItems
                        key={i}
                        className={props.itemClassName}
                        style={props.itemStyle}
                        title={e.desc}
                        imgLink={e.imglink}
                        imgAlt={e.imgalt}
                        clicked={getImgLink}
                        dataToggle="modal" 
                        dataTarget="#showImage"
                    />
                </>
            )}
            <Modal ModalId="showImage">
                <div className="d-flex flex-column justify-content-start align-items-end" 
                style={{height: 85+"vh", width: 85+"vw"}}>
                    <button type="button " 
                            className="btn btn-danger font-weight-bold" 
                            data-dismiss="modal"
                            // style={closeButton}
                            >&times;
                    </button>

                    <div className="w-100 h-fit d-flex justify-content-center align-items-start bg-dark" >
                        <img className="" 
                             style={{
                                 maxWidth: 100+"%",
                                //  minHeight: 100+"%",

                                objectFit: "scale-down"
                             }} 
                            src={Img} 
                            alt={ImgAlt}/>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Gallery;