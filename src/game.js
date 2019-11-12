import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Game({ close }) {
    const [slide, setSlide] = useState();
    const [location, setLocation] = useState();
    useEffect(() => {
        setSlide("on");
        (async () => {
            const { data } = await axios.get(`/location/12`);
            console.log("data: ", data);
            setLocation(data);
        })();
    }, []);

    if (!location) {
        return null;
    }

    console.log("location: ", location);

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
                    <div className="description">
                        <p>I'm at the location number {location.grid_id}</p>
                    </div>
                    <div className="info" id="door-info">
                        {location.door_loc && (
                            <p>Door leads to location {location.door_loc}</p>
                        )}
                    </div>
                    <div className="info" id="item-info">
                        {location.item && (
                            <p>On this location there is a {location.item}</p>
                        )}
                    </div>
                    <div className="info" id="action-info"></div>
                    <div className="action"></div>
                </div>
            </div>
        </div>
    );
}
