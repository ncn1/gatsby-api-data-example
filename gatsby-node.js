const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allPosts {
                nodes {
                    url
                }
            }
        }
    `);
    return Promise.all(
        result.data.allPosts.nodes.map(async node => {
            await createPage({
                path: node.url,
                component: path.resolve("./src/pages/post.js"),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    url: node.url
                }
            });
        })
    );
};