import React, { useState, useEffect } from "react";
export default function Reference({ close }) {
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
                            <p className="modal-name">Reference</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
