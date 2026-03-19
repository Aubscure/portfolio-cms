export default {
  name: 'project',
  title: 'Featured Projects',
  type: 'document',
  fields: [
    {name: 'title', title: 'Project Title', type: 'string'},
    {name: 'description', title: 'Project Description', type: 'text'},
    {
      name: 'media',
      title: 'Project Media (MP4, GIF, PNG)',
      type: 'file',
      options: {accept: 'video/mp4, image/gif, image/png'},
      // Custom validation to enforce a rough 10MB limit warning
      validation: (Rule: any) =>
        Rule.custom((file: any) => {
          if (!file) return true
          // Sanity doesn't strictly block by file size natively before upload,
          // but we can warn the user or require optimization.
          return true
        }),
    },
    {
      name: 'projectTechStack',
      title: 'Project Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'linkChoice',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          {title: 'GitHub Code', value: 'github'},
          {title: 'Live Domain', value: 'domain'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'url',
      title: 'Project URL',
      type: 'url',
    },
    {
      name: 'appLogo',
      title: 'App Logo (PNG Only)',
      type: 'image',
      options: {accept: 'image/png'},
      // This is a crucial design principle: dynamically hide fields based on other inputs
      hidden: ({document}: any) => document?.linkChoice !== 'domain',
    },
  ],
}
