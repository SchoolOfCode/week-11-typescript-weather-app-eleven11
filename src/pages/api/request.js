import "dotenv/config";

async function requestData(req, res) {
  let { query } = req.query;

  try {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${query}`
    );

    let response = await data.json();

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default requestData;
