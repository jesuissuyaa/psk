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
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: "100%",
              // ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              // height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
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
