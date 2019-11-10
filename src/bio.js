import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Bio() {
    console.log("bio here: ");
    const [slide, setSlide] = useState();
    useEffect(() => {
        setSlide("on");
    }, []);

    function off() {
        setSlide("off");
        history.push("/");
    }

    return (
        <div>
            <div className={`modal-container ${slide}`}>
                <div className="modal-content">
                    <p className="close" onClick={off}>
                        X
                    </p>
                    <p>
                        The name Z'Galgah belongs to an archaic Croatian
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
