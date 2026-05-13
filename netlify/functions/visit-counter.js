// netlify/functions/visit-counter.js
// Persistent visit counter using Netlify Blobs (built-in key-value store).
// No external API or account needed — runs entirely within your Netlify deployment.

const { getStore } = require('@netlify/blobs');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  // Handle preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  try {
    // 'portfolio-stats' is the Blob store name (scoped to your site)
    const store = getStore('portfolio-stats');

    // Read the current count (returns null if key doesn't exist yet)
    let count = await store.get('visit-count', { type: 'json' });
    if (typeof count !== 'number') count = 0;

    // POST = increment (new unique session visit)
    if (event.httpMethod === 'POST') {
      count += 1;
      await store.setJSON('visit-count', count);
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ count }),
    };
  } catch (error) {
    console.error('[visit-counter]', error.message);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Counter temporarily unavailable' }),
    };
  }
};
