module.exports = {
  title: 'Jimmy the Coder',
  description: 'Learn web development and do that thang',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,500|Noto+Serif+KR:600&display=swap&subset=korean'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Languages',
        items: [
          { text: 'Javascript', link: '/languages/javascript/' },
          { text: 'Typescript', link: '/languages/javascript/' },
          { text: 'Python', link: '/languages/python/' }
        ]
      },
      {
        text: 'Client',
        ariaLabel: 'Client',
        items: [
          { text: 'React', link: '/' },
          { text: 'Vue', link: '/' }
        ]
      },
      {
        text: 'Server',
        ariaLabel: 'Server',
        items: [
          { text: 'Express', link: '/' },
          { text: 'Django', link: '/backend/django/' }
        ]
      },
      {
        text: 'DevOps',
        ariaLabel: 'DevOps',
        items: [
          { text: 'Git', link: '/' },
          { text: 'Docker', link: '/' },
          { text: 'Kubernetis', link: '/' }
        ]
      },
      {
        text: 'Tools',
        ariaLabel: 'Tools',
        items: [{ text: 'SSH', link: '/' }]
      },
      {
        text: 'Computer Science',
        ariaLabel: 'Computer Science',
        items: [
          { text: 'Data Structure', link: '/' },
          { text: 'Algorithm', link: '/' }
        ]
      },
      { text: 'Blog', link: '/blog/' },
      { text: 'GitHub', link: 'https://www.github.com/hackthegist/' }
    ],
    sidebar: {
      '/languages/javascript/': ['', 'another'],
      '/languages/python/': [''],
      '/backend/django/': ['', 'orm-and-sql']
    },
    sidebarDepth: 2,
    searchPlaceholder: 'Search...',
    smoothScroll: true
  }

  //   locales: {
  //     '/': { lang: 'ko-KR', ariaLabel: 'langs' },
  //     '/en/': { selectText: 'langs', lang: 'en-US' }
  //   }
};
