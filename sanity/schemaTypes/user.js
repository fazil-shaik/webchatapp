// sanity/schemas/user.js
export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'username',
      type: 'string',
      title: 'Username',
      validation: Rule => Rule.required().min(3).max(50),
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password',
      validation: Rule => Rule.required().min(6),
      options: {
        isHighlighted: true, // To make this field not be shown in the Sanity Studio UI
      },
    }
  ]
};
