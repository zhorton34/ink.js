const { readdirSync } = require('fs');

module.exports = {
  title: 'markdown-api',
  description: 'Api to quickly scaffold, document, test, and create npm packages.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation.md' },
      { text: 'Usage', link: '/utilization.md' },
      { text: 'API', link: '/api.md' },
      { text: 'GitHub', link: 'https://github.com/zhorton34/markdown-api.js' },
    ],
    sidebar: [{
      title: 'Get started',
      collapsable:false,
      children: [
        'installation',
        'usage',
      ],
    }, {
      title: 'API',
      collapsable: false,
      children: readdirSync('documentation/api', 'utf-8').map(file => `/api/${file}`),
    }],
  },
};
