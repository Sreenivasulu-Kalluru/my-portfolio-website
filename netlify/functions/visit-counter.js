// netlify/functions/visit-counter.js
// Persistent visit counter using Upstash Redis REST API.
// No npm package needed — just native Node fetch.
// Env vars required (set in Netlify UI → Site Settings → Environment Variables):
//   UPSTASH_REDIS_REST_URL   — e.g. https://your-db.upstash.io
//   UPSTASH_REDIS_REST_TOKEN — your Upstash REST token

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

  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  // If env vars aren't set yet, return a friendly placeholder
  if (!url || !token) {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ count: 0, note: 'env vars not set' }),
    };
  }

  const redisHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    let count;

    if (event.httpMethod === 'POST') {
      // INCR atomically increments the key and returns the new value
      const res = await fetch(`${url}/incr/portfolio-visits`, {
        method: 'POST',
        headers: redisHeaders,
      });
      if (!res.ok) throw new Error(`Upstash INCR failed: ${res.status}`);
      const data = await res.json();
      count = data.result;
    } else {
      // GET returns the current value without incrementing
      const res = await fetch(`${url}/get/portfolio-visits`, {
        headers: redisHeaders,
      });
      if (!res.ok) throw new Error(`Upstash GET failed: ${res.status}`);
      const data = await res.json();
      count = parseInt(data.result, 10) || 0;
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
