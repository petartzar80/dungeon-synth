import React, { useState, useEffect } from "react";
export default function Game({ close }) {
    const [slide, setSlide] = useState();
    useEffect(() => {
        setSlide("on game");
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
                    <p>
                        Your mind is fuzzy and you feel the grip of anxiety. Are
                        you sure you want to open your eyes?
                    </p>
                </div>
            </div>
        </div>
    );
}
