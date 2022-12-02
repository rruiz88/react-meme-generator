import React from "react";
import Troll from "../troll-face.png"

function Header() {
return (
    <header className="banner">
        <img src={Troll} className="troll"/>
    <h2 className="header--title">Meme Generator</h2>
    <h4 className="header--project">React Course - Project 3</h4>
    </header>
)
}

export default Header;