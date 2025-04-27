// netlify/functions/locally.js

export async function handler(event) {
  const apiKey = process.env.LOCALLY_API_KEY;
  const { report, category, sku } = event.queryStringParameters || {};

  if (!report) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing report parameter" }),
    };
  }

  let url = `https://api.locally.com/data-sharing/v1/reports?report_type=${report}&api_key=${apiKey}`;
  if (category) url += `&category=${encodeURIComponent(category)}`;
  if (sku)      url += `&sku=${encodeURIComponent(sku)}`;

  // Node 18+ on Netlify provides fetch natively
  const res = await fetch(url);
  const body = await res.text();

  return {
    statusCode: res.status,
    headers: { "Content-Type": "application/json" },
    body,
  };
}
