const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'MUR',
    refreshIn: 10
  },
  overrideStorage: true,
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
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [
        {
          name: 'Technology',
          links: [
            {
              name: '/github/',
              url: 'https://github.com/',
              icon: 'brand-github'
            },
            {
              name: '/reddit/',
              url: 'https://www.reddit.com',
              icon: 'brand-reddit'
            }
          ]
        },
        {
          name: 'fun',
          links: [
            {
              name: '/WallPapers/',
              url: 'https://wallhaven.cc/',
              icon: 'wall'
            },
            {
              name: '/musicForProgramming/',
              url: 'https://musicforprogramming.net',
              icon: 'music',
              icon_color: '#64876d'
            },
            {
              name: '/Grok/',
              url: 'https://grok.com/',
              icon: 'alt'
            },
            {
              name: '/keybr/',
              url: 'https://keybr.com/',
              icon: 'keyboard',
              icon_color: '#8b647b'
            },
            {
              name: '/try hack me/',
              url: 'https://tryhackme.com/',
              icon: 'brand-hackerrank'
            },
            {
              name: '/hack tricks/',
              url: 'https://book.hacktricks.wiki/en/index.html',
              icon: 'brand-hackerrank'
            }
          ]
        },
        {
          name: 'Comfy',
          links: [
            {
              name: '/lounge/',
              url: 'https://sushigirl.us/lounge/catalog.html'
            },
            {
              name: '/comfy/',
              url: 'https://anon.cafe/comfy/catalog.html'
            }
          ]
        }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            }
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/'
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/',
              icon: 'alien'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog'
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }
  ]
});
