module.exports = {
    base: '/ebook/',
    title: 'MY BLOG',
    description: 'description of my blog',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '小说', link: '/guide/java/第一章' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '百度', link: 'https://www.baidu.com' },
            {
                text: 'Languages',
                items: [
                  { text: '中文', link: '/language/chinese/'  },
                  { text: '日文', link: '/language/japanese/'  }
                ]
              }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'java',
              collapsable: true,
              children: [
                // '',           // -> /guide/README.md
                'java/第一章',  // -> /guide/installation.md
                'java/第二章'  // -> /guide/installation.md
              ]
            },
            {
                title: '大模型',
                collapsable: true,
                children: [
                  // '',           // -> /guide/README.md
                  '大模型/第一章',  // -> /guide/installation.md
                  '大模型/第二章'  // -> /guide/installation.md
                ]
              },
              {
                title: 'java',
                collapsable: true,
                children: [
                  // '',           // -> /guide/README.md
                  'java/第一章',  // -> /guide/installation.md
                  'java/第二章'  // -> /guide/installation.md
                ]
              },
              {
                  title: '大模型',
                  collapsable: true,
                  children: [
                    // '',           // -> /guide/README.md
                    '大模型/第一章',  // -> /guide/installation.md
                    '大模型/第二章'  // -> /guide/installation.md
                  ]
                },
                {
                    title: 'java',
                    collapsable: true,
                    children: [
                      // '',           // -> /guide/README.md
                      'java/第一章',  // -> /guide/installation.md
                      'java/第二章'  // -> /guide/installation.md
                    ]
                  },
                  {
                      title: '大模型',
                      collapsable: true,
                      children: [
                        // '',           // -> /guide/README.md
                        '大模型/第一章',  // -> /guide/installation.md
                        '大模型/第二章'  // -> /guide/installation.md
                      ]
                    },
                    {
                        title: 'java',
                        collapsable: true,
                        children: [
                          // '',           // -> /guide/README.md
                          'java/第一章',  // -> /guide/installation.md
                          'java/第二章'  // -> /guide/installation.md
                        ]
                      },
                      {
                          title: '大模型',
                          collapsable: true,
                          children: [
                            // '',           // -> /guide/README.md
                            '大模型/第一章',  // -> /guide/installation.md
                            '大模型/第二章'  // -> /guide/installation.md
                          ]
                        },
                        {
                            title: 'java',
                            collapsable: true,
                            children: [
                              // '',           // -> /guide/README.md
                              'java/第一章',  // -> /guide/installation.md
                              'java/第二章'  // -> /guide/installation.md
                            ]
                          },
                          {
                              title: '大模型',
                              collapsable: true,
                              children: [
                                // '',           // -> /guide/README.md
                                '大模型/第一章',  // -> /guide/installation.md
                                '大模型/第二章'  // -> /guide/installation.md
                              ]
                            },
                            {
                                title: 'java',
                                collapsable: true,
                                children: [
                                  // '',           // -> /guide/README.md
                                  'java/第一章',  // -> /guide/installation.md
                                  'java/第二章'  // -> /guide/installation.md
                                ]
                              },
                              {
                                  title: '大模型',
                                  collapsable: true,
                                  children: [
                                    // '',           // -> /guide/README.md
                                    '大模型/第一章',  // -> /guide/installation.md
                                    '大模型/第二章'  // -> /guide/installation.md
                                  ]
                                },
          ],
          // fallback
          '/': [
            '',        /* / */
            ['page-a', '页面A'],
            ['page-b', '页面B'],
            'config'
          ]
        }
    }
  }