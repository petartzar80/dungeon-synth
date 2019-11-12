import React, { useState, useEffect } from "react";
export default function Game({ close }) {
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
            <div className={`modal-container modal-intro ${slide}`}>
                <div className="adventure-left-div">
                    <div className="adventure-image">
                        <img src="/img/blinko.jpg" />
                    </div>
                    <div className="inventory">inventory</div>
                </div>

                <div className="intro-content">
                    <p className="close" onClick={off}>
                        X
                    </p>
                    <div className="description"></div>
                    <div className="info" id="door-info"></div>
                    <div className="info" id="item-info"></div>
                    <div className="info" id="action-info"></div>
                    <div className="action"></div>
                </div>
            </div>
        </div>
    );
}
