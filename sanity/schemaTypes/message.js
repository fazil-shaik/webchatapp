// sanity/schemas/message.js
export default {
  name: 'message',
  type: 'document',
  title: 'Message',
  fields: [
    {
      name: 'content',
      type: 'string',
      title: 'Content',
      validation: Rule => Rule.required().min(1).max(1000),
    },
    {
      name: 'sender',
      type: 'reference',
      to: [{ type: 'user' }],
      title: 'Sender',
      validation: Rule => Rule.required(),
    },
    {
      name: 'timestamp',
      type: 'datetime',
      title: 'Timestamp',
      validation: Rule => Rule.required(),
    }
  ]
};
