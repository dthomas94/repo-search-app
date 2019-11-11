import axios from "axios";

export default async (req, res) => {
  const formattedQuery = req.query.q.replace(" ", "+");

  const params = {
    q: formattedQuery,
    sort: req.query.sortBy,
    order: req.query.order
  };
  const options = {
    method: "GET",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    params,
    url: `${process.env.github_api_url}/search/repositories`
  };

  try {
    const response = await axios(options);
    res.send(response.data)
  } catch (err) {
    console.error(err.response.data.errors);
    res.status(500).send(err.response.data)
  };
};


