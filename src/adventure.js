import React, { useState, useEffect } from "react";
import IntroScreen from "./intro-screen";
import Game from "./game";

export default function Adventure({ close }) {
    const [slide, setSlide] = useState();
    const [game, setGame] = useState();
    useEffect(() => {
        setGame(false);
        setSlide("on");
    }, []);

    // function off() {
    //     setSlide("off");
    //     setTimeout(() => {
    //         close();
    //     }, 1000);
    // }

    return (
        <div>
            {!game && (
                <IntroScreen close={close} renderGame={() => setGame(true)} />
            )}
            {game && <Game close={close} renderIntro={() => setGame(false)} />}
        </div>
    );
}
