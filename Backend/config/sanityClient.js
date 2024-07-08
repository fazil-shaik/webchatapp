const sanityClient = require('@sanity/client');
const dotenv = require('dotenv')
dotenv.config();

const client = sanityClient({
  projectId: '7fbd6azl', // Replace with your project ID
  dataset: 'production',
  apiVersion: '2023-07-05',
  token: 'sk9wW7MxDkIJRfBd7VeGfIdBbiDxW3boPAGYNpjwLpf2SXWGHfPU6dNIyJv5oLV8rruUXieIJIVTwc73OllWIG1OkAllDNkAhz1Unk0AagZUfrdGAAIU6znM5yKkma1E819sLRBrPr7O4yTLDXOxWXKutc0DXeNwxphgMVOS6QSZYAOuT1yA', // Replace with your Sanity token
  useCdn: false,
});

module.exports = client;
