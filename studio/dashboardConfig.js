export default {
  widgets: [
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
                  buildHookId: '60f84ad63cfc4009082b6f33',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nw2zc6zh',
                  apiId: '7febb3a8-d10b-43a6-8acd-31d21531cf6a'
                },
                {
                  buildHookId: '60f84ad62587dc09a9430848',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dh8ppptk',
                  apiId: '8d7cb84c-3eef-4dec-a8f5-0f571b750d4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/malin-sofrone/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dh8ppptk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
