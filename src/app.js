import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import Bio from "./bio";

export default function App() {
    console.log("app here: ");
    const [slide, setSlide] = useState();
    useEffect(() => {
        setSlide("off");

        // (async () => {
        //     console.log("app useEffect");
        // })();
    }, []);
    console.log("slide: ", slide);

    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <header className="border">
                        <div className="logo">
                            <img src="./img/logo.png" alt="" />
                        </div>
                        <div className="navbar">
                            <Link to={`/bio/`}>
                                <button className="custom-button" name="button">
                                    BIO
                                </button>
                            </Link>
                            <Link to={`/`}>
                                <button className="custom-button" name="button">
                                    GALLERY
                                </button>
                            </Link>
                            <Link to={`/`}>
                                <button className="custom-button" name="button">
                                    INFLUENCE
                                </button>
                            </Link>
                            <Link to={`/`}>
                                <button className="custom-button" name="button">
                                    ADVENTURE
                                </button>
                            </Link>
                        </div>
                    </header>
                    <div className="content">
                        <img
                            className="bg-image"
                            src="./img/background.png"
                            alt=""
                        />
                        <div>
                            <p>content</p>
                            {slide === "off" && (
                                <div>
                                    <Route exact path="/bio/" component={Bio} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

// <iframe
//     style="border: 0; width: 100%; height: 120px;"
//     src="https://bandcamp.com/EmbeddedPlayer/album=2944078936/size=large/bgcol=000000/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
//     seamless
// >
//     <a href="http://pathofsilence.bandcamp.com/album/d-th-chealtair">
//         Dìth Chealtair by Cloak &amp; Daggere
//     </a>
// </iframe>
