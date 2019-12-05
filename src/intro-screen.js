import React, { useState, useEffect } from "react";
export default function IntroScreen({ close, renderGame }) {
    console.log("renderGame: ", renderGame);
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
                <div className="intro-image">
                    <img src="/img/bird.png" />
                </div>
                <div className="intro-content">
                    <p className="close" onClick={off}>
                        X
                    </p>
                    <div className="instructions">
                        <p className="instructions title">INSTRUCTIONS</p>
                        <p>Actions you can perform: GO / TAKE / OPEN / USE</p>
                        <p>
                            Directions you can take: (n)orth / (s)outh / (w)est
                            / (e)ast
                        </p>
                        <p>- use only the first letter of the direction.</p>
                        <p>
                            Take notice of the objects you encounter (like
                            candles or such).
                        </p>
                    </div>
                    <p>
                        Your mind is fuzzy and you feel the grip of anxiety. Are
                        you sure you want to open your eyes?
                    </p>
                    <button
                        className="custom-button intro"
                        onClick={renderGame}
                    >
                        NO!
                    </button>
                </div>
                <div className="intro-button-area"></div>
            </div>
        </div>
    );
}
