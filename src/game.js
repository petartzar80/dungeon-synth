import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Game({ close, renderIntro }) {
    const [slide, setSlide] = useState();
    const [location, setLocation] = useState();
    const [action, setAction] = useState();
    const [object, setObject] = useState();
    const [newLocation, setNewLocation] = useState();
    const [submit, setSubmit] = useState();
    const [actionMessage, setActionMessage] = useState();
    const [candleInv, setCandleInv] = useState();
    const [keyInv, setKeyInv] = useState();

    useEffect(() => {
        setSlide("on");

        (async () => {
            setSubmit(true);
            setActionMessage("What is your next move?");
            const { data } = await axios.get(`/location/13`);
            console.log("data: ", data);
            setLocation(data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setAction("");
            setObject("");
            console.log("new location: ", newLocation);
            if (newLocation == "error") {
                setActionMessage("You can't do that. What is your next move?");
            }
            const { data } = await axios.get(`/location/${newLocation}`);
            console.log("data: ", data);
            setLocation(data);
            if (location.grid_id == 1) {
                console.log("set it here");
            }
            setActionMessage("What is your next move?");
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
        console.log("location door state: ", location.door_state);

        if (
            action != "go" ||
            action != "take" ||
            action != "use" ||
            action != "open" ||
            object != "n" ||
            object != "s" ||
            object != "w" ||
            object != "e" ||
            object != "key" ||
            object != "door" ||
            object != "candle"
        ) {
            setActionMessage("You can't do that. What is your next move?");
        }

        if (
            (location.door_state == null && action == "go") ||
            (location.door_state == "open" && action == "go") ||
            (location.door_state != "open" &&
                location.door_to != object &&
                action == "go")
        ) {
            if (object == "n" && location.n) {
                setNewLocation(location.n);
            } else if (object == "s" && location.s) {
                setNewLocation(location.s);
            } else if (object == "w" && location.w) {
                setNewLocation(location.w);
            } else if (object == "e" && location.e) {
                setNewLocation(location.e);
            } else {
                setNewLocation("error");
            }
        } else {
            setNewLocation("test");
        }

        if (action == "take") {
            if (object == "candle" && location.item == "candle" && !candleInv) {
                setCandleInv(true);
                setActionMessage("What is your next move?");
            } else if (object == "key" && location.item == "key" && !keyInv) {
                setKeyInv(true);
                setActionMessage("What is your next move?");
            } else {
                setActionMessage("You can't do that. What is your next move?");
            }
        }

        if (action == "open") {
            if (object == "door") {
                console.log("Location in open door: ", location);
                if (location.door_state != "locked") {
                    setLocation({
                        ...location,
                        door_state: null,
                        door_nfo: "The door is now open."
                    });
                    setActionMessage("What is your next move?");
                } else {
                    setActionMessage("Try using the key.");
                }
            } else {
                setNewLocation("error");
            }
        }

        if (action == "use") {
            if (object == "key" && keyInv == true) {
                if (location.door_state == "locked") {
                    setLocation({
                        ...location,
                        door_state: "closed",
                        door_nfo: "The door is unlocked."
                    });
                    setActionMessage("What is your next move?");
                } else {
                    setNewLocation("error");
                }
            } else if (object == "candle" && candleInv) {
                if (location.grid_id == 6) {
                    setNewLocation(1);
                } else {
                    setNewLocation("error");
                }
            } else {
                setNewLocation("error");
            }
        }

        document.activeElement.blur();

        console.log("door state: ", location.door_state);
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
                        <img
                            className="game-img"
                            src={`/img/game/${location.grid_id}.png`}
                        />
                    </div>
                    <div className="inventory">
                        <p>INVENTORY: </p>
                        {keyInv && <p>KEY</p>}
                        {candleInv && <p>CANDLE</p>}
                    </div>
                </div>

                <div className="intro-content">
                    <p className="close" onClick={off}>
                        X
                    </p>
                    <div className="description">
                        <p>{location.dscrpt}</p>
                    </div>
                    <div className="info" id="door-info">
                        {location.door_to && <p>{location.door_nfo}</p>}
                    </div>
                    <div className="info" id="item-info">
                        {((!candleInv && location.item == "candle") ||
                            (!keyInv && location.item == "key")) && (
                            <p>{location.item_nfo}</p>
                        )}
                    </div>
                    <div className="info" id="action-info">
                        {location.grid_id != 2 && <p>{actionMessage}</p>}
                    </div>
                    <div className="action">
                        {location.grid_id != 2 && location.grid_id != 23 && (
                            <React.Fragment>
                                <input
                                    type="text"
                                    id="action-input"
                                    name="action-input"
                                    placeholder="action"
                                    className="action-input"
                                    autoComplete="off"
                                    value={action}
                                    onChange={e => setAction(e.target.value)}
                                />
                                <input
                                    type="text"
                                    id="action-object"
                                    name="action-object"
                                    placeholder="object"
                                    className="action-input"
                                    autoComplete="off"
                                    value={object}
                                    onChange={e => setObject(e.target.value)}
                                />
                                <button
                                    className="custom-button"
                                    onClick={actObj}
                                >
                                    SUBMIT
                                </button>
                            </React.Fragment>
                        )}
                        {location.grid_id == 2 && (
                            <button
                                className="custom-button restart"
                                onClick={renderIntro}
                            >
                                RESTART
                            </button>
                        )}
                        {location.grid_id == 23 && (
                            <button
                                className="custom-button restart"
                                onClick={close}
                            >
                                SNUFF IT
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
