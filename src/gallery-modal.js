import React, { useEffect } from "react";

export default function GalleryModal({ imgUrl, close }) {
    console.log("modal imgUrl: ", imgUrl);
    console.log("modal close: ", close);
    console.log("gallery-modal here: ");
    useEffect(() => {
        console.log("useEffect here");
    }, []);

    return (
        <div>
            <div className="gallery-modal" onClick={close}>
                <div className="gallery-modal-overlay">
                    <img src={imgUrl} />
                </div>
            </div>
        </div>
    );
}
