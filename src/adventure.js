import React, { useState, useEffect } from "react";
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
            <div className={`modal-container ${slide}`}>
                <div className="modal-content">
                    <p className="close" onClick={off}>
                        X
                    </p>
                    <p>Adventure</p>
                </div>
            </div>
        </div>
    );
}
