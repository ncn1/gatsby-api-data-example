import React from "react";
import { graphql } from "gatsby";

const Post = ({ data }) => {
    return <>
        <h1>{data.posts.name}</h1>;
        </>
};

export const query = graphql`
    query($url: String) {
        posts(url: { eq: $url }) {
            url
            name
            gender
            homeworld
            films
            starships
        }
    }
`;

export default Post;