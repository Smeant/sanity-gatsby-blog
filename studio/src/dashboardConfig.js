export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2abd3b57bc73fb540dd95c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oru39jx5',
                  apiId: 'fa3a6905-7cc8-4877-aa52-0ad4c9acc2aa'
                },
                {
                  buildHookId: '5f2abd3b740ef11d05d4cd89',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p38navha',
                  apiId: '17321bb4-bfb2-4a3a-acf1-47afd5296ec6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Smeant/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p38navha.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
