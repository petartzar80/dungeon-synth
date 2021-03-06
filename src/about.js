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
                        The name Z'Galgah comes from an archaic Croatian
                        dialect. More precisely, it's derived from the lyric of
                        a poem written in that dialect. The lyric goes:
                        "Z'galgah se nigdo povernul ni", which roughly
                        translates as: "From the gallows nobody returned".
                    </p>
                </div>
            </div>
        </div>
    );
}
