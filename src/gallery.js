import React, { useState, useEffect } from "react";
export default function Gallery({ close }) {
    console.log("close: ", close);
    console.log("gallery here: ");
    const [slide, setSlide] = useState();
    useEffect(() => {
        setSlide("on");
    }, []);

    function off() {
        setSlide("off");
        setTimeout(() => {
            close();
        }, 1000);
    }

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
                                <div className="modal-card-window"></div>
                                <div className="modal-card-desc"></div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window"></div>
                                <div className="modal-card-desc"></div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window"></div>
                                <div className="modal-card-desc"></div>
                            </div>
                        </div>
                        <p className="modal-name">The present that never is</p>
                        <div className="modal-row">
                            <div className="modal-card">
                                <div className="modal-card-window"></div>
                                <div className="modal-card-desc"></div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window"></div>
                                <div className="modal-card-desc"></div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window"></div>
                                <div className="modal-card-desc"></div>
                            </div>
                        </div>
                        <p className="modal-name">
                            The future that will never be
                        </p>
                        <div className="modal-row">
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img src="/img/gallery/elia.jpg" />
                                </div>
                                <div className="modal-card-desc">
                                    <p>La Citta Nuova</p>
                                </div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img src="/img/gallery/tatlin.jpg" />
                                </div>
                                <div className="modal-card-desc">
                                    <p>Tatlin's Tower</p>
                                </div>
                            </div>
                            <div className="modal-card">
                                <div className="modal-card-window">
                                    <img src="/img/gallery/dadakopf.jpeg" />
                                </div>
                                <div className="modal-card-desc">
                                    <p>dada-Kopf</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
