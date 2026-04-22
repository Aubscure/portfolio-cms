//portfolio-cms/schemas/experience.ts

export default {
  name: 'experience',
  title: 'Experience History',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Experience Category',
      type: 'string',
      description: 'E.g., College Experience, Freelance/Commission, OJT, etc.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Job or Project Title',
      type: 'string',
      description: 'E.g., Technical Team Lead, Backend Developer',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company or Institution',
      type: 'string',
      description:
        'E.g., Infinity Hub, University Name (Optional but highly recommended for context)',
    },
    {
      name: 'logo',
      title: 'Company or Institution Logo',
      type: 'image',
      options: {hotspot: true},
      description: 'Optional: Upload a logo representing this experience.',
    },
    {
      name: 'description',
      title: 'Experience Description',
      type: 'text',
      description: 'Provide the professional summary of your responsibilities and achievements.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {dateFormat: 'YYYY-MM'},
      description: 'Crucial for sorting your experiences chronologically on the frontend.',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {dateFormat: 'YYYY-MM'},
      description: 'Leave blank if this is your current role.',
    },
  ],
  // This preview configuration keeps your Sanity Studio dashboard clean and readable
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'logo',
    },
  },
}
