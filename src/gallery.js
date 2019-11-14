import React, { useState, useEffect } from "react";
import GalleryModal from "./gallery-modal";
export default function Gallery({ close }) {
    console.log("close: ", close);
    console.log("gallery here: ");
    const [slide, setSlide] = useState();
    const [imgModal, setImgModal] = useState();
    const [imgSrc, setImgSrc] = useState();
    useEffect(() => {
        setSlide("on");
    }, []);

    function off() {
        setSlide("off");
        setTimeout(() => {
            close();
        }, 1000);
    }

    function openModal(e) {
        console.log("testing gallery click, e : ", e.target.src);
        let splitSrc = e.target.src.split("8080");
        console.log("split src ", splitSrc[1]);
        setImgSrc(splitSrc[1]);
        setImgModal(true);
    }

    console.log("img src: ", imgSrc);
    console.log("img modal: ", imgModal);

    return (
        <div>
            <div className={`modal-container ${slide}`}>
                <div className="modal-content">
                    <div className="modal-grid">
                        <div className="modal-header">
                            <p className="modal-name">
                                The past that never was
                            </p>
                            <p className="close" onClick={off}>
                                X
                            </p>
                        </div>
                        <div className="modal-row">
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/Dome.jpg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>Dome</p>
                                </div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/Mausoleum.jpg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>Mausoleum</p>
                                </div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/Procession.jpg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>Procession</p>
                                </div>
                            </div>
                        </div>
                        <p className="modal-name">The present that never is</p>
                        <div className="modal-row">
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/Meander.jpg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>Meander</p>
                                </div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/Mirror.jpg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>Mirror</p>
                                </div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/Submission.jpg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>Submission</p>
                                </div>
                            </div>
                        </div>
                        <p className="modal-name">
                            The future that will never be
                        </p>
                        <div className="modal-row">
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/elia.jpg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>La Citta Nuova</p>
                                </div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/tatlin.jpg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>Tatlin's Tower</p>
                                </div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img
                                        src="/img/gallery/dadakopf.jpeg"
                                        onClick={e => openModal(e)}
                                    />
                                </div>
                                <div className="modal-card-desc">
                                    <p>dada-Kopf</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {imgModal == true && (
                <GalleryModal
                    imgUrl={imgSrc}
                    close={() => setImgModal(false)}
                />
            )}
        </div>
    );
}

// close={setImgModal(false)}
