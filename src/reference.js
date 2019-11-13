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
                            <p className="modal-name">Literature</p>
                            <p className="close" onClick={off}>
                                X
                            </p>
                        </div>
                        <div className="modal-row">
                            <a
                                rel="noopener noreferrer"
                                href="https://en.wikisource.org/wiki/Author:Algernon_Blackwood"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/A_Blackwood.jpg" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>A. Blackwood</p>
                                    </div>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://en.wikisource.org/wiki/Author:Ambrose_Gwinnett_Bierce"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/A_Bierce.jpg" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>A. Bierce</p>
                                    </div>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://en.wikisource.org/wiki/Author:Arthur_Machen"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/Machen.jpg" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>A. Machen</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className="modal-name">Music</p>
                        <div className="modal-row">
                            <a
                                rel="noopener noreferrer"
                                href="https://pathofsilence.bandcamp.com/album/d-th-chealtair"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/Cloak.jpg" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>Cloak & Daggere</p>
                                    </div>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://rowen.bandcamp.com/"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/Rowen.jpg" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>Rowen</p>
                                    </div>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://diplodocus.bandcamp.com/"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/Diplodocus.jpg" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>Diplodocus</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className="modal-name">Tools</p>
                        <div className="modal-row">
                            <a
                                rel="noopener noreferrer"
                                href="https://www.reaper.fm/"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/Reaper.png" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>Reaper</p>
                                    </div>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="http://www.vst4free.com/free_vst.php?id=2816"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/Arminator.jpg" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>Arminator</p>
                                    </div>
                                </div>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://www.korg-volca.com/en/"
                                target="_blank"
                                className="no-decoration"
                            >
                                <div className="modal-card">
                                    <div className="modal-card-window">
                                        <img src="/img/reference/Volca.jpg" />
                                    </div>
                                    <div className="modal-card-desc">
                                        <p>Korg Volca</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
