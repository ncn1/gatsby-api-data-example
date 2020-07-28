import React from "react";

const Character = ({ person }) => {
    return <div>
        <h2>{person.name}</h2>
        <ul>
            <li>{person.gender}</li>
            <li>Hair is {person.hair_color}</li>
            <li>Skin is {person.skin_color}</li>
            <li>Eyes are {person.eye_color}</li>
        </ul>
    </div>
};

export {Character};