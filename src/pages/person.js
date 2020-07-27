import React from "react";
import { graphql } from "gatsby";

const Person = ({ data }) => {
    console.log (data.customApi)
    return <>
        <h1>{data.customApi.name}</h1>;
        <ul>
            <li>{data.customApi.gender}</li>
            <li>Hair is {data.customApi.hair_color}</li>
            <li>Skin is {data.customApi.skin_color}</li>
            <li>Eyes are {data.customApi.eye_color}</li>
        </ul>
        </>
};

export const query = graphql`
    query($url: String) {
        customApi(url: { eq: $url }) {
            url
            name
            gender
            hair_color
            skin_color
            eye_color
        }
    }
`;

export default Person;