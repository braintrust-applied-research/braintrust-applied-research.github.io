module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    { resolve: `gatsby-theme-blog` },
  ],
  siteMetadata: {
    title: `Braintrust Applied Research, LLC`,
    author: `Braintrust Applied Research, LLC`,
    description: ``,
    siteUrl: `https://braintrustappliedresearch.com`,
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/BraintrustAR",
      }
    ],
  },
}
