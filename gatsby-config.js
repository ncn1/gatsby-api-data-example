/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-custom-api`,
      options: {
        url: `http://swapi.dev/api/people/1/`,
        /*rootkey: `customApi`,
        schemas: {
          customApi:`
             name: String,
             height: Int,
             mass: Int,
             hair_color: String,
             skin_color: String,
             eye_color: String,
             birth_year: String,
             gender: String,
             homeworld: String,
             films: [String],
             species: [String],
             vehicles:[ String],
             starships: [String],
             created: String,
             edited: String,
             url: String
          `
        }*/
      }
    }
  ]
};
