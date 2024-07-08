// backend/controllers/messageController.js
const sanityClient = require('../config/sanityClient');

exports.saveMessage = async (content, senderId) => {
  try {
    await sanityClient.create({
      _type: 'message',
      content,
      sender: {
        _type: 'reference',
        _ref: senderId
      },
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Error saving message:', err.message);
  }
};
