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
      validation: (Rule: any) =>
        Rule.custom((file: any) => {
          if (!file) return true
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
      name: 'githubLinks',
      title: 'GitHub Repositories',
      type: 'array',
      description: 'Add multiple repository links (e.g., Frontend, Backend, Infrastructure).',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Repository Label',
              type: 'string',
              description: 'e.g., "Frontend", "Backend API", "Mobile App"',
              validation: (Rule: any) => Rule.required().error('A label is required so the frontend knows what this repository is.'),
            },
            {
              name: 'url',
              title: 'Repository URL',
              type: 'url',
              validation: (Rule: any) => Rule.uri({scheme: ['http', 'https']}).required(),
            },
          ],
          // This preview configuration makes the Sanity Studio UI much cleaner to read
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
    },
    {
      name: 'liveUrl',
      title: 'Live Project URL',
      type: 'url',
      description: 'Link to the deployed application.',
      validation: (Rule: any) => Rule.uri({scheme: ['http', 'https']}),
    },
    {
      name: 'appLogo',
      title: 'App Logo (PNG Only)',
      type: 'image',
      options: {accept: 'image/png'},
      // Dynamically hide the field if there is no live URL provided
      hidden: ({document}: any) => !document?.liveUrl,
    },
  ],
  // Document-level validation to ensure at least one link is provided
// Document-level validation to ensure at least one link is provided
  validation: (Rule: any) => 
    Rule.custom((document: any) => {
      const hasGithubLinks = document?.githubLinks && document.githubLinks.length > 0;
      const hasLiveUrl = !!document?.liveUrl;

      if (!hasGithubLinks && !hasLiveUrl) {
        return 'System Requirement: You must provide at least one GitHub Repository link, a Live Project URL, or both.'
      }
      return true
    })
}