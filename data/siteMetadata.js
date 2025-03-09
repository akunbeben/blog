/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Personal Writing Space',
  author: 'Benny Rahmat',
  headerTitle: 'Benny Rahmat',
  description: 'Benny Rahmat\'s Portfolio – A personal writing space to share my thoughts.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://beben.space',
  siteRepo: 'https://github.com/akunbeben/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'akunbeben@gmail.com',
  github: 'https://github.com/akunbeben',
  x: 'https://twitter.com/temanphp',
  youtube: 'https://www.youtube.com/@akunbeben',
  linkedin: 'https://www.linkedin.com/in/akunbeben',
  bluesky: 'https://bsky.app/profile/beben.space',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
  },
}

module.exports = siteMetadata
