export default {
  name: 'profile',
  title: 'Site Profile & Settings',
  type: 'document',
  fields: [
    // Main Page
    {name: 'firstName', title: 'First Name', type: 'string'},
    {name: 'lastName', title: 'Last Name', type: 'string'},
    {name: 'nickname', title: 'Nickname', type: 'string'},
    {name: 'logo', title: 'Personal Logo', type: 'image'},

    // About Me
    {name: 'aboutDescription', title: 'About Me Description', type: 'text'},
    {name: 'profilePicture', title: 'Profile Picture', type: 'image', options: {hotspot: true}},
    {
      name: 'resume',
      title: 'Resume Upload',
      type: 'file',
      options: {accept: '.pdf'},
    },
    {
      name: 'techStack',
      title: 'My Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add your skills one by one.',
    },

    // Get In Touch
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {name: 'github', title: 'GitHub URL', type: 'url'},
        {name: 'linkedin', title: 'LinkedIn URL', type: 'url'},
        {name: 'email', title: 'Email Address', type: 'string'},
        {name: 'instagram', title: 'Instagram URL', type: 'url'},
      ],
    },
  ],
}
