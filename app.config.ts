export default defineAppConfig({
  docus: {
    title: 'learnkoinos.xyz',
    description: 'The best place to learn Koinos.',
    image: '',
    socials: {
      twitter: 'koinosnetwork',
      github: 'brklyn8900/learnkoinos',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'learnkoinos',
      owner: 'koinos',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: ["Made with ❤️ by Koinos Group"],
    }
  }
})
