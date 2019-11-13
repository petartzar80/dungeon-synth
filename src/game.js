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
    const [candleInv, setCandleInv] = useState();
    const [keyInv, setKeyInv] = useState();

    useEffect(() => {
        (async () => {
            setSubmit(true);
            setSlide("on");
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
        if (action == "go") {
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
        }

        if (action == "take") {
            if (object == "candle" && location.item == "candle") {
                setCandleInv(true);
            } else if (object == "key" && location.item == "key") {
                setKeyInv(true);
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
                        {!candleInv && location.item && (
                            <p>{location.item_nfo}</p>
                        )}
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
