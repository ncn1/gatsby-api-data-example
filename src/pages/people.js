import React from "react";
import {Character} from '../components/Character';
import { graphql } from "gatsby";

const People = ({ data }) => {
    const peopleList = () => {
        return data.customApi.results.map(person => {
                return (
                    <Character
                        person={person}
                    />)

        })
    };
    return <>
        {peopleList()}
        </>
};

export const query = graphql`
    query {
        customApi {
            results {
                name
                gender
                eye_color
                hair_color
                skin_color
            }
        }
    }
`;

export default People;