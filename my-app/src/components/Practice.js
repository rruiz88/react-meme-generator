import React from "react";
import trollFace from "../troll-face.png"

function Practice() {
    const [contact, setContact] = React.useState({
        firstName: "Roman",
        lastName: "Ruiz",
        phone: "816-555-5555",
        email: "roman@me.com",
        isFavorite: true
    })

    let starName = contact.isFavorite ? "Star" : "Not favorite";

    function toggleFavorite() {
        setContact(prevState => {
            return {
                ...prevState,
                isFavorite: !prevState.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img src= {trollFace}/>
                <div className="card--info">
                <h1 className="star" onClick={toggleFavorite}>{starName}</h1>
                </div>
            </article>
        </main>

    )

}

export default Practice;