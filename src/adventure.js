import React, { useState, useEffect } from "react";
import IntroScreen from "./intro-screen";
import Game from "./game";

export default function Adventure({ close }) {
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
            <Game close={close} />
        </div>
    );
}
