import React, {useState} from "react";
import GalleryItems from "./GalleryItems";
import Modal from "../../General/Modal";
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
                        title={e.desc}
                        imgLink={e.imglink}
                        imgAlt={e.imgalt}
                        clicked={getImgLink}
                        dataToggle="modal" 
                        dataTarget="#showImage"
                    />
                </>
            )}
            <Modal footer={false} ModalId="showImage">
                <img src={Img} alt={ImgAlt}/>
            </Modal>
        </div>
    );
}

export default Gallery;