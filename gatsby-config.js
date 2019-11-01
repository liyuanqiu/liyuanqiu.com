module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-151330656-1',
      },
    },
    {
      resolve: 'gatsby-plugin-baidu-analytics',
      options: {
        siteId: 'a738ecac0b45aebfb8410e156f0c545a',
        head: false,
      },
    },
  ],
};
