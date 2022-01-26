const { builder } = require("@netlify/functions");

async function handler(event) {
  return {
    body: event.path,
    statusCode: 200,
    ttl: 3600,
  };
}

exports.handler = builder(handler);
