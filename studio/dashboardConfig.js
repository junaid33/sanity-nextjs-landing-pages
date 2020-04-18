export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e9b902c8d1bfb02d943ae5e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-22rin8jk',
                  apiId: 'd0b7f647-f1c0-4600-ad7e-5abefdab7d38'
                },
                {
                  buildHookId: '5e9b902dc732681e63218a78',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-64oaoev5',
                  apiId: 'd091f46c-647c-4a7d-b3dd-e39689320d90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/junaid33/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-64oaoev5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
