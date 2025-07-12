export async function handler(event, context) {
  const apiKey = "2dfe34e8a44c493095096dcfd8ba4020";
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to fetch news", error: err.message }),
    };
  }
}
