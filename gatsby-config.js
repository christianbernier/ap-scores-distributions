module.exports = {
  plugins: [
    "gatsby-plugin-emotion",
    "@rhysforyou/gatsby-plugin-react-helmet-async",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    "gatsby-transformer-csv"
  ]
}