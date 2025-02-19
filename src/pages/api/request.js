import "dotenv/config";

async function requestData(req, res) {
  // Extract the 'query' parameter from the request query string
  let { query } = req.query;

  try {
    // Make a request to the Weather API using the extracted query parameter
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${query}`
    );

    // Parse the response as JSON
    let response = await data.json();

    // Send the parsed response back to the client with a 200 status code
    res.status(200).json(response);
  } catch (error) {
    // Log any errors to the console
    console.error(error);

    // Send a 500 status code with an error message if something goes wrong
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default requestData;
