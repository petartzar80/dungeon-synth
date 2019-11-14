import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import BandcampPlayer from "react-bandcamp";
import About from "./about";
import Gallery from "./gallery";
import Reference from "./reference";
import Adventure from "./adventure";

export default function App() {
    console.log("app here: ");
    const [visible, setVisible] = useState();
    const [component, setComponent] = useState();
    useEffect(() => {
        setVisible(false);
        console.log("setVisible: ", setVisible);
    }, []);

    const toggleModalIsVisible = e => {
        console.log("e: ", e.target.name);
        setComponent(e.target.name);
        setVisible(!visible);
    };

    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <header className="border">
                        <div className="logo">
                            <img src="./img/Zgalgah.png" alt="" />
                        </div>
                        <div className="navbar">
                            <button
                                onClick={e => toggleModalIsVisible(e)}
                                className="custom-button"
                                name="about"
                            >
                                ABOUT
                            </button>

                            <button
                                onClick={e => toggleModalIsVisible(e)}
                                className="custom-button"
                                name="gallery"
                            >
                                GALLERY
                            </button>

                            <button
                                onClick={e => toggleModalIsVisible(e)}
                                className="custom-button"
                                name="reference"
                            >
                                REFERENCE
                            </button>

                            <button
                                onClick={e => toggleModalIsVisible(e)}
                                className="custom-button"
                                name="adventure"
                            >
                                ADVENTURE
                            </button>
                        </div>
                    </header>
                    <div className="content">
                        <img
                            className="bg-image"
                            src="./img/background.png"
                            alt=""
                        />
                        {visible && component == "about" && (
                            <About close={() => setVisible(false)} />
                        )}
                        {visible && component == "gallery" && (
                            <Gallery close={() => setVisible(false)} />
                        )}
                        {visible && component == "reference" && (
                            <Reference close={() => setVisible(false)} />
                        )}
                        {visible && component == "adventure" && (
                            <Adventure close={() => setVisible(false)} />
                        )}
                    </div>
                </div>
                <div className="bandcamp-player">
                    <BandcampPlayer
                        album="2944078936"
                        bgcol="000000"
                        linkcol="rgb(0, 254, 0)"
                    />
                </div>
            </BrowserRouter>
        </div>
    );
}
