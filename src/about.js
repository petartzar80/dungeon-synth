import React, { useState, useEffect } from "react";
export default function About({ close }) {
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
            <div className={`modal-container modal-bio ${slide}`}>
                <div className="modal-image">
                    <img src="/img/bird.png" />
                </div>
                <div className="modal-content">
                    <p className="close" onClick={off}>
                        X
                    </p>
                    <p>
                        The name Z'Galgah comes from a lyric in an archaic
                        Croatian dialect: "Z'galgah se nigdo povernul ni", which
                        translates as: "From the gallows nobody returned". To
                        listen to music click on the skull on the left, to
                        download the demo - finish the adventure game.
                    </p>
                </div>
            </div>
        </div>
    );
}
