module.exports = {
  siteMetadata: {
    title: "パサール・スニ・くにたち | 国立市のバリ・ガムランサークル",
    // titleTemplate:
    description:
      "国立市のバリ・ガムランサークル「パサール・スニ・くにたち」のウェブサイトです。練習日・発表予定のほか、ガムランの紹介や活動について報告するブログも書いています",
    url: "https://jovial-davinci-f6241b.netlify.com",
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@psk_kunitachi",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
