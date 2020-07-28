import React from "react";
import {naExpand} from '../utils/common';

const Character = ({ person }) => {
    return <div>
        <h2>{person.name}</h2>
        <ul>
            <li>Gender is {naExpand(person.gender)}</li>
            <li>Hair is {naExpand(person.hair_color)}</li>
            <li>Skin is {naExpand(person.skin_color)}</li>
            <li>Eyes are {naExpand(person.eye_color)}</li>
        </ul>
    </div>
};

export {Character};