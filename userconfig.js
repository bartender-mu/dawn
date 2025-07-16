const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshInterval: 10 // Changed from refreshIn
  },
  overrideStorage: false, // Disabled to avoid localStorage issues
  temperature: {
    location: 'Mahebourg, Mauritius',
    scale: 'C'
  },
  clock: {
    format: 'H:M:s',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    t: 'todo-list',
    s: 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'boards',
      background_url: '/img/banners/bg-1.gif', // Adjusted path
      categories: [
        {
          name: 'fun',
          links: [
            {
              name: '/WallPapers/',
              url: 'https://wallhaven.cc/',
              icon: 'fas fa-image' // Font Awesome icon
            },
            {
              name: '/musicForProgramming/',
              url: 'https://musicforprogramming.net',
              icon: 'fas fa-music',
              icon_color: '#64876d'
            },
            {
              name: '/Grok/',
              url: 'https://grok.com/',
              icon: 'fas fa-robot'
            }
          ]
        }
      ]
    }
  ]
});
