/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Quentin Petit`,
    description: `Explore the dynamic world of Quentin PETIT, a 20-year-old Electronics Engineering student and visionary behind Ingely`,
    image: `/favicon.png`,
    siteUrl: `https://www.quentinptt.fr`,
  },
  plugins: ["gatsby-plugin-postcss",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /assets/ // See below to configure properly
      }
    }
  },]
};