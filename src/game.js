import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Game({ close }) {
    const [slide, setSlide] = useState();
    const [location, setLocation] = useState();
    const [action, setAction] = useState();
    const [object, setObject] = useState();
    const [newLocation, setNewLocation] = useState();
    const [submit, setSubmit] = useState();
    const [actionMessage, setActionMessage] = useState();

    useEffect(() => {
        (async () => {
            setSubmit(true);
            setSlide("on");
            setActionMessage("What are you going to do?");
            const { data } = await axios.get(`/location/13`);
            console.log("data: ", data);
            setLocation(data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setAction("");
            setObject("");
            // if (newLocation == null) {
            //     setActionMessage(
            //         "You can't do that. What are you going to do?"
            //     );
            // }
            const { data } = await axios.get(`/location/${newLocation}`);
            console.log("data: ", data);
            setLocation(data);
        })();
    }, [submit]);

    if (!location) {
        return null;
    }

    console.log("location: ", location);
    console.log("location.n: ", location.n);

    const actObj = () => {
        setSubmit(!submit);
        console.log("actObj location.n: ", location.n);
        console.log("action: ", action);
        console.log("object: ", object);
        // if (action == "go") {
        //     setNewLocation(`${object}`);
        // }
        if (action == "go") {
            if (object == "n") {
                setNewLocation(location.n);
            } else if (object == "s") {
                setNewLocation(location.s);
            } else if (object == "w") {
                setNewLocation(location.w);
            } else if (object == "e") {
                setNewLocation(location.e);
            }
        }
    };

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
                        <p>{location.dscrpt}</p>
                    </div>
                    <div className="info" id="door-info">
                        {location.door_to && (
                            <p>
                                {location.door_nfo} {location.door_state}{" "}
                                {location.door_to}
                            </p>
                        )}
                    </div>
                    <div className="info" id="item-info">
                        {location.item && <p>{location.item_nfo}</p>}
                    </div>
                    <div className="info" id="action-info">
                        <p>{actionMessage}</p>
                    </div>
                    <div className="action">
                        <input
                            type="text"
                            id="action-input"
                            name="action-input"
                            placeholder="action"
                            className="action-input"
                            value={action}
                            onChange={e => setAction(e.target.value)}
                        />
                        <input
                            type="text"
                            id="action-object"
                            name="action-object"
                            placeholder="object"
                            className="action-input"
                            value={object}
                            onChange={e => setObject(e.target.value)}
                        />
                        <button className="custom-button" onClick={actObj}>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
